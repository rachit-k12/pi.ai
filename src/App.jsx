import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Onboarding from "./components/Onboarding";
import TakeName from "./components/PersonOnboarding";
import Talk from "./components/Talk";
import { Profile } from "./components/Profile";
import { Discover } from "./components/Discover";
import { Account } from "./components/Account";
import {History} from "./components/History.jsx";
import {Share} from "./components/Share.jsx";
import {Feedback} from "./components/Feedback.jsx";
import {TextToSpeech} from "./components/TextToSpeech.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/persononboarding" element={<TakeName />} />
            <Route path="/talk" element={<Talk />}>
                <Route index element={<Discover />} />
                <Route path="profile" element={<Profile />}>
                    <Route path="account" element={<Account />} />
                    <Route path="history" element={<History />} />
                    <Route path="voice" element={<TextToSpeech />} />
                    <Route path='feedback' element={<Feedback/>}/>
                    <Route path='share' element={<Share/>}/>

                </Route>
            </Route>
        </Routes>
    );
}

export default App;
