import React from 'react'

function ContactDetails() {

 
  const validateZip = (e) => {
    const zip = e.target.value;
    const regex = /^[0-9]{6}$/;
    if(!regex.test(zip) || zip.length > 6 || zip.length < 6){
      document.getElementById('zipError').innerHTML = 'Please enter a valid zip code';
    }
    else{
      document.getElementById('zipError').innerHTML = '';
    }

  }

  const validateMo = (e) => {
    const mo = e.target.value;
    const regex = /^[0-9]{10}$/;
    if(!regex.test(mo) || mo.length > 10 || mo.length < 10){
      document.getElementById('moError').innerHTML = 'Please enter a valid mobile number';
    }
    else{
      document.getElementById('moError').innerHTML = '';
    }
  }

  return (
   <div className='container'>
    <h2 className='text-center my-3' style={{color:"white",fontFamily:"cursive"}}>Contact Details</h2>
     <form>
                <div class="mb-3">
                    <label for="Address" class="form-label" style={{color:"white",fontFamily:"cursive"}}>Address</label>
                    <input type="text" class="form-control" id="address" aria-describedby="" />
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label" style={{color:"white",fontFamily:"cursive"}}>City</label>
                    <input type="text" class="form-control" id="city" aria-describedby="" />
                </div>
                <div class="mb-3">
                    <label for="state" class="form-label" style={{color:"white",fontFamily:"cursive"}}>State</label>
                    <input type="text" class="form-control" id="state" aria-describedby="" />
                </div>
                <div class="mb-3">
                    <label for="mobileno" class="form-label" style={{color:"white",fontFamily:"cursive"}}>Contact No</label>
                    <input type="text" class="form-control" id="mobileno" aria-describedby="" onChange={validateMo}/>
                    <p id='moError' style={{color:"red"}}></p>
                </div>
                
                <div class="mb-3">
                <label for="zipcode" class="form-label" style={{color:"white",fontFamily:"cursive"}}>Zip Code</label>
                    <input type="text" class="form-control" id="city" aria-describedby="" onChange={validateZip}/>
                    <p id='zipError' style={{color:"red"}}></p>
                </div>

            </form>
   </div>
  )
}

export default ContactDetails
