// 라이브러리
import { useEffect, useState } from "react";
// 서비스
import { snapRead } from "@/services/snapService";
// 컴포넌트
// 아이콘
import { SquareDashedMousePointer } from "lucide-react";
import { Breath, Emotion, Heart, Temp } from "@/assets/icons/icons";
// 스타일
import "./style.css";

const OverView = ({ target }) => {
    const [objectData, setObjectData] = useState([]);
    const getObjectData = async () => {
        const response = await snapRead(target);
        if (response) {
            setObjectData(response);
        } else {
            setObjectData([]);
        }
    };
    useEffect(() => {
        getObjectData();
        const timer = setInterval(() => {
            getObjectData();
        }, 1000);
        return () => clearInterval(timer);
    }, [target]);
    return (
        <div id="overview">
            <div className="headerWrap">
                <p className="title">객체 오버뷰</p>
            </div>
            <div className="viewWrap" key={objectData}>
                {objectData.length != 0 ? (
                    <>
                        {objectData.map((item, idx) => (
                            <View data={item} key={item} />
                        ))}
                    </>
                ) : (
                    <div className="noData">
                        <SquareDashedMousePointer />
                        <p>감지된 객체가 없습니다.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const View = ({ data }) => {
    return (
        <div className="view">
            <div className="thumbWrap">
                <img
                    className="thumbnail"
                    src={"https://localhost:40000/file/snap/" + data.thumb}
                    alt={data.thumb}
                    key={data.thumb}
                />
            </div>
            <div className="contentWrap">
                <div className="nameWrap dataWrap">
                    <span className="value">{data.id}</span>
                </div>
                <div className="emotionWrap dataWrap">
                    <Emotion />
                    <span className="value">
                        {data.emotion == 0
                            ? "긍정 또는 무표정"
                            : data.emotion == 1
                            ? "부정 1단계"
                            : "부정 2단계"}
                    </span>
                </div>
                <div className="barWrap">
                    <div className={`bar step${data.emotion}`}></div>
                </div>
                <div className="heartWrap dataWrap">
                    <Heart />
                    <span className="value">{data.heart}</span>
                    <span>BPM</span>
                </div>
                <div className="breathWrap dataWrap">
                    <Breath />
                    <span className="value">{data.breath}</span>
                    <span>회/분</span>
                </div>
                <div className="tempWrap dataWrap">
                    <Temp />
                    <span className="value">{data.temp}</span>
                    <span>도</span>
                </div>
            </div>
        </div>
    );
};

export default OverView;
