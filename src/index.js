import React from 'react';
import  ReactDOM from 'react-dom/client';
import Header from './components/header';
import './styles/styles.css'
import Json from './db.json'
import NewsList from './components/news_list';
import Footer from './components/footer';

class App extends React.Component{
state = {
  active: false,
  news:Json
}

getkeywords = (event) => {
console.log(event.target.value)
}

changecolor = () => {
  this.setState({
      active: this.state.active ? 'false' : 'true'
  })
}


render(){
return(
  <div className='hey'>
    <Header keywords={this.getkeywords}
    active={this.state.active}
    changecolor={this.changecolor}/>
    <NewsList news={this.state.news}/>
    <Footer/>
  </div>
)
}

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)