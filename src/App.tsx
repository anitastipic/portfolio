import Home from "./components/Home.tsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function App() {

    gsap.registerPlugin(ScrollTrigger);

    return (
      <div className="bg-black">
          <Home></Home>
      </div>
    )
}
export default App;

