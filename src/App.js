import React, { useState } from 'react'
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import styled from 'styled-components';
import {BrowserRouter as Router,Route, Switch,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Background = styled.div`
  background: rgb(118,87,209);
background: radial-gradient(circle, rgba(118,87,209,1) 25%, rgba(105,89,219,1) 36%, rgba(232,130,167,1) 86%, rgba(181,105,120,1) 100%);
  `

  
const Container = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20rem;
  `;

const Outline = styled.div`
  border: 1px solid #000;
  height: auto;
  width: 25rem;
  border-radius: 20px;
  background: rgb(2,0,36);
  background: rgb(0,13,36);
background: linear-gradient(90deg, rgba(0,13,36,1) 10%, rgba(76,227,196,1) 98%);
`;
export default function App(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [next, setNext] = useState(true);
  const handleOnNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 2) {
      setNext(false);
    }
  }
  const handleOnPrevClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setNext(true);
    }

  }

  const handleOnsubmit = () => toast("Form Submitted Successfully!!");
  return (
    <Router>
      <Background>
      <Navbar />

      <Container>

        <div className="progress" style={{width:"150px"}} >
          <div className="progress-bar" role="progressbar" style={{width:currentStep==1?"25%":currentStep==2?"50%":"100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <h3 className='my-3' style={{fontFamily:"cursive"}}>Step {currentStep}</h3>
        <Outline>
          <Switch>
            <Route path="/">
          <Form currentStep={currentStep} />
            </Route>
          </Switch>
          
        </Outline>
        


        {next && <Button>
          <button className='btn btn-primary my-2' onClick={handleOnPrevClick}>Prev</button>

          <button className='btn btn-primary my-2' onClick={handleOnNextClick}>Next</button>
        </Button>}

        {
          !next && <div><Button>
            <button className='btn btn-primary my-2' onClick={handleOnPrevClick}>Prev</button>

            <button className='btn btn-primary my-2' onClick={handleOnsubmit} >Submit</button>
          </Button>
          
          <ToastContainer />
          </div>
          }
      
      </Container>
      </Background>
    </Router>
  )
}
