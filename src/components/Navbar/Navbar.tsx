import CSS from 'csstype'
import { Link } from 'react-router-dom'

import './styles.css'

export interface ClassNames {
    classNames: string
}
export default function Navbar() {
   
    return (
  
        <div className = "navbarStyled">
            <div className = "Cont">
            <Link to = '/'>
            <button  className = "buttons">Home</button></Link>
            <Link to = '/entertainment'>
            <button className= "buttons">Entertainment</button></Link>
           <Link to = '/business'> <button className= "buttons">Business</button></Link>
            <Link to = '/science'> <button className = "buttons">Science</button></Link>
           <Link to = '/sports'>
            <button className= "buttons">Sports</button></Link>
             <Link to = '/technology'><button className= "buttons">Technology</button></Link>
             <Link to = '/health'>
            <button className= "buttons">Health</button></Link>
            
            </div>
            <div style = {cont}>
              <Link to = '/subscription'><button className= "buttons">Subscribe</button> </Link>  
              <Link to = '/login'><button className= "buttons">Log In</button></Link> 
              <div>
              <input className= "inpStyle"/>
                <button className = "button">Search</button>
              </div> 
               
            </div>
        </div>
    )
}


    
    







const cont: CSS.Properties = {
    marginRight: '126px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginLeft: '100px'
}