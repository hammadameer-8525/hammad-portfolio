import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
import MotionSystem from "@/components/MotionSystem";
import Hero from "@/components/sections/Hero"; import About from "@/components/sections/About"; import Projects from "@/components/sections/Projects"; import Skills from "@/components/sections/Skills"; import Credentials from "@/components/sections/Credentials"; import Contact from "@/components/sections/Contact";
export default function Home(){return <><MotionSystem/><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Hero/><About/><Projects/><Skills/><Credentials/><Contact/></main><Footer/></>}
