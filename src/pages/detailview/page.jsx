// 라이브러리
// 서비스
// 컴포넌트
import StreamView from "@/components/streamview/component";
import OverView from "@/components/overview/component";
import PartialEventList from "@/components/event/partial/component";
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
                    <OverView />
                </div>
            </div>
            <div className="eventContainer">
                <PartialEventList />
            </div>
        </div>
    );
};

export default DetailViewPage;
