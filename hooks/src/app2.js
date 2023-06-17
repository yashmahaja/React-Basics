import React,{ useState, useCallback } from 'react'

import Title from './title';
import Count from './count';
import CountBtn from './countbtn';
import AgeBtn from './agebtn';
import Age from './age';

const App = ()  => {
    const [count,setCount] = useState(0);
    const [age,setAge] = useState(10);

    const incrementCount = useCallback(() =>{
        setCount( prevCount => prevCount+1)
    },[])

    const incrementAge = useCallback(() =>{
        setAge(prevAge => prevAge +1)
    },[])


    return (
        <>
            <Title/>
            <Count count={count}/>
            <CountBtn handleCount={incrementCount}/>
            <Age age={age}/>
            <AgeBtn handleAge={incrementAge}/>
        </>
    )
}

export default App