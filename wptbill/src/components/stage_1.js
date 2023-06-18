import {Button, Form, Alert} from 'react-bootstrap'
import React,{useContext, useRef, useState} from 'react';
import { MyContext } from '../context';
import cross from '../style/image/cross.png'


const Stage1 = () => {
    const textInput = useRef()
const context = useContext(MyContext)
    
    const [error,seterror] = useState([false,''])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const value = textInput.current.value;
        const validate = validateinput(value)
        if(validate){
            seterror([false,''])
            context.addplayer(value)
            textInput.current.value = '';
    
        }
    }

    const validateinput = (value) => {
        if(value === ''){
            seterror([true,'Sorry, you need to add something'])
            return false
        }
        if(value.length <= 2){
            seterror([true,'Sorry, you need to add 3 chars atleast'])
            return false
        }

        return true
    }
    return(
      <>
            <Form onSubmit={handleSubmit} className='mt-4'>
                <Form.Group>
                    <Form.Control
                    className='inputtext'
                        type='text'
                        placeholder='Add player name'
                        name='player'
                        ref={textInput}
                    />
                </Form.Group>

                { error[0] ? 
                <Alert>
                    {error[1]}
                </Alert>

                    :
                    
                    null
                }

                <Button className='miami' variant='primary' type='submit'>
                    Add player
                </Button>

                {
                    context.state.players && context.state.players.length > 0 ?

                    <>
                    <hr/>
                    <div>
                            { context.state.players.map((player,idx)=>(
                                 <div className='playerouter'>
                                <div key={idx} className='playerlist' >
                                    {player}
                                    </div>
                                    <div className='image'>
                                    <img  src={cross} style={{ width: '15px',height:'15px', cursor:'pointer'}} alt='cross'
                        onClick={() => context.removeplayer(idx)}
                                    />
                                    </div>
                                </div>
                            ))
                            }
                            <div
                            className='action_button'
                            onClick={() =>  context.next()}>
                                NEXT
                            </div>
                    </div>
                    
                    </>



:
         null       }
            </Form>
        </>
    )
  }
  export default Stage1;
  