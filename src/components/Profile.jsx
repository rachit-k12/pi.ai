import { ProfileLink } from "./ui/ProfileLink";

export function Profile() {
    return (
        <div className="w-full mx-auto md:mx-0 max-w-md p-4 md:p-6 space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-4xl font-serif text-primary-500 mb-6 md:mb-8">Profile</h1>

            <div className="space-y-4 md:space-y-5">
                <ProfileLink
                    to="/talk/profile/account"
                    icon="user"
                    label="Account"
                />
                <ProfileLink
                    to="/talk/profile/history"
                    icon="history"
                    label="Manage history"
                />
                <ProfileLink
                    to="/talk/profile/voice"
                    icon="voice"
                    label="Text to Speech"
                />
                <ProfileLink
                    to="/talk/profile/feedback"
                    icon="smile"
                    label="Give feedback"
                />
                <ProfileLink
                    to="/talk/profile/share"
                    icon="share"
                    label="Share Pi with others"
                />
            </div>

            <div className="border-t border-secondary-400 my-4 md:my-6"/>

            <div className="space-y-4 md:space-y-5">
                <ProfileLink
                    to="https://pi.ai/policy#privacy"
                    icon="shield"
                    label="Privacy policy"
                    external
                />
                <ProfileLink
                    to="https://pi.ai/policy#terms"
                    icon="file"
                    label="Terms of service"
                    external
                />
            </div>
        </div>
    );
}