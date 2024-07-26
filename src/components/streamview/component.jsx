// 라이브러리
import { useEffect, useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const StreamView = ({ url }) => {
    const [strUrl, setStrUrl] = useState(url);
    const [rtspUrl, setRtspUrl] = useState(null);
    const conv = (strUrl) => {
        let stream = "https://localhost:40000/rtsp?url=";
        stream += btoa(strUrl);
        setRtspUrl(stream);
    };
    useEffect(() => {
        conv(strUrl);
    }, []);
    return (
        <div className="streamView">
            {rtspUrl == null ? (
                <p>No Signal</p>
            ) : (
                <>
                    <span className="spinner"></span>
                    <img src={rtspUrl} alt="" srcset="" />
                </>
            )}
        </div>
    );
};

export default StreamView;
