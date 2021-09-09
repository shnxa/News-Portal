

import Navbar from '../Navbar/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'


export interface ClassNames{
  classNames: string
}

export default function Technology() {
    const [NewsData, setNewsData] = useState([] as any)
    
    

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios ('https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=7103bd119b804eb692fbd08130a7b54c') 
        setNewsData(response.data.articles)
      };
      fetchData()
    }, [])

    
    return (
        <div>
            
            <Navbar/>
            <h1 className = 'header'>Technologies</h1>
            {NewsData.map((item: any) => (
               <div key = {item.id}  className = "container">
                 <div> <img  className = "image" src = {item.urlToImage} alt = ''></img> </div>
                 <div> <h2 className = "title">{item.title}</h2> 
                  <h3>{item.name}</h3>
                  <h3>{item.author}</h3>
                  <p>{item.description}
                  
                  </p>
                  <h6>Published at: {item.publishedAt}</h6></div>
                  <div className = "interactive">
                    
                  </div>

                  
               </div>
              ))
            }
            
        </div>
    )
}

