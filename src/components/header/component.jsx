// 라이브러리
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
// 아이콘
import { Menu } from "lucide-react";
// 스타일
import "./style.css";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div id="header">
            <div
                className="logoWarp"
                onClick={() => {
                    navigate("/");
                }}
            >
                <img src="" alt="" className="logo" />
            </div>
            <div className="timeWrap">
                <p className="time">2024. 05. 02 17:42:32</p>
            </div>
            <div className="titleWrap">
                <p className="title">유치장 멀티뷰</p>
            </div>
            <div className="alarmWrap"></div>
            <div className="menuWarp">
                <Menu className="icon_32" />
            </div>
        </div>
    );
};

export default Header;
