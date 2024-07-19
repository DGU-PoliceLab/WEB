// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
import CctvList from "@/components/cctv/list/component";
import CctvRegister from "@/components/cctv/register/component";
import Dimmed from "@/components/dimmed/component";
// 아이콘
// 스타일
import "./style.css";

const CctvManagePage = () => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <div id="cctvManagePage" className="page">
            <div className="cctvContainer">
                <CctvList toggle={setIsRegister} />
            </div>
            {isRegister && (
                <Dimmed
                    toggle={setIsRegister}
                    child={<CctvRegister toggle={setIsRegister} />}
                />
            )}
        </div>
    );
};

export default CctvManagePage;
