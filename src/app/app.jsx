import React from 'react';
import Header from "../header/header.jsx";
import Inputs from "../inputs/input.jsx";
import Output from "../output/output.jsx";
import Buttons from "../buttons/buttons.jsx";
import './app.css'

function App(){

const [formData, setFormData] = React.useState({
  panelSize: '',
  batterySize: '',
  arrayVoltage: '',
  batteryVoltage: '',
  numPanels: '',
  batteryChemistry: '',
  sunlight: '',
  load: ''
});

const [outputData, setOutputData] = React.useState({
  arrayCalculation: '',
  batteryCalculation: '',
  backup: ''
});

const[calculated, setCalculated] = React.useState(false);
 
const[errorMessage, setErrorMessage] = React.useState(
  {
    message:'',
    state: false,
  }
);

return(
  <div className="bigcontainer">

    <Header />

    <Inputs 
      formData={formData} 
      setFormData={setFormData}
    />

    <div className="buttom-section">

      <Output 
        formData = {formData}
        outputData={outputData}
        calculated = {calculated}
        errorMessage = {errorMessage}
      />

      <Buttons 
        formData={formData} 
        setFormData = {setFormData}
        outputData={outputData} 
        setOutputData={setOutputData}
        setCalculated = {setCalculated}
        setErrorMessage = {setErrorMessage}
      />

    </div>
  </div>
)
}

export default App