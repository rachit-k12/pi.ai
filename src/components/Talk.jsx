import { useLocation } from 'react-router-dom';
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

export default function Talk() {
    const location = useLocation();
    const isProfile = location.pathname.includes('/talk/profile');

    return (
        <div className="grid grid-cols-1 md:grid-cols-[96px_1fr] lg:grid-cols-[96px_375px_1fr] h-screen w-full">
            <div className="md:block md:h-screen mx-auto">
                <Sidebar />
            </div>

            <MainContent isProfile={isProfile} />
        </div>
    );
}