import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import React from "react";
import DashboardLayout from "../layout/dashboard/";

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<></>}>
            <Component {...props} />
        </Suspense>
    );
}

export default function Router() {
    return useRoutes([
        {
            path: "/auth",
            children: [
                { path:"login", element: <LoginPage/> },
            ],
        },
        {
            path: "/",
            element: <DashboardLayout/>,
            children: [
                { element: <Navigate to={"/spotify"} replace />, index: true },
                { path: "spotify", element: <HomePage /> },
                { path: "journal", element: <JournalPage /> },
                { path: "post/:id", element: <PostEntryPage />},
            ],
        },
    ]);
}

const HomePage = Loadable(lazy(() => import("../pages/Main")));
const LoginPage = Loadable(lazy(() => import("../pages/Login")));
const JournalPage = Loadable(lazy(() => import("../pages/Journal")));
const PostEntryPage = Loadable(lazy(() => import("../pages/AddEntry")));
