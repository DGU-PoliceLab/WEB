import React, { forwardRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ko from "date-fns/locale/ko";
import ReactDatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import styles from "./DatePicker.module.css";

const DatePickerRHF = ({ type }) => {
    const { control } = useFormContext();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

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
                <div>
                    <Controller
                        control={control}
                        name="date_time"
                        render={({ field: { onChange, value } }) => (
                            <ReactDatePicker
                                locale={ko}
                                customInput={<CustomInput />}
                                selected={value}
                                dateFormat="yyyy/MM/dd - aa h:mm"
                                showTimeSelect
                                placeholderText="날짜 및 시간"
                                autoComplete="off"
                                isClearable
                                onChange={(date) => {
                                    onChange(date);
                                    setStartDate(date);
                                }}
                            />
                        )}
                    />
                </div>
            );
        }

        case "period": {
            return (
                <>
                    <div>
                        <Controller
                            control={control}
                            name="start_date"
                            render={({ field: { onChange, value } }) => (
                                <ReactDatePicker
                                    locale={ko}
                                    customInput={<CustomInput />}
                                    selected={value}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="yyyy/MM/dd"
                                    placeholderText="시작일"
                                    autoComplete="off"
                                    isClearable
                                    onChange={(date) => {
                                        onChange(date);
                                        setStartDate(date);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <span className={styles["wave"]}>~</span>
                    <div>
                        <Controller
                            control={control}
                            name="end_date"
                            render={({ field: { onChange, value } }) => (
                                <ReactDatePicker
                                    locale={ko}
                                    customInput={<CustomInput />}
                                    selected={value}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    dateFormat="yyyy/MM/dd"
                                    placeholderText="종료일"
                                    autoComplete="off"
                                    isClearable
                                    onChange={(date) => {
                                        onChange(date);
                                        setEndDate(date);
                                    }}
                                />
                            )}
                        />
                    </div>
                </>
            );
        }

        default:
            return;
    }
};

export default DatePickerRHF;
