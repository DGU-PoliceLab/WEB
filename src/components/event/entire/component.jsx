// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const testData = [
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실1",
        event_time: "2024.05.02 17:42.34",
    },
];

const EntireEventList = () => {
    return (
        <div id="entireEventList">
            <div className="headerWrap">
                <p className="title">전체 이벤트 내역</p>
                <div className="funcWrap">
                    <button className="btn-2 btn-sm btn-round">
                        전체 확인
                    </button>
                    <button className="btn-2 btn-sm btn-round">
                        전체 보기
                    </button>
                </div>
            </div>
            <div className="eventWrap">
                {testData.map((data, idx) => (
                    <EventItem data={data} key={idx} />
                ))}
            </div>
        </div>
    );
};

const EventItem = ({ data }) => {
    const [event, setEvent] = useState(data);
    return (
        <div className="eventItem">
            <div className="typeWrap dataWrap">
                <span className="title">이벤트 명</span>
                <span className="content">{event.event_type}</span>
            </div>
            <div className="descWrap">
                <div className="locatonWrap dataWrap">
                    <span className="title">발생 장소</span>
                    <span className="content">{event.event_location}</span>
                </div>
                <div className="timeWrap dataWrap">
                    <span className="title">발생 시각</span>
                    <span className="content">{event.event_time}</span>
                </div>
            </div>
        </div>
    );
};

export default EntireEventList;
