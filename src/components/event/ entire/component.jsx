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

const PartialEventList = () => {
    return (
        <div id="partialEventList">
            <div className="headerWrap">
                <p className="title">유치장 이벤트 내역</p>
                <div className="funcWrap">
                    <button>전체 보기</button>
                </div>
            </div>
            <EventTable data={testData} />
        </div>
    );
};

const EventTable = ({ data }) => {
    const [event, setEvent] = useState(data);
    return (
        <table className="eventTable">
            <tr>
                <th className="time">이벤트 발생 일시</th>
                <th className="type">이벤트명</th>
                <th className="dummy"></th>
                <th className="check">이벤트 확인 일시</th>
                <th className="detail"></th>
            </tr>
            {event.map((data, idx) => (
                <EvnetItem data={data} key={idx} />
            ))}
        </table>
    );
};

const EvnetItem = ({ data }) => {
    const [event, setEvnet] = useState(data);
    return (
        <tr className="eventItem">
            <td className="time">{event.evnet_time}</td>
            <td className="type">{event.evnet_type}</td>
            <td className="dummy"></td>
            <td className="check">{event.evnet_time}</td>
            <td className="detail">
                <button>이벤트 상세 보기</button>
            </td>
        </tr>
    );
};

export default PartialEventList;
