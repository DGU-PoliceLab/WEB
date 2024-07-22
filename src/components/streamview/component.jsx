// 라이브러리
import { useEffect, useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const StreamView = ({ name = null, url = null }) => {
    const [rtspUrl, setRtspUrl] = useState("");
    const conv = (strUrl) => {
        let stream = "http://localhost:40000/rtsp?url=";
        stream += btoa(url);
        setRtspUrl(stream);
    };
    useEffect(() => {
        conv(url);
    }, []);
    return (
        <div className="streamView">
            {url == null ? (
                <p>No Signal</p>
            ) : (
                <img src={rtspUrl} alt="" srcset="" />
            )}
        </div>
    );
};

export default StreamView;
