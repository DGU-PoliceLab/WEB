// 라이브러리
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// 서비스
import { messageLive } from "@/services/messageService";
import { logCheck } from "@/services/logService";
// 컴포넌트
import MenuList from "@/components/menulist/component";
// 유틸
import { get_datetime } from "@/utils/time";
// 아이콘
import Logo from "@/assets/logo.png";
import { Menu, ChevronRight, Siren } from "lucide-react";
// 스타일
import "./style.css";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [title, setTitle] = useState([]);
    const [time, setTime] = useState("");
    const [isMenu, setIsMenu] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [message, setMessage] = useState("");
    const updateTime = () => {
        const now = get_datetime();
        setTime(now.str);
    };
    const parseMessage = (str) => {
        str = "[" + str + "]";
        const jsonString = str.replace(/'/g, '"');
        const obj = JSON.parse(jsonString);
        return obj;
    };
    const getMessage = async () => {
        const response = await messageLive();
        if (response != null) {
            const responseObj = parseMessage(response);
            if (responseObj != message && response != "") {
                setIsNew(true);
                setMessage(responseObj);
            }
        } else {
            setMessage("");
            setIsNew(false);
        }
    };
    const checkAlarm = () => {
        setIsNew(false);
        logCheck();
    };
    useEffect(() => {
        updateTime();
        const timer = setInterval(() => {
            updateTime();
            getMessage();
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        const path = location.pathname;
        if (path == "/") {
            setTitle(["유치실 멀티뷰"]);
        } else if (path == "/detail") {
            setTitle(["유치실 멀티뷰", "유치실1"]);
        } else if (path == "/event") {
            setTitle(["이벤트 리스트"]);
        } else if (path == "/cctv") {
            setTitle(["CCTV 관리"]);
        }
    }, [location]);
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
                    {message.map((item, idx) => (
                        <p>
                            {item.location}에서 {item.event}발생
                        </p>
                    ))}
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
