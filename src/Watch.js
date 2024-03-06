import React,{useState,useEffect} from 'react'
import './watch.css'
function Watch() {

    let ti = new Date().toLocaleTimeString()
const [date,setdate]=useState(new Date())
const [time,settime]=useState(ti)

const rr =()=>{
   const tt = new Date().toLocaleTimeString()
   settime(tt)
}
setInterval(rr)
useEffect(()=>{

  const iter= setInterval(()=> {
    setdate(new Date())
  


  },1000)
       
   
 return ()=>{ clearInterval(iter)}

  
},[])


const secondsRatio = date.getSeconds() / 60 
const minutes =(secondsRatio + date.getMinutes())/ 60
const hours =(minutes + date.getHours())/ 12 

const haldelsecond =secondsRatio * 360
const haldelminutes=minutes * 360 
const haldelhours=hours * 360


  return (
    <div>
      <center>  <div id='clock'>
      <div className='hand second' style={{transform:`rotateZ(${haldelsecond}deg)` }}></div>
      <div  className='hand minut' style={{transform:`rotateZ(${haldelminutes}deg)`}}></div>
      <div  className='hand hour' style={{transform: `rotateZ(${haldelhours}deg)`  }}></div>

    </div>
    <div id='border'>
      <h2 className='time'>{time}</h2>
    </div>
    </center>
    </div>
  )
}

export default Watch
