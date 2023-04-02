
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widjet from './Widjet';
import SidebarLogOut from "./SidebarLogOut"
import FeedLogOut from "./FeedLogOut"
import WidjetLogOut from './WidjetLogOut';
import { useState } from 'react';


function App() {
  const [log,setLog] = useState(false)
  console.log(log);
  return (
    <div className="app">

    {/* <Sidebar/>
    <Feed/>
     <Widjet/> */}
    {log?<Sidebar setLog={setLog} />:<SidebarLogOut setLog={setLog} />}
     {/* <SidebarLogOut setLog={setLog} /> */}
     {log?<Feed/>:<FeedLogOut/>}
     {/* <FeedLogOut/> */}
     {log?<Widjet/>:<WidjetLogOut/>}
     {/* <WidjetLogOut/>*/}
    
   
    </div>
  );
}

export default App;
