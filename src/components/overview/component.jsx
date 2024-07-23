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
        console.log("response >>", response);
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
        }, 5000);
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
                            <View data={item} key={idx} />
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
    const [object, setObject] = useState(data);
    return (
        <div className="view">
            <div className="thumbWrap">
                <img
                    className="thumbnail"
                    src={"https://localhost:40000/file/snap/" + object.thumb}
                    alt={object.thumb}
                    key={object.thumb}
                />
            </div>
            <div className="contentWrap">
                <div className="nameWrap dataWrap">
                    <span className="value">{object.id}</span>
                </div>
                <div className="heartWrap dataWrap">
                    <Heart />
                    <span className="value">{object.heart}</span>
                    <span>BPM</span>
                </div>
                <div className="breathWrap dataWrap">
                    <Breath />
                    <span className="value">{object.breath}</span>
                    <span>회/분</span>
                </div>
                <div className="tempWrap dataWrap">
                    <Temp />
                    <span className="value">{object.temp}</span>
                    <span>도</span>
                </div>
                <div className="emotionWrap dataWrap">
                    <Emotion />
                    <span className="value">{object.emotion}</span>
                    <span>단계</span>
                </div>
            </div>
        </div>
    );
};

export default OverView;
