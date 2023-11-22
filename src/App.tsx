import Navbar from "./components/Navbar.tsx";
import HomeLogo from "./components/HomeLogo.tsx";

function App() {

    return (
        <div>
            <Navbar/>
            <div className="bg-gray-950 flex flex-col justify-normal
             items-center text-center">
                <HomeLogo/>
            </div>
        </div>
    )
}

export default App
