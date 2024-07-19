import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import ko from "date-fns/locale/ko";
import ReactDatePicker from "react-datepicker";
import formatDate from "@/utils/formatDate";
import formatTime from "@/utils/formatTime";
import { Calendar } from "lucide-react";
import "@/components/ui/DatePicker/DatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const DatePicker = (
    { startDate: defaultStartDate, endDate: defaultEndDate, onChange, type },
    forwardedRef
) => {
    const datePickerRef = useRef < ReactDatePicker > null;
    const [startDate, setStartDate] = useState(
        null > ((defaultStartDate && new Date(defaultStartDate)) || null)
    );
    const [endDate, setEndDate] = useState(
        null > ((defaultEndDate && new Date(defaultEndDate)) || null)
    );

    useEffect(() => {
        setStartDate((defaultStartDate && new Date(defaultStartDate)) || null);
        setEndDate((defaultEndDate && new Date(defaultEndDate)) || null);
    }, [defaultStartDate, defaultEndDate]);

    // 날짜와 시간을 고르는 input
    const handleChangeDateWithTimeInput = (name, value) => {
        if (value) {
            const dateObject = new Date(value);
            const date = formatDate(dateObject);
            const time = formatTime(dateObject);
            const event = {
                target: { name, value: { date, time } },
            };
            onChange(event);
            return;
        }
        onChange({ target: { name, value: { date: "", time: "" } } });
    };

    // 날짜만 고르는 input
    const handleChangePeriodInput = (name, value) => {
        if (value) {
            const dateObject = new Date(value);
            const date = formatDate(dateObject);
            const event = { target: { name, value: date } };
            onChange(event);
            return;
        }
        onChange({ target: { name, value: "" } });
    };

    // 부모에서 input 값 clear하기
    useImperativeHandle(forwardedRef, () => ({
        clearDatePicker: () => setStartDate(null),
    }));

    const CustomInput = forwardRef((props, ref) => {
        return (
            <div className={styles["calendar-input-wrap"]}>
                <Calendar />
                <input
                    {...props}
                    ref={ref}
                    type="text"
                    className={styles["calendar-input"]}
                />
            </div>
        );
    });

    switch (type) {
        case "dateWithTime": {
            return (
                <ReactDatePicker
                    locale={ko}
                    ref={datePickerRef}
                    customInput={<CustomInput />}
                    name="start_date_time"
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        handleChangeDateWithTimeInput("start_date_time", date);
                    }}
                    dateFormat="yyyy/MM/dd - aa h:mm"
                    showTimeSelect
                    placeholderText="날짜 및 시간"
                    autoComplete="off"
                    isClearable
                />
            );
        }

        case "period": {
            return (
                <>
                    <div>
                        <ReactDatePicker
                            locale={ko}
                            customInput={<CustomInput />}
                            name="start_date"
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                                handleChangePeriodInput("start_date", date);
                            }}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="yyyy/MM/dd"
                            placeholderText="시작일"
                            autoComplete="off"
                            isClearable
                        />
                    </div>
                    <span className={styles["wave"]}>~</span>
                    <div>
                        <ReactDatePicker
                            locale={ko}
                            customInput={<CustomInput />}
                            name="end_date"
                            selected={endDate}
                            onChange={(date) => {
                                setEndDate(date);
                                handleChangePeriodInput("end_date", date);
                            }}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            dateFormat="yyyy/MM/dd"
                            placeholderText="종료일"
                            autoComplete="off"
                            isClearable
                        />
                    </div>
                </>
            );
        }

        default:
            return;
    }
};

export default forwardRef(DatePicker);
