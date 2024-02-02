import React,{useState} from 'react'
import styled from 'styled-components';


function PersonalDetail() {
    const PersonalData = {
        firstName:'' ,
        lastName: '',
        age: '',
        profession:'', 
        gender: ''
    }
const [data,setData] = useState(PersonalData);//[{},{}
 console.log(data);


    return (
        <div className='container'>
            <h2 className='text-center my-3 ' style={{color:"white",fontFamily:"cursive"}}>Personal Details</h2>
            <form>
                <div class="mb-3">
                    <label for="firstName" class="form-label" style={{color:"white",fontFamily:"cursive"}}>First Name</label>
                    <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" onChange={(e)=>{setData({firstName:e.target.value})}}/>
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label" style={{color:"white",fontFamily:"cursive"}}>Last Name</label>
                    <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp"  onChange={(e)=>{setData({lastName:e.target.value})}} />
                </div>
                <div class="mb-3">
                    <label for="age" class="form-label" style={{color:"white",fontFamily:"cursive"}}>Age</label>
                    <input type="text" class="form-control" id="age" aria-describedby="emailHelp"  onChange={(e)=>{setData({age:e.target.value})}} />
                </div>
                <div class="mb-3">
                    <label for="profession" class="form-label" style={{color:"white",fontFamily:"cursive"}}>Profession</label>
                    <input type="text" class="form-control" id="profession" aria-describedby="emailHelp"  onChange={(e)=>{setData({profession:e.target.value})}}/>
                </div>



                <div class="mb-3">
                 <label for="gender" class="form-label" style={{color:"white",fontFamily:"cursive"}}>Gender</label>
                    <select class="form-select " aria-label="Default select example"  onChange={(e)=>{setData({gender:e.target.value})}}>
                        <option selected>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            
             </form>

        </div>
    )
}

export default PersonalDetail
