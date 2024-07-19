// 라이브러리
import { useEffect, useState } from "react";
// 서비스
// 컴포넌트
// 아이콘
import { Cctv, AlertTriangle } from "lucide-react";
// 스타일
import "./style.css";
import StreamView from "@/components/streamview/component";

const CctvDelete = ({ toggle, data }) => {
    const [cctv, setCctv] = useState(data);
    const update = (key, value) => {
        let cctvInfo = { ...cctv };
        cctvInfo[key] = value;
        setCctv(cctvInfo);
    };
    return (
        <div id="cctvDelete">
            <div className="headerWrap">
                <Cctv />
                <p className="title">CCTV 삭제</p>
            </div>
            <div className="msg msgDanger">
                <AlertTriangle />
                <p>이 동작은 되돌릴 수 없습니다.</p>
            </div>

            <div className="inputDataWrap">
                <div className="idWrap inputGroupWrap">
                    <p className="title">CCTV ID</p>
                    <div className="inputWrap">
                        <input type="text" value={cctv.id} disabled />
                    </div>
                </div>
                <div className="nameWrap inputGroupWrap">
                    <p className="title">CCTV명</p>
                    <div className="inputWrap">
                        <input type="text" value={cctv.name} disabled />
                    </div>
                </div>
                <div className="urlWrap inputGroupWrap">
                    <p className="title">CCTV URL</p>
                    <div className="inputWrap">
                        <input type="text" value={cctv.url} disabled />
                    </div>
                </div>
            </div>
            <div className="footerWrap">
                <button className="btn-2 btn-lg btn-round">삭제</button>
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

export default CctvDelete;
