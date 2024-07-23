// 라이브러리
import { useEffect, useState } from "react";
// 서비스
import { locationCctvRead } from "@/services/locationService";
// 컴포넌트
import StreamView from "../streamview/component";
// 유틸
import { get_datetime } from "@/utils/time";
// 아이콘
import { LucideArrowUpRightFromSquare } from "lucide-react";
// 스타일
import "./style.css";
import { useNavigate } from "react-router-dom";

const MultiView = () => {
    const [viewData, setViewData] = useState([]);
    const getLocationCctvData = async () => {
        const response = await locationCctvRead();
        if (response != null) {
            setViewData(response);
        } else {
            setViewData([]);
        }
    };
    useEffect(() => {
        getLocationCctvData();
    }, []);
    return (
        <div id="multiview">
            {viewData.map((item, idx) => (
                <View
                    id={item[0]}
                    name={item[1]}
                    url={item[4]}
                    event={false}
                    key={idx}
                />
            ))}
        </div>
    );
};

const View = ({ id = 0, name = "유치실", url = "rtsp://", event = false }) => {
    const navigate = useNavigate();
    const [time, setTime] = useState("");
    const updateTime = () => {
        const now = get_datetime();
        setTime(now.str);
    };
    useEffect(() => {
        updateTime();
        const timer = setInterval(() => {
            updateTime();
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className={event ? "view active" : "view"} key="id">
            <div className="headerWrap">
                <p className="title">[ {name} ]</p>
                {event && <p className="event">[ 낙상 {time} ]</p>}
                <div
                    className="detailWrap"
                    onClick={() => {
                        navigate(`/detail/${id}`);
                    }}
                >
                    <LucideArrowUpRightFromSquare />
                </div>
            </div>
            <div className="contentWrap">
                <StreamView url={url} />
            </div>
        </div>
    );
};

export default MultiView;
