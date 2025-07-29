import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
    return (
        <div className="bg-white text-black dark:bg-darker dark:text-dark2 min-h-screen min-w-[320px] overflow-x-auto">
            <NavBar />
            <main className="max-w-[1024px] mx-auto px-4 mt-5"> 
                <Outlet />
            </main>
        </div>
    );
}