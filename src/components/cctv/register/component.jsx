// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
import { Cctv } from "lucide-react";
// 스타일
import "./style.css";
import StreamView from "@/components/streamview/component";

const CctvRegister = ({ toggle }) => {
    const [cctv, setCctv] = useState({
        id: null,
        name: "",
        url: "",
        createat: "",
    });
    const update = (key, value) => {
        let cctvInfo = { ...cctv };
        cctvInfo[key] = value;
        setCctv(cctvInfo);
    };
    return (
        <div id="cctvRegister">
            <div className="headerWrap">
                <Cctv />
                <p className="title">CCTV 등록</p>
            </div>
            <div className="inputDataWrap">
                <div className="nameWrap inputGroupWrap">
                    <p className="title">CCTV명</p>
                    <div className="inputWrap">
                        <input
                            type="text"
                            placeholder="특수문자를 제외한 24자 이하로 작성해주세요."
                            onChange={(e) => {
                                update("name", e.target.value);
                            }}
                        />
                        <button className="btn-1 btn-sm btn-round">
                            중복 확인
                        </button>
                    </div>
                </div>
                <div className="urlWrap inputGroupWrap">
                    <p className="title">CCTV URL</p>
                    <div className="inputWrap">
                        <input
                            type="text"
                            placeholder="CCTV RTSP URL을 입력해주세요."
                            onChange={(e) => {
                                update("name", e.target.value);
                            }}
                        />
                        <button className="btn-1 btn-sm btn-round">
                            유효성검사
                        </button>
                    </div>
                </div>
            </div>
            <div className="testWrap">
                <StreamView />
            </div>
            <div className="footerWrap">
                <button className="btn-2 btn-lg btn-round">등록</button>
                <button
                    className="btn-1 btn-lg btn-round"
                    onClick={() => {
                        toggle(false);
                    }}
                >
                    취소
                </button>
            </div>
        </div>
    );
};

export default CctvRegister;
