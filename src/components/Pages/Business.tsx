
import Navbar from '../Navbar/Navbar'
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

export interface ClassNames{
  classNames: string
}            

export default function Business() {
    const [NewsData, setNewsData] = useState([] as any)
    
    
    

    useEffect(() => {
      const fetchBusiness = async () => {
        const response = await axios ('https://newsapi.org/v2/top-headlines?&category=business&language=en&apiKey=6ea53a5fd70b4e62a21875d80d0befb4');
        setNewsData(response.data.articles)
      }
      fetchBusiness()
      
    }, [])
    return (
        <div>
            
            <Navbar/>
            <h1 className = 'header'>
                Business
            </h1>
            {NewsData.map((item: any) => (
               <div key = {item.id}  className = "container">
                 <div> <img  className = "image" src = {item.urlToImage} alt = ''></img> </div>
                 <div> <h2 className = "title">{item.title}</h2> 
                  <h3>{item.name}</h3>
                  <h3>{item.author}</h3>
                  <p>{item.description}
                  
                  </p>
                  <h6>Published at: {item.publishedAt}</h6></div>
                 

                  
               </div>
              ))
            }
        </div>
    )
}
