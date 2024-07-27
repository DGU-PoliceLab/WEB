// 라이브러리
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// 서비스
import { checkServer } from "@/services/serverService";
import { locationCctvRead } from "@/services/locationService";
import { logCheck } from "@/services/logService";
// 훅
import useNotification from "@/hooks/useNotification";
// 컴포넌트
import MenuList from "@/components/menulist/component";
// 유틸
import { get_datetime } from "@/utils/time";
// import { tts } from "@/utils/voice";
// 아이콘
import Logo from "@/assets/logo.png";
import { Menu, ChevronRight, Siren } from "lucide-react";
// 스타일
import "./style.css";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { showNotification } = useNotification();
    const [title, setTitle] = useState([]);
    const [time, setTime] = useState("");
    const [isMenu, setIsMenu] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [message, setMessage] = useState("");
    const [lastAlarm, setLastAlarm] = useState("");
    // 서버 상태 확인
    const check = async () => {
        const response = await checkServer();
        if (!response) {
            navigate("/error/server");
        }
    };
    // 시간 업데이트
    const updateTime = () => {
        const now = get_datetime();
        setTime(now.str);
    };
    // 상단 페이지 타이틀 설정
    const setDetailPageTitle = async (path) => {
        const response = await locationCctvRead();
        if (response != null) {
            const id = parseInt(path.split("/")[2]);
            let flag = false;
            response.forEach((item) => {
                if (item[0] == id) {
                    setTitle(["유치실 멀티뷰", item[1]]);
                    flag = true;
                    return true;
                }
            });
            if (!flag) {
                window.alert(
                    "유효하지 않은 주소입니다.\n유치실 멀티뷰 화면으로 돌아갑니다."
                );
                navigate("/");
            }
        } else {
            window.alert(
                "유효하지 않은 주소입니다.\n유치실 멀티뷰 화면으로 돌아갑니다."
            );
            navigate("/");
        }
    };
    // 메시지 문자열을 딕셔너리로 변환
    const parseMessage = (str) => {
        str = "[" + str + "]";
        const jsonString = str.replace(/'/g, '"');
        const obj = JSON.parse(jsonString);
        return obj[0];
    };
    // 알람 확인
    const checkAlarm = () => {
        setIsNew(false);
        setMessage("");
        logCheck();
    };
    // 매초마다 실행되는 함수
    useEffect(() => {
        const timer = setInterval(() => {
            check();
            updateTime();
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    // 상단 페이지 타이틀 설정
    useEffect(() => {
        const path = location.pathname;
        if (path == "/") {
            setTitle(["유치실 멀티뷰"]);
        } else if (path.startsWith("/detail")) {
            setDetailPageTitle(path);
        } else if (path == "/event") {
            setTitle(["이벤트 리스트"]);
        } else if (path == "/cctv") {
            setTitle(["CCTV 관리"]);
        }
    }, [location]);
    useEffect(() => {
        const ws = new WebSocket("wss://localhost:40000/ws");
        ws.onmessage = (event) => {
            const newMessage = parseMessage(event.data);
            setMessage(newMessage);
        };
        ws.onclose = () => {
            console.log("WebSocket connection closed");
            navigate("/error/server");
        };
        return () => {
            ws.close();
        };
    }, []);
    useEffect(() => {
        if (message != "") {
            setIsNew(true);
            const checkStr = `${message.event}, ${message.location}, ${message.occurred_at}`;
            if (lastAlarm != checkStr) {
                setLastAlarm(checkStr);
                const notificationBody = `${message.location}에서 ${message.event}발생`;
                showNotification("Policelab 2.0", {
                    body: notificationBody,
                    icon: "/logoBlack.png",
                    badge: "/logoBlack.png",
                });
            }
        }
    }, [message]);
    return (
        <div id="header">
            <div
                className="logoWrap"
                onClick={() => {
                    navigate("/");
                }}
            >
                <img className="logo" src={Logo} alt="" />
            </div>
            <div className="timeWrap">
                <p className="time">{time}</p>
            </div>
            <div className="titleWrap">
                {title.map((item, idx) => (
                    <p className="title">
                        {idx != 0 && <ChevronRight />}
                        {item}
                    </p>
                ))}
            </div>
            {isNew && (
                <div
                    className="alarmWrap"
                    onClick={() => {
                        checkAlarm();
                    }}
                >
                    <Siren />
                    <p>
                        {message.location}에서 {message.event}발생
                    </p>
                </div>
            )}
            <div
                className="menuWrap"
                onClick={() => {
                    setIsMenu(true);
                }}
            >
                <Menu className="menu icon_32" />
            </div>
            {isMenu && <MenuList toggle={setIsMenu} />}
        </div>
    );
};

export default Header;
