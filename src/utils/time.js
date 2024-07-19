// const get_current_datetime = () => {
//     let now = new Data();
//     return now;
// };

const get_datetime = (now = new Date()) => {
    let year = now.getFullYear(); // 년도
    let month = now.getMonth() + 1; // 월
    let date = now.getDate(); // 날짜
    let day = now.getDay(); // 요일
    let hours = now.getHours(); // 시
    let minutes = now.getMinutes(); // 분
    let seconds = now.getSeconds(); // 초
    return {
        str: `${year}. ${month}. ${date} ${hours}:${minutes}:${seconds}`,
        year: year,
        month: month,
        date: date,
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
};

const get_date = (now = new Date()) => {
    let year = now.getFullYear(); // 년도
    let month = now.getMonth() + 1; // 월
    let date = now.getDate(); // 날짜
    let day = now.getDay(); // 요일
    return {
        str: `${year}. ${month}. ${date}`,
        year: year,
        month: month,
        date: date,
        day: day,
    };
};

const get_time = (now = new Date()) => {
    let hours = now.getHours(); // 시
    let minutes = now.getMinutes(); // 분
    let seconds = now.getSeconds(); // 초
    return {
        str: `${hours}:${minutes}:${seconds}`,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
};

export { get_datetime, get_date, get_time };
