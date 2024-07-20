// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
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

const EventList = () => {
    return (
        <div id="eventList">
            <div className="headerWrap">
                <p className="title">유치실 이벤트 내역</p>
                <div className="funcWrap">
                    <button className="btn-2 btn-sm btn-round">
                        전체 보기
                    </button>
                </div>
            </div>
            <div className="tableWrap">
                <EventTable data={testData} />
            </div>
            <div className="pageControlWrap">
                <PageController />
            </div>
        </div>
    );
};

const PageController = () => {
    return (
        <div className="pageController">
            <button className="btn-2 btn-wh-sm btn-round-square">
                <ChevronsLeft />
            </button>
            <button className="btn-2 btn-wh-sm btn-round-square">
                <ChevronLeft />
            </button>

            <button className="btn-2 btn-wh-sm btn-round-square">
                <ChevronsRight />
            </button>
            <button className="btn-2 btn-wh-sm btn-round-square">
                <ChevronRight />
            </button>
        </div>
    );
};

const EventTable = ({ data }) => {
    const [event, setEvent] = useState(data);
    return (
        <table className="eventTable">
            <tr>
                <th className="location">이벤트 발생 위치</th>
                <th className="time">이벤트 발생 일시</th>
                <th className="type">이벤트명</th>
                <th className="dummy"></th>
                <th className="check">이벤트 확인 일시</th>
                <th className="detail"></th>
            </tr>
            {event.map((data, idx) => (
                <EventItem data={data} key={idx} />
            ))}
        </table>
    );
};

const EventItem = ({ data }) => {
    const [event, setEvent] = useState(data);
    return (
        <tr className="eventItem">
            <td className="location">{event.event_location}</td>
            <td className="time">{event.event_time}</td>
            <td className="type">{event.event_type}</td>
            <td className="dummy"></td>
            <td className="check">{event.event_time}</td>
            <td className="detail">
                <button className="btn-1 btn-m btn-round">
                    이벤트 상세 보기
                </button>
            </td>
        </tr>
    );
};

export default EventList;
