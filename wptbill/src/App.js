import React, { useContext } from "react";
import Stage1 from "./components/stage_1";
import Stage2 from "./components/stage_2";
import { MyContext } from "./context";

import './style/style/app.css'

const App = () => {
const context = useContext(MyContext)
console.log(context)
  return(
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who pays the bill ?</h1>
        { context.state.stage === 1 ?
        <Stage1/>
          :   <Stage2/>
        }
      </div>
    </div>
  )
}
export default App;
