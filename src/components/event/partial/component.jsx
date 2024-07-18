// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
import { Menu } from "lucide-react";
// 스타일
import "./style.css";

const testData = [
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
    {
        evnet_type: "폭행",
        event_location: "유치장1",
        evnet_time: "2024.05.02 17:42.34",
    },
];

const EntireEventList = () => {
    return (
        <div id="entireEventList">
            <div className="headerWrap">
                <p className="title">전체 이벤트 내역</p>
                <div className="funcWrap">
                    <button>전체 확인</button>
                    <button>전체 보기</button>
                </div>
            </div>
            {testData.map((data, idx) => (
                <EvnetItem data={data} key={idx} />
            ))}
        </div>
    );
};

const EvnetItem = ({ data }) => {
    const [event, setEvnet] = useState(data);
    return (
        <div className="eventItem">
            <div className="typeWrap dataWrap">
                <span className="title">이벤트 명</span>
                <span className="content">{event.evnet_type}</span>
            </div>
            <div className="descWrap">
                <div className="locatonWrap dataWrap">
                    <span className="title">발생 장소</span>
                    <span className="content">{event.event_location}</span>
                </div>
                <div className="timeWrap dataWrap">
                    <span className="title">발생 시각</span>
                    <span className="content">{event.evnet_time}</span>
                </div>
            </div>
        </div>
    );
};

export default EntireEventList;
