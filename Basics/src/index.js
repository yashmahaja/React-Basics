import React from 'react';
import  ReactDOM from 'react-dom/client';
import Header from './components/header';
import './styles/styles.css'
import Json from './db.json'
import NewsList from './components/news_list';
import Footer from './components/footer';
import Life from './components/lifecycles';

class App extends React.Component{
state = {
  unmount:true,
  active: false,
  filtered:[],
  news:Json
}

getkeywords = (event) => {
let keywords = event.target.value
let filtered = this.state.news.filter((item)=>{
  return  item.title.indexOf(keywords) > - 1
})
this.setState({
  filtered
})
}

changecolor = () => {
  this.setState({
      active: this.state.active ? false : true
  })
}


render(){
  const {filtered, news} = this.state;
return(
  <div className='hey'>
    <Header keywords={this.getkeywords}
    active={this.state.active}
    changecolor={this.changecolor}/>
    <NewsList news={filtered.length === 0 ? news :  filtered}/>
    {/* <NewsList news={this.state.filtered.length === 0 ? this.state.news :  this.state.filtered}/> */}

    {
    this.state.unmount ? <Life/>
    : null}
  <button onClick={() => this.setState({unmount:!this.state.unmount})}>Action</button>
    <Footer/>
  </div>
)
}

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)