// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
import StreamView from "../streamview/component";
// 아이콘
import { LucideArrowUpRightFromSquare } from "lucide-react";
// 스타일
import "./style.css";

const testData = [
    {
        id: 0,
        name: "유치실 1",
        url: "",
        event: false,
    },
    {
        id: 2,
        name: "유치실 2",
        url: "",
        event: true,
    },
    {
        id: 3,
        name: "유치실 3",
        url: "",
        event: false,
    },
    {
        id: 4,
        name: "유치실 4",
        url: "",
        event: false,
    },
    {
        id: 5,
        name: "유치실 5",
        url: "",
        event: false,
    },
    {
        id: 0,
        name: "유치실 1",
        url: "",
        event: false,
    },
    {
        id: 2,
        name: "유치실 2",
        url: "",
        event: true,
    },
    {
        id: 3,
        name: "유치실 3",
        url: "",
        event: false,
    },
    {
        id: 4,
        name: "유치실 4",
        url: "",
        event: false,
    },
    {
        id: 5,
        name: "유치실 5",
        url: "",
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
    return (
        <div className={event ? "view active" : "view"} key="id">
            <div className="headerWrap">
                <p className="title">[ {name} ]</p>
                <p className="event">[ 폭행 17:42:32 ]</p>
                <div className="detailWrap">
                    <LucideArrowUpRightFromSquare />
                </div>
            </div>
            <div className="contentWrap">
                <StreamView />
            </div>
        </div>
    );
};

export default MultiView;
