import {useNavigate} from "react-router-dom";

export function TextToSpeech(){
    const navigate = useNavigate();
    return(
        <div className="mx-auto px-5 pt-[150px] lg:pt-[200px]">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto w-[120px]">
                <path
                    d="M95.3535 38.0806C94.7852 36.8262 93.4643 36.0864 92.0896 36.1939C91.3242 36.2528 90.6203 36.4473 89.9649 36.7443C89.2277 37.0796 88.5544 37.5455 87.9374 38.1241C87.1669 38.8434 86.6012 39.6831 86.1532 40.5918C85.8332 41.2369 85.5747 41.9178 85.352 42.6193C84.8477 44.2141 84.712 45.8652 84.5866 47.5189C84.5507 48.0079 84.5686 48.4994 84.5661 48.9909C84.5661 49.3518 84.6019 49.7179 84.5712 50.0763C84.4407 51.6557 84.2948 53.2326 84.1488 54.8095C83.9927 56.4965 83.8468 58.1835 83.4884 59.8423C83.2426 60.9814 82.9021 62.2076 82.6897 62.6556C82.6897 62.6556 82.4669 63.4261 82.2519 63.4261C82.0369 63.4261 82.1342 62.2793 82.1316 62.054C82.1188 60.6487 82.2699 59.9677 82.3313 58.5854C82.4465 55.9845 82.641 53.3836 82.6845 50.7802C82.7229 48.4507 82.641 46.1186 82.5822 43.7891C82.5796 43.6432 82.5745 43.4973 82.5693 43.3514C82.5463 42.4068 82.4798 41.4596 82.385 40.5176C82.321 39.9058 82.2109 39.2888 82.0446 38.6975C81.7246 37.5507 80.8619 37.0208 79.6562 37.2179C79.2953 37.2768 78.9522 37.4175 78.6348 37.6044C78.2815 37.8118 77.9462 38.055 77.6364 38.3212C76.5664 39.253 75.7524 40.3819 75.1252 41.6593C73.7173 44.5187 72.9339 47.5292 73.0465 50.7214C73.0568 51.0029 73.0798 51.2845 73.0977 51.5661C73.1975 53.0637 73.3972 54.5561 73.4843 56.0536C73.579 57.7073 73.6302 59.3661 73.5994 61.0198C73.5636 62.8988 73.1771 64.7419 72.8878 66.5927C72.532 68.8736 72.1608 70.5606 70.8066 72.4114C70.6735 72.5931 70.095 73.2792 69.7289 73.3739C69.3628 73.4686 69.6905 72.5778 69.7187 72.4114C69.9823 70.8499 70.2562 69.5981 70.5404 68.0416C70.8348 66.4315 71.2136 64.8315 71.444 63.2137C71.7154 61.304 71.8894 59.3789 72.0635 57.459C72.1685 56.2994 72.1915 55.1295 72.0046 53.9699C71.9355 53.5398 71.828 53.1225 71.7 52.7155C71.5055 52.1037 71.2469 51.5175 70.8834 50.9748C70.2588 50.0379 69.327 49.6718 68.2723 50.0353C66.4164 50.6727 64.9777 51.7991 64.2712 53.7088C64.1201 54.1132 64.005 54.5279 63.9051 54.9426C63.6978 55.7976 63.5749 56.6706 63.5058 57.5537C63.3496 59.5325 63.2191 61.5113 63.068 63.4927C62.8684 66.1217 62.1593 68.6074 60.9741 70.9625C60.0013 72.8978 58.578 74.426 56.8193 75.6625C56.4021 75.9543 55.5573 76.4612 55.3601 76.2308C55.163 76.0004 56.1358 74.8996 56.4251 74.4798C57.6462 72.7109 58.8596 70.9369 59.799 68.9939C60.4492 67.65 61.0636 66.2958 61.3427 64.811C61.4399 64.2939 61.2505 64.0968 60.7282 64.2172C59.5405 64.4936 58.3552 64.7701 57.1674 65.0414C56.1793 65.2667 52.0297 66.5876 51.8454 64.7138C51.8096 64.3503 51.9606 63.997 52.1296 63.6744C52.7056 62.5737 53.5222 61.4909 54.6255 60.8816C56.6785 59.745 58.45 58.2219 60.1472 56.6143C60.6848 56.1048 61.1328 55.4981 61.6192 54.9324C61.9391 54.5612 62.2617 54.1926 62.5663 53.8137C62.597 53.7753 62.6303 53.7318 62.6636 53.6883C60.6412 51.561 57.2366 48.3176 53.6169 44.5264C51.5306 46.0649 49.4468 47.606 47.3605 49.1445C45.0873 50.8186 42.8294 52.5133 40.5358 54.1567C35.654 57.6587 31.3918 61.7469 28.4889 67.0586C24.6567 74.0779 22.6216 82.2517 20.2486 89.8392C18.7536 94.6237 17.5325 99.4721 17.0026 104.474C16.9693 104.789 17.0308 105.037 17.1844 105.296C17.6247 106.046 18.2262 106.645 18.8764 107.211C23.643 111.342 30.1835 113.482 36.3811 114.128C38.301 114.327 41.5316 114.77 42.4045 112.515C42.5812 112.057 42.7911 111.611 42.9831 111.158C43.5334 109.868 44.1529 108.603 44.6137 107.285C45.2793 105.375 46.0549 103.514 46.8433 101.653C48.9501 96.6818 52.0016 93.0749 56.8859 90.7275C60.2573 89.1071 63.667 87.5993 66.9616 85.8458C69.5625 84.4609 72.0815 82.9172 74.5927 81.3685C75.9059 80.557 77.1782 79.6559 78.3737 78.678C82.9047 74.9815 86.2274 70.3814 88.2651 64.9058C90.0059 60.2339 91.6519 55.5289 93.111 50.7546C94.117 47.4575 94.9107 44.1168 95.653 40.7582C95.8553 39.8469 95.735 38.9432 95.3458 38.0806H95.3535Z"
                    fill="#58A6FE"></path>
                <path
                    d="M95.7426 46.1722C95.7426 46.1722 95.3714 48.8755 94.6469 52.2469C93.925 55.6183 92.7194 59.4735 92.1408 61.0146C91.5623 62.5556 90.761 63.7383 90.0135 64.5575C89.266 65.3766 88.1934 65.1181 88.2728 64.9056C88.9844 63.0138 89.6679 60.5538 90.1748 59.2508C90.6816 57.9478 92.3353 53.2581 92.6707 50.9925C92.8447 49.8303 93.5436 47.5264 94.2374 46.3668C94.8953 45.2686 95.8987 45.4273 95.7426 46.1748V46.1722Z"
                    fill="#051F13"></path>
                <path
                    d="M86.1558 40.5891C85.3545 42.6166 85.0038 44.7515 84.9321 48.0026C84.8605 51.2563 84.264 55.9537 84.2001 57.3258C84.1361 58.6979 83.025 63.1598 82.2443 63.7486C81.4635 64.3374 82.3287 58.4598 82.4388 56.5322C82.5489 54.6046 82.6155 44.8463 82.595 44.0962C82.5745 43.3487 82.6564 43.4665 82.8177 43.2489C82.9789 43.0313 86.957 38.5617 86.1558 40.5866V40.5891Z"
                    fill="#051F13"></path>
                <path
                    d="M73.6122 53.6806C73.8733 58.6929 73.9117 63.6745 72.788 68.6253C72.5473 69.6851 70.7042 73.6376 69.6495 73.3714C68.5948 73.1052 70.6197 67.7089 70.8603 66.1192C71.2622 63.4697 71.6386 60.8176 71.9176 58.1528C72.0405 56.9675 72.1684 55.8565 71.9995 54.679C71.9022 53.9853 71.7896 53.2915 71.6667 52.6004L73.1003 51.561C73.1003 51.561 73.561 52.7591 73.6097 53.6806H73.6122Z"
                    fill="#051F13"></path>
                <path
                    d="M55.2476 76.5764C56.9346 75.9978 59.5354 73.781 60.4519 72.4319C61.3683 71.0828 61.7523 70.0717 62.0902 69.1066C62.4281 68.1415 63.4418 65.0415 63.2959 63.7461C63.15 62.4534 61.3785 63.0345 61.1328 64.1916C60.887 65.3486 60.178 68.5178 59.5687 69.4624C58.9595 70.407 56.4533 74.0702 55.9721 74.5029C55.4908 74.9355 52.8387 76.7197 53.7065 76.8631C54.5743 77.0064 55.2476 76.5738 55.2476 76.5738V76.5764Z"
                    fill="#051F13"></path>
                <path
                    d="M99.7719 45.1127C99.3163 44.9617 98.3231 44.8951 97.8418 45.0154C97.2044 45.1741 95.6608 45.7373 95.6608 45.7373C95.6608 45.7373 95.6326 45.786 95.5225 46.2672C95.3101 47.1913 95.1488 48.1283 94.9081 49.0447C94.153 51.9092 93.5719 54.825 92.571 57.6178C91.9745 59.2766 91.2705 60.8971 90.6305 62.5405C90.5358 62.7837 89.965 64.3069 90.0111 64.5526C90.1007 65.039 90.9275 63.8793 91.2756 63.5184C92.1204 62.6404 92.9703 61.7649 93.7997 60.8689C95.8758 58.6239 97.9391 56.366 100.013 54.1184C100.965 53.0842 101.835 51.9912 102.608 50.8187C102.892 50.3887 103 49.9253 103 49.4236C102.933 47.4499 101.648 45.7296 99.7719 45.1127Z"
                    fill="#58A6FE"></path>
                <path
                    d="M94.7263 11.6751C93.8866 10.4873 92.8473 9.49151 91.575 8.76962C87.2846 6.33259 82.5975 5.75406 77.918 7.23624C73.858 8.52131 71.293 11.2374 69.4294 15.2001C69.0044 16.1037 68.239 17.8266 68.1084 18.1184C67.9932 17.8701 65.9633 12.8936 63.0194 9.83965C56.3431 2.92024 45.5352 5.73357 41.4291 10.9558C41.2269 11.2143 41.0093 11.4601 40.8045 11.7161C39.6449 13.1854 38.9921 14.8596 38.7745 16.7104C38.5749 18.423 38.6849 20.1305 38.8795 21.8353C39.6807 28.8444 46.9995 37.5864 53.622 44.5212C57.2417 48.3099 60.6437 51.5558 62.6686 53.6831C62.7582 53.7752 62.8529 53.8751 62.9349 53.9621C63.2472 54.2975 63.5774 54.6175 63.9051 54.9375C64.0049 54.5227 64.1201 54.1106 64.2711 53.7036C64.9802 51.7939 66.4164 50.6675 68.2723 50.0301C69.327 49.6692 70.2613 50.0301 70.8834 50.9696C71.2443 51.5149 71.5054 52.1011 71.7 52.7103C72.0942 52.4006 72.4859 52.0908 72.8622 51.7632C72.939 51.6966 73.0183 51.6301 73.0977 51.5609C73.0797 51.2794 73.0567 50.9977 73.0465 50.7162C72.9338 47.524 73.7172 44.5135 75.1251 41.6541C75.7549 40.3767 76.5663 39.2478 77.6364 38.316C77.9436 38.0472 78.2815 37.8066 78.6348 37.5992C78.9496 37.4124 79.2927 37.2716 79.6562 37.2127C80.8619 37.0156 81.7245 37.5455 82.0445 38.6923C82.2109 39.2862 82.321 39.9006 82.385 40.5124C82.4976 41.5978 82.5667 42.6909 82.577 43.784H82.5821C83.7673 42.7677 84.9705 41.7002 86.1532 40.5866C86.6011 39.6779 87.1694 38.8408 87.9374 38.1189C88.5543 37.5404 89.2276 37.0744 89.9649 36.7391C94.4319 31.8548 97.8852 26.4176 97.7905 21.0264C97.729 17.5987 96.7025 14.4731 94.7237 11.6726L94.7263 11.6751Z"
                    fill="#FFC42F"></path>
            </svg>
            <p className="text-7xl font-[550] text-[#0D3C26] md:text-center py-6 text-center md:py-9">Under Progress</p><p
            className="text-xl font-sans text-center text-[#0D3C26]">See you Soon.</p>
            <button onClick={() => navigate('/talk')}
                    className="flex items-center justify-center whitespace-nowrap  h-12 rounded-lg px-8 text-white bg-[#0D3C26] hover:bg-emerald-950  mx-auto mt-14"
                    type="button">Try Pi
            </button>
        </div>
    )
}