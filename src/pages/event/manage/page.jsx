// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
import EventFilter from "@/components/event/filter/component";
import EventList from "@/components/event/list/component";

// import Dimmed from "@/components/dimmed/component";
// 아이콘
// 스타일
import "./style.css";
import DatePickerRHF from "@/components/ui/DatePicker/DatePickerRHF";

const EventManagePage = () => {
    return (
        <div id="eventManagePage" className="page">
            <DatePickerRHF type="dateWithTime" />
            <div className="filterContainer">
                <EventFilter />
            </div>
            <div className="eventContainer">
                <EventList />
            </div>
        </div>
    );
};

export default EventManagePage;
