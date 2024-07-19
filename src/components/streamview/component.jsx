// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const StreamView = ({ name = null, url = null }) => {
    return (
        <div className="streamView">
            {url == null ? <p>No Signal</p> : <div></div>}
        </div>
    );
};

export default StreamView;
