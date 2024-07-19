// 라이브러리
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
import CctvModify from "../modify/component";
import CctvDelete from "../delete/component";
import Dimmed from "@/components/dimmed/component";
// 아이콘
// 스타일
import "./style.css";

const testData = [
    {
        id: 1,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 2,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 3,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 1,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 2,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 3,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 1,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 2,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 3,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 1,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 2,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 3,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 1,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 2,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 3,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 1,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 2,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
    {
        id: 3,
        name: "엣지카메라",
        url: "rtsp://~~~",
        createat: "2024. 04. 03. 17:29:19",
    },
];

const CctvList = ({ toggle }) => {
    const navigate = useNavigate();
    const [target, setTarget] = useState(false);
    const [method, setMethod] = useState("");
    useEffect(() => {
        if (target == false) {
            setMethod("");
        }
    }, [target]);
    return (
        <div id="cctvList">
            <div className="headerWrap">
                <p className="title">CCTV 관리</p>
                <div className="funcWrap">
                    <button
                        className="btn-2 btn-m btn-round"
                        onClick={() => {
                            toggle(true);
                        }}
                    >
                        CCTV 등록
                    </button>
                </div>
            </div>
            <div className="tableWrap">
                <CctvTable
                    setTarget={setTarget}
                    setMethod={setMethod}
                    data={testData}
                />
            </div>
            {target && method == "modify" && (
                <Dimmed
                    toggle={setTarget}
                    child={<CctvModify toggle={setTarget} data={target} />}
                ></Dimmed>
            )}
            {target && method == "delete" && (
                <Dimmed
                    toggle={setTarget}
                    child={<CctvDelete toggle={setTarget} data={target} />}
                ></Dimmed>
            )}
        </div>
    );
};

const CctvTable = ({ setTarget, setMethod, data }) => {
    const [cctv, setCctv] = useState(data);
    return (
        <table className="cctvTable">
            <tr>
                <th className="id">ID</th>
                <th className="name">CCTV명</th>
                <th className="url">URL</th>
                <th className="createat">등록일시</th>
                <th className="rename"></th>
                <th className="delete"></th>
            </tr>
            {cctv.map((data, idx) => (
                <CctvItem
                    setTarget={setTarget}
                    setMethod={setMethod}
                    data={data}
                    key={idx}
                />
            ))}
        </table>
    );
};

const CctvItem = ({ setTarget, setMethod, data }) => {
    const [cctv, setCctv] = useState(data);
    return (
        <tr className="cctvItem">
            <td className="id">{cctv.id}</td>
            <td className="name">{cctv.name}</td>
            <td className="url">{cctv.url}</td>
            <td className="createat">{cctv.createat}</td>
            <td className="rename">
                <button
                    className="btn-1 btn-m btn-round"
                    onClick={() => {
                        setTarget(data);
                        setMethod("modify");
                    }}
                >
                    수정
                </button>
            </td>
            <td className="delete">
                <button
                    className="btn-1 btn-m btn-round"
                    onClick={() => {
                        setTarget(data);
                        setMethod("delete");
                    }}
                >
                    삭제
                </button>
            </td>
        </tr>
    );
};

export default CctvList;
