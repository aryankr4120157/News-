import React, {useEffect} from 'react'
import { useState } from 'react';
import NewsCard from "./NewsCard"
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import Scroll from './Scroll';
// import PropTypes from 'prop-types'



export default function News(props){

  const [articles, setArticles] = useState([]);  
  const [loading, setLoading] = useState(false);  
  const [page, setPage] = useState(1);  
  const [totalResults, setTotalresult] = useState(1); 
  const[display,setDisplay] = useState("none")


 
const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

        // document.title = `News Monkey-${this.capitalizeFirstLetter(this.props.category)}`
    
    const update =  async ()=>{
      props.setProgress(30);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=96cc5e29cfd1402d86038c16d991b7a1&page=${page}&pageSize=${props.pageSize}`
      setLoading(true)
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      setArticles(parseData.articles)
      setLoading(false )
      setTotalresult(parseData.totalResults)
      props.setProgress(100);
      
     
    }
    useEffect(() => {
    update();
}, [])

    
    
    const fetchMoreData = async() => {
      setPage(page +1)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=96cc5e29cfd1402d86038c16d991b7a1&page=${page+1}&pageSize=${props.pageSize}`
      let data = await fetch(url);
      console.log("fetching")
      let parseData = await data.json()
      setArticles(articles.concat(parseData.articles))
      setLoading(false)
    };
    useEffect(() => {
      // Add an event listener to handle scroll
      console.log("addeventlistener")
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      // Check the scroll position and toggle the display state accordingly
      if (window.scrollY > 100) {
        setDisplay('block');
      } else {
        setDisplay('none');
      }
    };
  
   
    return (
      <>
        
        <h1 className="text-center my-3" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        <div className="scrollbar" style={{position:"fixed",right:"2px", display}}>
           <Scroll />
          </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles !== totalResults}
          loader={articles.length < totalResults && {loading}? (
            <div className='text-center'> <Spinner/></div>
          ) : null}
        
        >
         
      
        <div className="container my-3">
        <div className="row m-2">
            {articles.map((element)=>{
            return <div className="col colum" key={element.url}>
            <NewsCard title={element.title.slice(0,40)} description={element.description?element.description.slice(0,132):null} 
            imageUrl={!element.urlToImage?"https://image.cnbcfm.com/api/v1/image/107303993-1695235474602-HR-KVYO-OB-Photo-20230920-CC-Press-60.jpg?v=1695247362&w=1920&h=1080":element.urlToImage} 
            newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /> 
           </div> 
         })}
         </div>
         </div>
         </InfiniteScroll>
         
      </>
  
    )
        }
  

News.defaultProps ={
  country:"in",
  pageSize:8,
}

