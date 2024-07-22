// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
import StreamView from "../streamview/component";
// 아이콘
import { LucideArrowUpRightFromSquare } from "lucide-react";
// 스타일
import "./style.css";
import { useNavigate } from "react-router-dom";

const testData = [
    {
        id: 0,
        name: "유치실 1",
        url: "rtsp://210.99.70.120:1935/live/cctv001.stream",
        event: false,
    },
    {
        id: 2,
        name: "유치실 2",
        url: "rtsp://210.99.70.120:1935/live/cctv002.stream",
        event: true,
    },
    {
        id: 3,
        name: "유치실 3",
        url: "rtsp://210.99.70.120:1935/live/cctv003.stream",
        event: false,
    },
    {
        id: 4,
        name: "유치실 4",
        url: "rtsp://210.99.70.120:1935/live/cctv004.stream",
        event: false,
    },
    {
        id: 5,
        name: "유치실 5",
        url: "rtsp://210.99.70.120:1935/live/cctv005.stream",
        event: false,
    },
    {
        id: 6,
        name: "유치실 6",
        url: "rtsp://210.99.70.120:1935/live/cctv006.stream",
        event: false,
    },
];

const MultiView = () => {
    const [viewData, setViewData] = useState(testData);
    return (
        <div id="multiview">
            {viewData.map((item, idx) => (
                <View
                    id={item.id}
                    name={item.name}
                    url={item.url}
                    event={item.event}
                />
            ))}
        </div>
    );
};

const View = ({ id = 0, name = "유치실", url = "rtsp://", event = false }) => {
    const navigate = useNavigate();
    return (
        <div className={event ? "view active" : "view"} key="id">
            <div className="headerWrap">
                <p className="title">[ {name} ]</p>
                <p className="event">[ 폭행 17:42:32 ]</p>
                <div
                    className="detailWrap"
                    onClick={() => {
                        navigate("/detail");
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
