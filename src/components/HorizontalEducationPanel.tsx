import {useEffect, useLayoutEffect} from "react";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function HorizontalEducationPanel() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    useLayoutEffect(() => {
        const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#panelContainer",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=3500",
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);


    return (
        <div id={"panelContainer"} className="w-screen overflow-x-hidden relative">
            <div id={"wrapper"} className="flex bg-black min-w-[600vw] flex-nowrap overflow-hidden">
                <div className="panel h-[80vh] min-h-screen"></div>
                <div className="panel h-[100vh] min-w-[110vw] bg-black flex items-center">
                    <img
                        src="/educationImages/kindergarden.svg"
                        alt="childgroup and childcare teacher"
                        className="h-[60vh] "
                    />
                    <div className="text-white flex flex-col items-center">
                    <p className="font-bold text-xl">Kindergarten Teacher</p>
                    <p>2013-2017</p>
                    </div>
                </div>
                <div className="panel h-[100vh] min-w-[110vw] bg-black flex items-center ">
                    <img
                        src="/educationImages/books.svg"
                        alt="childgroup and childcare teacher"
                        className="w-[50vw]"/>
                    <div className="text-white flex flex-col items-center">
                        <p className="font-bold text-xl">English And American Studies</p>
                        <p>2018-2022</p>
                    </div>
                </div>
                <div className="panel h-[100vh] min-w-[110vw] bg-black flex items-center">
                    <img src="/educationImages/development.svg"
                         alt="childgroup and childcare teacher"
                         className="h-[50vh]"/>
                    <div className="text-white flex flex-col items-center">
                        <p className="font-bold text-xl">Fullstack Development</p>
                        <p>Jan 2023 - Dec 2023</p>
                    </div>
                </div>
                <div className="panel h-[30vh] min-h-screen"></div>
            </div>
        </div>

    )
}