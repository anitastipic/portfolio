import Navbar from "./components/Navbar.tsx";
import HomeLogo from "./components/HomeLogo.tsx";
import HomeLogo2 from "./components/HomeLogo2.tsx";

function App() {

    return (
        <div className="bg-black">
            <Navbar/>
            <div className="bg-black flex flex-col justify-normal
             items-center text-center">
                <HomeLogo2/>
                <HomeLogo/>
            </div>
        </div>
    )
}

export default App
