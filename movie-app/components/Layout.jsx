import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
    const location = useLocation();
    const hideNavRoutes = ["/login", "/signup"]; // NavBar 숨길 경로

    const showNav = !hideNavRoutes.includes(location.pathname);

    return (
        <div className="bg-white dark:bg-[#0F0F0F] min-h-screen min-w-[320px] overflow-x-auto">
        {/* ✅ NavBar with glow */}
        {showNav && <NavBar />}

        {/* ✅ Main Content with light glow */}
        <main className="w-full max-w-[1240px] min-w-[320px] mx-auto px-4 transition-all duration-300">
            <Outlet />
        </main>
        </div>
    );
}
