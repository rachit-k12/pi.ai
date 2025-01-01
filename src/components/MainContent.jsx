import { useLocation } from 'react-router-dom';
import { Profile } from "./Profile";
import { Discover } from "./Discover";
import { Chat } from "./Chat";
import { Account } from "./Account";
import { History } from "./History";
import { Share } from "./Share";
import { Feedback } from "./Feedback";
import { TextToSpeech } from "./TextToSpeech";
import { useTopic } from "../context/TopicContext";



export function MainContent({ isProfile }) {
    const topic = useTopic();
    const location = useLocation();
    const isChat = location.pathname === '/talk/chat';
    const isAccount = location.pathname === '/talk/profile/account';
    const isHistory = location.pathname === '/talk/profile/history';
    const isVoice = location.pathname === '/talk/profile/voice';
    const isShare = location.pathname === '/talk/profile/share';
    const isFeedback = location.pathname === '/talk/profile/feedback';

    return (
        <>
            <div className={`flex flex-col border-r ${isProfile ? "h-[40vh]":"h-[95vh]" } lg:h-screen overflow-scroll scrollbar-hide`}>
                {isProfile ? <Profile /> : <Discover />}
            </div>

            <div className="h-screen relative bg-secondary lg:block md:min-w-[100vw]  lg:min-w-full">
                {isAccount && <Account/>}
                {isHistory && <History/>}
                {isShare && <Share/>}
                {isVoice && <TextToSpeech/>}
                {isFeedback && <Feedback/>}
                {!isChat && !isAccount && !isVoice && !isHistory && !isShare && !isFeedback &&
                    <Chat topic={topic.topic} />
                }
            </div>
        </>
    );
}