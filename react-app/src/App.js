// import './App.css';
// import {Route, Routes} from "react-router-dom";
// import Navigation from './view_pages/Navigation';
// import Projects from "./view_pages/Projects";
// import Home from "./view_pages/Home";
// import About from "./view_pages/About";
// import LoadPages from "./pages";

import Navbar from "./components/Navbar";
import About from "./components/About";
// import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import React from "react";
// import { useRef } from "react";
// import {useScrollSnap} from "react-use-scroll-snap";
// import AppendHead from "react-append-head";



export default function App() {
  // const scrollRef = useRef(null);
  // useScrollSnap({ref: scrollRef, duration:100, delay:5})
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <Navbar />
      {/* <div className="" ref={scrollRef}> */}
        <About />
        <Skills />
        <Projects />
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      {/* </div> */}
    </div>

  );

}




// class LoadPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pageToLoad: null
//     };
//   }
//   render() {
//     if (this.state.pageToLoad==='home'){
//       return(
//         <div>
//           <p>
//             This is {this.props.pageToLoad} page!
//           </p>
//           <button className="bg-slate-500 border[2]"
//           onClick={ () => {
//             console.log("Try this button clicked");
//             this.setState({pageToLoad:"projects"});
//           }}>
            
//             {this.state.pageToLoad}
//           </button>
//         </div>
//       );
//     }
//   }

// }





// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name:"Queen"
//     };
//   }

//   render() {
//   return (
//     <div className="App">
//       {/* <Navigation /> */}

//       <LoadPage pageToLoad={"home"}/>
//       {/* <LoadPages /> */}

//       <button onClick= {() => {<LoadPages />}}>
//         Click to load pages.
//       </button>



//       {/* <Routes>
//         <Route path='/' element={<Home />} /> 
//         <Route path='/projects' element={<Projects />} />
//         <Route path='/about' element={<About />} />
//       </Routes> */}
//     </div>
//   );
// }
// }


// export default App;


