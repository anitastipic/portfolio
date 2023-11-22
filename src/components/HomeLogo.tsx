import React from "react";

const HomeLogo: React.FC = () => {
    return (
        <div className="HomeLogoContainer h-[94vh] flex flex-col justify-center items-center">
            <img src="/logo.png" className="h-[60vh] w-auto"/>
            <svg className="w-5 h-5 text-amber-50 dark:text-white animate-bounce mt-10" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 7 4 4 4-4M1 1l4 4 4-4"/>
            </svg>
        </div>
    )
}
export default HomeLogo