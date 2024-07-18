// 라이브러리
// 서비스
// 컴포넌트
import StreamView from "@/components/streamview/component";
import PartialEventList from "@/components/event/ entire/component";
// 아이콘
// 스타일
import "./style.css";

const DetailViewPage = () => {
    return (
        <div id="detailViewPage" className="page">
            <div className="viewContainer">
                <div className="realtimeViewContainer">
                    <StreamView />
                </div>
                <div className="overViewContainer">
                    <div className="headerWrap">
                        <p className="title">객체 오버뷰</p>
                    </div>
                </div>
            </div>
            <div className="eventContainer">
                <PartialEventList />
            </div>
        </div>
    );
};

export default DetailViewPage;
