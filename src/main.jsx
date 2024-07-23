// 라이브러리
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 서비스
// 레이아웃
import RootLayout from "./layouts/root/layout";
// 페이지
import MultiViewPage from "./pages/multiview/page";
import DetailViewPage from "./pages/detailview/page";
import EventManagePage from "./pages/event/manage/page";
import CctvManagePage from "./pages/cctv/manage/page";
import NotFoundPage from "./pages/notfound/page";
// 스타일
import "./index.css";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <MultiViewPage />,
            },
            {
                path: "/detail/:id",
                element: <DetailViewPage />,
            },
            {
                path: "/event",
                element: <EventManagePage />,
            },
            {
                path: "/cctv",
                element: <CctvManagePage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
