import './App.css'
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from 'react'
import axios from 'axios';



export interface ClassNames{
  classNames: string
}

export default function Entertainment() {
    const [NewsData, setNewsData] = useState([] as any)
    
    

    useEffect(() => {
      const fetchEntertain = async () => {
        const result = await axios ('https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=7103bd119b804eb692fbd08130a7b54c')
        setNewsData(result.data.articles)
      }
      fetchEntertain()
    }, [])
    return (
        <div>
            
            <Navbar/>
            <h1 className = 'header'>Entertainment</h1>
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

