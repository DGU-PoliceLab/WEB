// 라이브러리
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
// import "react-datepicker/dist/react-datepicker.css";
// 서비스

// 컴포넌트
// 유틸
import { get_datetime_obj } from "@/utils/time";
// 아이콘
import {
    Filter,
    CalendarClock,
    MapPin,
    TableProperties,
    RotateCw,
    Check,
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
    const [datetime, setDatetime] = useState(new Date());
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
        setDatetime([]);
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

    return (
        <div className="eventFilter">
            <div className="optionWrap">
                <div className="resetWrap">
                    <button
                        className="btn-3 btn-wh-sm btn-round-square"
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
                        className="btn-1 btn-sm btn-round-square"
                        htmlFor="datetime"
                    >
                        <CalendarClock />
                        날짜 및 시간
                    </label>
                    <div className="dropDownWrap datetime">
                        <ReactDatePicker
                            selected={datetime}
                            onChange={(date) => setDatetime(date)}
                        />
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
