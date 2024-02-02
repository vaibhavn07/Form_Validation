import React from 'react'
import PersonalDetail from './PersonalDetail';
import ContactDetails from './ContactDetails';
import PaymentDetails from './PaymentDetails';

function Form(props) {
    // const [currentStep,setCurrentStep] = useState(1);

    const renderForm = () => {
        switch(props.currentStep){
            case 1:
                return (
                    <PersonalDetail/>
                );  
            case 2:
                return (
                    <ContactDetails/>
                );
            case 3:
                return (
                    <PaymentDetails/>
                );
            default:
                return (
                    <PersonalDetail/>
                );
        }
    }
  return (
    <div>
        {renderForm()}
        
    </div>
  )
}

export default Form
