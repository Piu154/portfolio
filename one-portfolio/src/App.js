import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Experiences/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
