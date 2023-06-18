import { MyContext } from '../context';
import React,{useContext} from 'react';

const Stage2 = () => {
  const context = useContext(MyContext)
    return(
      <>
      <div className='result_wrapper'>
        <h3>The Looser is</h3>
        <div>{context.state.result}</div>
        </div>
        <div className='action_button'
        onClick={() => context.resetgame()}>
        START OVER
        </div>
        <div className='action_button btn_2'
        onClick={() => context.generateloser()}>
        GET NEW LOOSER
        </div>
        </>
    )
  }
  export default Stage2;
  