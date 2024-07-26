// 라이브러리
import { useState } from "react";
// 서비스
import { cctvCreate } from "@/services/cctvService";
// 컴포넌트
// 아이콘
import { Cctv } from "lucide-react";
// 스타일
import "./style.css";
import StreamView from "@/components/streamview/component";

const CctvRegister = ({ toggle }) => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const update = (key, value) => {
        if (key == "name") {
            setName(value);
        } else if (key == "url") {
            setUrl(value);
        }
    };
    const funcCreate = async (name, url) => {
        if (name != "" && url != "") {
            const response = await cctvCreate(name, url);
            if (response) {
                window.alert("성공적으로 등록되었습니다.");
                toggle(false);
            } else {
                window.alert("등록에 실패하였습니다.");
            }
        }
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
                            placeholder="24자 이하로 작성해주세요."
                            onChange={(e) => {
                                update("name", e.target.value);
                            }}
                            defaultValue={name}
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
                                update("url", e.target.value);
                            }}
                            defaultValue={url}
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
                <button
                    className="btn-2 btn-lg btn-round"
                    onClick={() => {
                        funcCreate(name, url);
                    }}
                >
                    등록
                </button>
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
