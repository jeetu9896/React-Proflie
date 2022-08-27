import { useState } from "react"
import { Button } from "./Button"
import { Image } from "./Image"
import { Moredetail } from "./Moredetail"
import "../Card.css"
export const Profile = () => {
    const [age ,setage] =useState(18)
    const handleage = (val) => {
    //    age<=18 ? setage(18) : setage (age + val )
       if(age<=17){
        setage(18)
       }
       else{
        setage(age + val)
       }
        
    }
    const  [status, setstatus] = useState(false)
    const handleDetails = () => {
        setstatus(true)
        console.log("show")
    }
    const handlehideDetails = () => {
        setstatus(false)
        console.log("hide")
    }
    return <>
    <div className="profile-card">
    <Image />
    <h1>Name: Jitender</h1>
    <h1>Age: {age}</h1>
    <Button handleage= {handleage} />
    <Moredetail status={status} handleDetails={handleDetails} handlehideDetails ={handlehideDetails}/>
    </div>
    
    </>
}