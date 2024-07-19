// 라이브러리
import { useState } from "react";
// 서비스
// 컴포넌트
import StreamView from "../streamview/component";
// 아이콘
import { Breath, Emotion, Heart, Temp } from "@/assets/icons/icons";
// 스타일
import "./style.css";

const testData = [
    {
        id: 0,
        heart: 100,
        breath: 20,
        temp: 32.5,
        emotion: 0,
    },
    {
        id: 0,
        heart: 100,
        breath: 20,
        temp: 32.5,
        emotion: 0,
    },
    {
        id: 0,
        heart: 100,
        breath: 20,
        temp: 32.5,
        emotion: 0,
    },
];

const OverView = () => {
    const [viewData, setViewData] = useState(testData);
    return (
        <div id="overview">
            <div className="headerWrap">
                <p className="title">객체 오버뷰</p>
            </div>
            <div className="viewWrap">
                {viewData.map((item, idx) => (
                    <View data={item} />
                ))}
            </div>
        </div>
    );
};

const View = ({ data }) => {
    const [ojbect, setObject] = useState(data);
    return (
        <div className="view">
            <div className="thumbWrap">
                <img className="thumbnail" src="" alt="" />
            </div>
            <div className="contentWrap">
                <div className="nameWrap dataWrap">
                    <span className="value">{ojbect.id}</span>
                </div>
                <div className="heartWrap dataWrap">
                    <Heart />
                    <span className="value">{ojbect.heart}</span>
                    <span>BPM</span>
                </div>
                <div className="breathWrap dataWrap">
                    <Breath />
                    <span className="value">{ojbect.breath}</span>
                    <span>회/분</span>
                </div>
                <div className="tempWrap dataWrap">
                    <Temp />
                    <span className="value">{ojbect.temp}</span>
                    <span>도</span>
                </div>
                <div className="emotionWrap dataWrap">
                    <Emotion />
                    <span className="value">{ojbect.emotion}</span>
                    <span>단계</span>
                </div>
            </div>
        </div>
    );
};

export default OverView;
