import './App.css';
import React,{useState}from 'react'
import Navbar from './components/Navbar';
import News  from './components/News'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App=()=> {

  const [state, setState] = useState(0);
  
  const setProgress =(progress) =>{
    setState(progress)
  }

    return (
      <>
      <LoadingBar
        color='#f11946'
        progress={state.progress}
      />
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exect path="/" element={<><News setProgress={setProgress} key="general" pageSize={5} country={"in"} category={"general"}/></>}/>     
      <Route exect path="about" element={<>About page</>}/>     
      <Route exect path="business" element={<><News setProgress={setProgress} key="business" pageSize={5} country={"in"} category={"business"}/></>}/>     
      <Route exect path="entertainment" element={<><News setProgress={setProgress} key="entertainment" pageSize={5} country={"in"} category={"entertainment"}/></>}/>     
      <Route exect path="health" element={<><News setProgress={setProgress} key="health" pageSize={5} country={"in"} category={"health"}/></>}/>     
      <Route exect path="science" element={<><News setProgress={setProgress} key="science" pageSize={5} country={"in"} category={"science"}/></>}/>     
      <Route exect path="sports" element={<><News setProgress={setProgress} key="sports" pageSize={5} country={"in"} category={"sports"}/></>}/>     
      <Route exect path="technology" element={<><News setProgress={setProgress} key="technology" pageSize={5} country={"in"} category={"technology"}/></>}/>      
     </Routes>
     </BrowserRouter>
    </>
    )
  }
  export default App;
