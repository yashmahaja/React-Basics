import React from "react";
import NewsListItem from "./news_list_items";


const NewsList = (props) => {
    const news = props.news.map((item) => (
  <NewsListItem key={item.id} item={item}/>
    ))
    
    return(
        <>
        {news}
        </>
    )
}

export default NewsList;