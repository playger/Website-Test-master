import "./styles/index.scss";
import { classNames } from "shared/lib/className/classNames";
import { useTheme } from "./providers/themeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
    const { theme } = useTheme();

    return (
        <div
            className={classNames("app", { hovered: true, Selected: true }, [
                theme,
                "cls2",
                "cls3",
            ])}
        >
            <Navbar />
            <Suspense fallback="">
                <div className="content-page">
                    <Sidebar></Sidebar>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
