import React from "react";

const Navbar: React.FC = () => {



    return(
       <div className="sticky top-0 navContainer flex bg-gray-950 text-amber-50 pt-2 h-[5vh]">
           <p className={"navButton ml-5 mr-10"}>Hard Facts</p>
           <p className={"navButton mr-10"}>Experience</p>
           <p className={"navButton mr-10"}>Skillset</p>
           <p className={"navButton mr-10"}>Projects</p>
       </div>
    )
}

export default Navbar