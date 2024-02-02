import React from 'react'

function PaymentDetails() {

    const validateCard = (e) => {
        const card = e.target.value;
        const regex = /^[0-9]{16}$/;
        if(!regex.test(card) || card.length < 16){
          document.getElementById('cardError').innerHTML = 'Please enter a valid card number';
        }
        else{
          document.getElementById('cardError').innerHTML = '';
        }
    }
    return (
        <div className='container'>
        <h2 className='text-center my-3' style={{color:"white",fontFamily:"cursive"}}>Payment Details</h2>
        <form>
            <div class="mb-3">
                <label for="cardNo" class="form-label" style={{color:"white",fontFamily:"cursive"}} >Credit/Debit Card Number</label>
                <input type="text" class="form-control" id="cardNo" aria-describedby="emailHelp" maxLength={16} onChange={validateCard} />
                <p id='cardError' style={{color:"red"}}></p>
            </div>
            <div class="mb-3">
                <label for="cName" class="form-label" style={{color:"white",fontFamily:"cursive"}}>Name As Per Card</label>
                <input type="text" class="form-control" id="cName" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="cvv" class="form-label" style={{color:"white",fontFamily:"cursive"}}>CVV</label>
                <input type="text" class="form-control" id="cvv" aria-describedby="emailHelp" maxLength={3}/>
            </div>
            <div class="mb-3">
                <label for="expDate" class="form-label" style={{color:"white",fontFamily:"cursive"}}>Expiry Date</label>
                <input type="month" class="form-control" id="expDate" aria-describedby="emailHelp" min={'2020-08'}/>
            </div>
        
         </form>

    </div>
    );
}

export default PaymentDetails
