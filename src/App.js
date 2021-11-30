import "./App.css";
import About from "./Components/About/About.js";
import Blog from "./Components/Blog/Blog.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";
import Home from "./Components/Home/Home.js";
import Project from "./Components/Project/Project.js";
import Service from "./Components/Service/Service.js";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Service></Service>
      <Project></Project>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
