import React from 'react';
import  ReactDOM from 'react-dom/client';
import Header from './components/header';
import './styles/styles.css'
const App = () =>(

  <div className='hey'>
    <Header/>
  </div>

)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)