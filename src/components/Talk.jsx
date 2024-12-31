import { useLocation } from 'react-router-dom';
import { Sidebar } from "./Sidebar";
import { Profile } from "./Profile";
import { Discover } from "./Discover";
import { Chat } from "./Chat";
import {Account} from "./Account.jsx";
import {History} from "./History.jsx";
import {Share} from "./Share.jsx";
import {Feedback} from "./Feedback.jsx";
import {TextToSpeech} from "./TextToSpeech.jsx";
import {useTopic} from "../context/TopicContext.jsx";
export default function Talk() {
    const topic = useTopic();
    console.log(topic.topic);
    const location = useLocation();
    const isProfile = location.pathname.includes('/talk/profile');
    const isChat = location.pathname === '/talk/chat';
    const isAccount = location.pathname === '/talk/profile/account';
    const isHistory = location.pathname === '/talk/profile/history';
    const isVoice = location.pathname === '/talk/profile/voice';
    const isShare = location.pathname === '/talk/profile/share';
    const isFeedback = location.pathname === '/talk/profile/feedback';

    return (
        <div className="grid grid-cols-[96px_375px_1fr] h-screen w-full">
            <div className="side-1 h-screen">
                <Sidebar />
            </div>

            <div className="side-2 flex flex-col border-r h-screen overflow-scroll scrollbar-hide">
                {isProfile ? <Profile /> : <Discover />}
            </div>

            <div className="side-3 h-screen relative">
                {isAccount && <Account/>}
                {isHistory && <History/>}
                {isShare && <Share/>}
                {isVoice && <TextToSpeech/>}
                {isFeedback && <Feedback/>}
                {!isChat && !isAccount && !isVoice && !isHistory && !isShare && !isFeedback && <Chat topic={topic.topic} />}
            </div>
        </div>
    );
}
