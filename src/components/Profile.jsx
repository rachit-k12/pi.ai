import {Link} from "react-router-dom";

export function Profile() {
    return (
        <div className="w-80 p-6 space-y-6">
            <h1 className="text-4xl font-serif text-[#0e4435] mb-8">Profile</h1>

            <div className="space-y-5">
                <Link
                    to="/talk/profile/account"
                    className="flex items-center justify-between text-[#0e4435] text-lg"
                >
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                            <path
                                d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM18 20H6C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18V17.2C4 16.6333 4.146 16.1123 4.438 15.637C4.72933 15.1623 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6457 8.75 13.387C9.81667 13.129 10.9 13 12 13C13.1 13 14.1833 13.129 15.25 13.387C16.3167 13.6457 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2707 15.1623 19.562 15.637C19.854 16.1123 20 16.6333 20 17.2V18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20Z"></path>
                        </svg>
                        <span>Account</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-chevron-right w-5 h-5 text-gray-400">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </Link>

                <Link
                    to="/talk/profile/history"
                    className="flex items-center justify-between text-[#0e4435] text-lg"
                >
                    <div className="flex items-center gap-3">
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M10.0047 6C7.79315 6 6.00607 7.78771 6.00607 10C6.00607 12.2123 7.79315 14 10.0047 14C12.2162 14 14.0032 12.2123 14.0032 10C14.0032 7.78771 12.2162 6 10.0047 6ZM8.00536 10C8.00536 8.89228 8.89733 8 10.0047 8C11.112 8 12.0039 8.89228 12.0039 10C12.0039 11.1077 11.112 12 10.0047 12C8.89733 12 8.00536 11.1077 8.00536 10Z"
                                  fill="#0D3C26"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M11.5592 0C12.0601 0 12.4836 0.370822 12.55 0.867459L12.664 1.72L12.8539 3.06H12.8639C13.4537 3.31 13.9935 3.62 14.5433 4.03L15.8129 3.52L16.6183 3.1947C17.0796 3.00839 17.6077 3.18977 17.8573 3.62026L18.292 4.37L19.4201 6.32251C19.6679 6.75193 19.5637 7.29812 19.1753 7.60609L18.5019 8.14L17.4223 9C17.4723 9.36 17.4923 9.66 17.4923 9.99C17.4923 10.282 17.4657 10.5474 17.4292 10.9115C17.4269 10.9339 17.4246 10.9568 17.4223 10.98L18.4919 11.82L19.1828 12.3558C19.5774 12.662 19.6857 13.2125 19.4364 13.6453L19.0017 14.4L18.302 15.61L17.8673 16.3597C17.6177 16.7902 17.0896 16.9716 16.6283 16.7853L15.8229 16.46L14.5633 15.96C13.9935 16.38 13.4537 16.7 12.8739 16.94L12.674 18.29L12.5491 19.1447C12.4773 19.6358 12.0562 20 11.5599 20H8.43564C7.93693 20 7.51451 19.6323 7.44559 19.1382L7.32588 18.28L7.13595 16.94H7.12595C6.53616 16.69 5.99635 16.38 5.44655 15.97L4.177 16.48L3.37154 16.8053C2.91023 16.9916 2.38217 16.8102 2.13258 16.3797L1.69788 15.63L0.99813 14.42L0.563481 13.6653C0.314169 13.2325 0.422451 12.682 0.817113 12.3758L2.57757 11.01V10.94C2.57231 10.8786 2.56705 10.8196 2.56195 10.7625C2.53798 10.494 2.51759 10.2656 2.51759 10.01C2.51759 9.7 2.54758 9.39 2.58757 9.02L1.51795 8.18L0.827109 7.64416C0.432447 7.33805 0.324166 6.78753 0.573478 6.35466L1.00813 5.6L1.70788 4.39L2.14257 3.64026C2.39217 3.20977 2.92023 3.02839 3.38153 3.2147L4.187 3.54L5.44655 4.04C6.00635 3.62 6.55615 3.3 7.12595 3.06L7.32588 1.71L7.45079 0.855339C7.52257 0.364153 7.94369 0 8.43992 0H11.5592ZM10.6947 2H9.30518L9.10525 3.35L8.94531 4.48L7.88568 4.91C7.47583 5.08 7.06597 5.32 6.63613 5.64L5.73645 6.32L4.69682 5.9L3.42727 5.39L2.72752 6.6L3.80713 7.44L4.69682 8.14L4.55687 9.27C4.52688 9.57 4.50688 9.8 4.50688 10C4.50688 10.2 4.52688 10.43 4.55687 10.74L4.69682 11.87L3.80713 12.57L2.72752 13.41L3.42727 14.62L4.69682 14.11L5.75644 13.68L6.66612 14.38C7.06597 14.68 7.46583 14.91 7.89568 15.09L8.9553 15.52L9.30518 18H10.7047L10.9046 16.65L11.0646 15.52L12.1242 15.09C12.534 14.92 12.9439 14.68 13.3737 14.36L14.2734 13.68L15.313 14.1L16.5826 14.61L17.2823 13.4L16.2027 12.56L15.313 11.86L15.453 10.73C15.483 10.43 15.503 10.21 15.503 10C15.503 9.79 15.493 9.58 15.453 9.27L15.313 8.14L16.2027 7.44L17.2723 6.59L16.5726 5.38L15.303 5.89L14.2434 6.32L13.3337 5.62C12.9339 5.32 12.534 5.09 12.1042 4.91L11.0446 4.48L10.6947 2Z"
                                  fill="#0D3C26"></path>
                        </svg>
                        <span>Manage history</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-chevron-right w-5 h-5 text-gray-400">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </Link>

                <Link
                    to="/talk/profile/voice"
                    className="flex items-center justify-between text-[#0e4435] text-lg"
                >
                    <div className="flex items-center gap-3">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                             className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M5 7h2v10H5V7zm-4 3h2v4H1v-4zm8-8h2v18H9V2zm4 2h2v18h-2V4zm4 3h2v10h-2V7zm4 3h2v4h-2v-4z"></path>
                            </g>
                        </svg>
                        <span>Text to Speech</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-chevron-right w-5 h-5 text-gray-400">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </Link>

                <Link
                    to="/talk/profile/feedback"
                    className="flex items-center gap-3 text-[#0e4435] text-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-smile w-6 h-6">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                    </svg>
                    <span>Give feedback</span>
                </Link>

                <Link
                    to="/talk/profile/share"
                    className="flex items-center gap-3 text-[#0e4435] text-lg"
                >
                    <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <g id="Iconography/24px">
                            <path id="Vector"
                                  d="M13.7778 9.46667V6L20 12.0667L13.7778 18.1333V14.58C9.33333 14.58 6.22222 15.9667 4 19C4.88889 14.6667 7.55556 10.3333 13.7778 9.46667Z"></path>
                        </g>
                    </svg>
                    <span>Share Pi with others</span>
                </Link>


            </div>


            <div className="border-t border-[#e6e2e0] my-6"/>

            <div className="space-y-5">
                <Link
                    to="https://pi.ai/policy#privacy"
                    className="flex items-center justify-between text-[#0e4435] text-lg"
                >
                <div className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"
                         className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span>Privacy policy</span>
                </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-chevron-right w-5 h-5 text-gray-400">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </Link>

                <Link
                    to="https://pi.ai/policy#terms"
                    className="flex items-center justify-between text-[#0e4435] text-lg"
                >
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-file-text w-6 h-6">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                        </svg>
                        <span>Terms of service</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-chevron-right w-5 h-5 text-gray-400">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </Link>

            </div>
        </div>
    )
}

