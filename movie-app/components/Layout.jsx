import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
    return (
        <div className="bg-darker min-h-screen text-dark2 min-w-[320px] overflow-x-auto">
            <NavBar />
            <main className="max-w-[1024px] mx-auto px-4"> 
                <Outlet />
            </main>
        </div>
    );
}