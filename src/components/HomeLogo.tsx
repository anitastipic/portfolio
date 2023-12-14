import {useEffect, useRef} from "react";

export default function HomeLogo2() {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.3;
        }
    }, []);

    return (
        <div className="HomeLogoContainer h-[100vh] w-auto flex flex-col justify-center items-center">
            <video ref={videoRef} className="h-[55vh] w-auto" controls={false} loop={false} autoPlay={true} muted={true}
                   src={"/ASlogo.mp4"}></video>
            <div className="h-[20vh]">
                <svg className="w-5 h-5 text-amber-50 dark:text-white opacity-50 animate-bounce" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m1 7 4 4 4-4M1 1l4 4 4-4"/>
                </svg>
            </div>
        </div>
    )
}
