import './buttons.css';

function Buttons({ formData, setFormData, outputData, setOutputData, setCalculated, setErrorMessage }) {
  
  const 
    {
      panelSize, 
      batterySize, 
      batteryVoltage, 
      arrayVoltage, 
      numPanels, 
      batteryChemistry, 
      sunlight, 
      load
    } 
      = formData;
      

  let arrayOutputData;
  let backup;
  let batteryChargingData

    
  arrayOutputData = (panelSize * 0.75) * numPanels * sunlight;
    
  batteryChargingData = ((batterySize * batteryVoltage) / ((panelSize * 0.75) * numPanels)).toFixed(2);

  if (batteryChemistry === 'lithiumIonBattery') {
    backup = ((batterySize * batteryVoltage * 0.95) / load).toFixed(2);

  } else if (batteryChemistry === 'LeadAcidBattery') {
    backup = ((batterySize * batteryVoltage * 0.5) / load).toFixed(2);
  }

  
  const runCalculations = () => {

      setOutputData({
        ...outputData,
  
        arrayCalculation: arrayOutputData,
        batteryCalculation: Number(batteryChargingData),
        backup: Number(backup)
      });
    
    setCalculated(true);
  };

  const clearAll = () => {
    setFormData({
      panelSize: '',
      batterySize: '',
      arrayVoltage: '',
      batteryVoltage: '',
      numPanels: '',
      batteryChemistry: '',
      sunlight: '',
      load: ''
    });

    setOutputData({
      arrayCalculation: 0,
      batteryCalculation: 0,
      backup: 0
    });

    setCalculated(false);
    setErrorMessage({ message: '', state: false });
  };

  return (
    <div className="button-container">
      <button className="calc-button" onClick={runCalculations}>
      <span className='inner'>
      <i className='bx bxs-paper-plane' />
          <span>
          Calculate
          </span>
        </span>
      </button>

      <button className="clear-btn" onClick={clearAll}>
        <span className='inner'>
        <i className='bx bxs-trash-alt' />
          <span>
            Clear All
          </span>
        </span>
      </button>
    </div>
  );
}

export default Buttons;
