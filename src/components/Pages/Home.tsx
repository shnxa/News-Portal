

import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios';
import Navbar from '../Navbar/Navbar'


import './App.css'

export interface ClassNames {
  className: string
}




export default function Home() {
  
  const [NewsData, setNewsData] = useState([] as any)
    
  useEffect(() => {
    const fetchSports = async () => {
      const result = await axios ('https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=7103bd119b804eb692fbd08130a7b54c');
      setNewsData(result.data.articles)
    }
    fetchSports()
    })
  

  return (
      <div>
          
          <Navbar/>
          <h1 className = "header">Top Headlines </h1>
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
