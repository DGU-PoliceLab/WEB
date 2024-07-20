// 라이브러리
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
// import "react-datepicker/dist/react-datepicker.css";
// 서비스

// 컴포넌트
// 유틸
import { get_datetime } from "@/utils/time";
// 아이콘
import {
    Filter,
    CalendarClock,
    MapPin,
    TableProperties,
    RotateCw,
    Check,
    X,
} from "lucide-react";
// 스타일
import "./style.css";
import "./datetimepicker.css";

const EventFilter = () => {
    const [currentOpen, setCurrnetOpen] = useState("");
    const [isOpenDatetime, setIsOpenDatetime] = useState(false);
    const [isOpenLocation, setIsOpenLocation] = useState(false);
    const [isOpenType, setIsOpenType] = useState(false);
    const [locations, setLocations] = useState([
        "유치실 1",
        "유치실 2",
        "유치실 3",
    ]);
    const [types, setTypes] = useState([
        "감정",
        "낙상",
        "장시간 고정자세",
        "자해",
        "폭행",
    ]);
    const [datetime, setDatetime] = useState("");
    const [startDatetime, setStartDatetime] = useState(null);
    const [endDatetime, setEndDatetime] = useState(null);
    const [location, setLocation] = useState([]);
    const [type, setType] = useState([]);
    const initFocus = () => {
        setIsOpenDatetime(false);
        setIsOpenLocation(false);
        setIsOpenType(false);
    };
    const changeFocus = (sel) => {
        initFocus();
        if (sel == currentOpen) {
            setCurrnetOpen("");
        } else if (sel == "datetime") {
            setIsOpenDatetime(true);
            setCurrnetOpen("datetime");
        } else if (sel == "location") {
            setIsOpenLocation(true);
            setCurrnetOpen("location");
        } else if (sel == "type") {
            setIsOpenType(true);
            setCurrnetOpen("type");
        }
    };
    const initFilter = () => {
        initFocus();
        setDatetime("");
        initSelect("location");
        initSelect("type");
    };

    const initSelect = (target) => {
        const query = `input[name="${target}"]:checked`;
        const selectedEls = document.querySelectorAll(query);

        selectedEls.forEach((el) => {
            el.checked = false;
        });
        if (target == "location") {
            setLocation([]);
        } else if (target == "type") {
            setType([]);
        }
    };
    const updateSelect = (target) => {
        const query = `input[name="${target}"]:checked`;
        const selectedEls = document.querySelectorAll(query);

        let selected = [];
        selectedEls.forEach((el) => {
            selected.push(el.value);
        });
        if (target == "location") {
            setLocation(selected);
        } else if (target == "type") {
            setType(selected);
        }
    };

    const updateDatetime = (period) => {
        const now = new Date();
        let s_datetime = new Date();
        let e_datetime = new Date();
        switch (period) {
            case "today":
                s_datetime = new Date(s_datetime.setHours(0));
                s_datetime = new Date(s_datetime.setMinutes(0));
                setStartDatetime(s_datetime);
                setEndDatetime(e_datetime);
                break;

            case "yesterday":
                s_datetime = new Date(
                    s_datetime.setDate(s_datetime.getDate() - 1)
                );
                e_datetime = new Date(
                    e_datetime.setDate(e_datetime.getDate() - 1)
                );
                s_datetime = new Date(s_datetime.setHours(0));
                s_datetime = new Date(s_datetime.setMinutes(0));
                e_datetime = new Date(e_datetime.setHours(23));
                e_datetime = new Date(e_datetime.setMinutes(59));
                setStartDatetime(s_datetime);
                setEndDatetime(e_datetime);
                break;
            case "week":
                s_datetime = new Date(
                    s_datetime.setDate(s_datetime.getDate() - 6)
                );
                s_datetime = new Date(s_datetime.setHours(0));
                s_datetime = new Date(s_datetime.setMinutes(0));
                setStartDatetime(s_datetime);
                setEndDatetime(e_datetime);
                break;
            case "month":
                s_datetime = new Date(
                    s_datetime.setDate(s_datetime.getDate() - 30)
                );
                s_datetime = new Date(s_datetime.setHours(0));
                s_datetime = new Date(s_datetime.setMinutes(0));
                setStartDatetime(s_datetime);
                setEndDatetime(e_datetime);
                break;
            case "init":
                setStartDatetime(null);
                setEndDatetime(null);
                break;
            default:
                setStartDatetime(s_datetime);
                setEndDatetime(e_datetime);
        }
    };
    useEffect(() => {
        if (startDatetime !== null && endDatetime !== null) {
            const s_datetime = get_datetime(startDatetime);
            const e_datetime = get_datetime(endDatetime);
            setDatetime(`${s_datetime.str} - ${e_datetime.str}`);
        } else {
            setDatetime("");
        }
    }, [startDatetime, endDatetime]);
    return (
        <div className="eventFilter">
            <div className="optionWrap">
                <div className="resetWrap">
                    <button
                        className="btn-3 btn-wh-m btn-round-square"
                        onClick={initFilter}
                    >
                        <RotateCw className="icon_16" />
                    </button>
                </div>
                <div className="datetimeWrap optWrap">
                    <input
                        type="checkbox"
                        id="datetime"
                        onClick={() => {
                            changeFocus("datetime");
                        }}
                        checked={isOpenDatetime}
                    />
                    <label
                        className={
                            datetime == ""
                                ? "btn-1 btn-sm btn-round-square"
                                : "btn-1 btn-sm btn-round-square active"
                        }
                        htmlFor="datetime"
                    >
                        <CalendarClock />
                        날짜 및 시간 ({datetime})
                    </label>
                    <div className="dropDownWrap datetime">
                        <div className="detailWrap">
                            <div className="startWrap">
                                <p>시작일/시</p>
                                <ReactDatePicker
                                    className="datePicker"
                                    locale={ko}
                                    selected={startDatetime}
                                    dateFormat="yyyy/MM/dd - aa h:mm"
                                    showTimeSelect
                                    placeholderText="날짜 및 시간"
                                    autoComplete="off"
                                    onChange={(date) => {
                                        setStartDatetime(date);
                                    }}
                                />
                            </div>
                            <span>-</span>
                            <div className="endWrap">
                                <p>종료일/시</p>
                                <ReactDatePicker
                                    className="datePicker"
                                    locale={ko}
                                    selected={endDatetime}
                                    dateFormat="yyyy/MM/dd - aa h:mm"
                                    showTimeSelect
                                    placeholderText="날짜 및 시간"
                                    autoComplete="off"
                                    onChange={(date) => {
                                        setEndDatetime(date);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="shortCutWrap">
                            <button
                                className="btn-1 btn-sm btn-round-square"
                                onClick={() => {
                                    updateDatetime("today");
                                }}
                            >
                                오늘
                            </button>
                            <button
                                className="btn-1 btn-sm btn-round-square"
                                onClick={() => {
                                    updateDatetime("yesterday");
                                }}
                            >
                                어제
                            </button>
                            <button
                                className="btn-1 btn-sm btn-round-square"
                                onClick={() => {
                                    updateDatetime("week");
                                }}
                            >
                                일주일
                            </button>
                            <button
                                className="btn-1 btn-sm btn-round-square"
                                onClick={() => {
                                    updateDatetime("month");
                                }}
                            >
                                한달
                            </button>
                            <button
                                className="btn-1 btn-sm btn-round-square"
                                onClick={() => {
                                    updateDatetime("init");
                                }}
                            >
                                초기화
                            </button>
                        </div>
                    </div>
                </div>
                <div className="locationWrap optWrap">
                    <input
                        type="checkbox"
                        id="location"
                        onClick={() => {
                            changeFocus("location");
                        }}
                        checked={isOpenLocation}
                    />
                    <label
                        className={
                            location.length == 0
                                ? "btn-1 btn-sm btn-round-square"
                                : "btn-1 btn-sm btn-round-square active"
                        }
                        htmlFor="location"
                    >
                        <MapPin />
                        발생 위치 ({location.join(", ")})
                    </label>
                    <div className="dropDownWrap">
                        <div className="summaryWrap">
                            <p>총 {locations.length}개 위치</p>
                        </div>
                        {locations.map((item, idx) => (
                            <>
                                <input
                                    type="checkbox"
                                    name="location"
                                    id={`lddo${idx}`}
                                    value={item}
                                    onChange={() => {
                                        updateSelect("location");
                                    }}
                                />
                                <label
                                    className="dropDownOption"
                                    htmlFor={`lddo${idx}`}
                                >
                                    <Check />
                                    {item}
                                </label>
                            </>
                        ))}
                    </div>
                </div>
                <div className="typeWrap optWrap">
                    <input
                        type="checkbox"
                        id="type"
                        onClick={() => {
                            changeFocus("type");
                        }}
                        checked={isOpenType}
                    />
                    <label
                        className={
                            type.length == 0
                                ? "btn-1 btn-sm btn-round-square"
                                : "btn-1 btn-sm btn-round-square active"
                        }
                        htmlFor="type"
                    >
                        <TableProperties />
                        발생 이벤트 ({type.join(", ")})
                    </label>
                    <div className="dropDownWrap">
                        <div className="summaryWrap">
                            <p>총 {types.length}개 발생 이벤트</p>
                        </div>
                        {types.map((item, idx) => (
                            <>
                                <input
                                    type="checkbox"
                                    name="type"
                                    id={`tddo${idx}`}
                                    value={item}
                                    onChange={() => {
                                        updateSelect("type");
                                    }}
                                />
                                <label
                                    className="dropDownOption"
                                    htmlFor={`tddo${idx}`}
                                >
                                    <Check />
                                    {item}
                                </label>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventFilter;
