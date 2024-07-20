// 라이브러리
import { useEffect, useState } from "react";
// 서비스
// 컴포넌트
// 유틸
import { num_to_array } from "@/utils/array";
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
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실2",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실3",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실3",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실3",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실3",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실3",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실3",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실3",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실3",
        event_time: "2024.05.02 17:42.34",
    },
    {
        event_type: "폭행",
        event_location: "유치실3",
        event_time: "2024.05.02 17:42.34",
    },
];

const EventList = () => {
    const [data, setDate] = useState(testData);
    const [pageData, setPageData] = useState([]);
    const [curPage, setCurPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        setCurPage(0);
        setLastPage(Math.floor(data.length / perPage));
    }, [data]);
    useEffect(() => {
        console.log(pageData);
    }, [pageData]);
    useEffect(() => {
        let startIdx = curPage * perPage;
        let endIdx = (curPage + 1) * perPage;
        if (endIdx >= data.length) {
            endIdx = data.length;
        }
        console.log(startIdx, endIdx);
        setPageData(data.slice(startIdx, endIdx));
    }, [data, curPage, lastPage, perPage]);
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
                <EventTable data={pageData} />
            </div>
            <div className="pageControlWrap">
                <PageController
                    curPage={curPage}
                    lastPage={lastPage}
                    changePage={setCurPage}
                />
            </div>
        </div>
    );
};

const EventTable = ({ data }) => {
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
            {data.map((item, idx) => (
                <EventItem data={item} key={idx} />
            ))}
        </table>
    );
};

const EventItem = ({ data }) => {
    return (
        <tr className="eventItem">
            <td className="location">{data.event_location}</td>
            <td className="time">{data.event_time}</td>
            <td className="type">{data.event_type}</td>
            <td className="dummy"></td>
            <td className="check">{data.event_time}</td>
            <td className="detail">
                <button className="btn-1 btn-m btn-round">
                    이벤트 상세 보기
                </button>
            </td>
        </tr>
    );
};

const PageController = ({ curPage, lastPage, changePage }) => {
    const [indicator, setIndicator] = useState([]);
    const first = () => {
        changePage(0);
    };
    const last = () => {
        changePage(lastPage);
    };
    const prev = () => {
        if (curPage > 0) {
            changePage(curPage - 1);
        }
    };
    const next = () => {
        if (curPage < lastPage) {
            changePage(curPage + 1);
        }
    };
    useEffect(() => {
        const indArray = num_to_array(lastPage);
        setIndicator(indArray);
    }, [lastPage]);
    return (
        <div className="pageController">
            <button
                className="btn-2 btn-wh-sm btn-round-square"
                onClick={first}
            >
                <ChevronsLeft />
            </button>
            <button className="btn-2 btn-wh-sm btn-round-square" onClick={prev}>
                <ChevronLeft />
            </button>
            <div className="indicatorWrap">
                {indicator.map((item, idx) => (
                    <button
                        className={
                            idx == curPage
                                ? "indicator btn-3 btn-wh-sm btn-round-square"
                                : "indicator btn-1 btn-wh-sm btn-round-square"
                        }
                        key={`indicator${idx}`}
                        onClick={() => {
                            changePage(idx);
                        }}
                    >
                        <span>{item}</span>
                    </button>
                ))}
            </div>
            <button className="btn-2 btn-wh-sm btn-round-square" onClick={next}>
                <ChevronRight />
            </button>
            <button className="btn-2 btn-wh-sm btn-round-square" onClick={last}>
                <ChevronsRight />
            </button>
        </div>
    );
};

export default EventList;
