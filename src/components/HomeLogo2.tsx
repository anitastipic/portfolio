import React from "react";

const HomeLogo2: React.FC = () => {
    return (
        <div className="HomeLogoContainer h-[95vh] w-auto flex flex-col justify-center items-center">
            <video className="h-[55vh] w-auto mb-24" controls={false} loop={false} autoPlay={true} muted={true} src={"/ASlogo.mp4"}></video>
            <svg className="w-5 h-5 text-amber-50 dark:text-white opacity-50 animate-bounce" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 7 4 4 4-4M1 1l4 4 4-4"/>
            </svg>
        </div>

    )
}
export default HomeLogo2