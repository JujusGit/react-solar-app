import './input.css'
import pannel from "../icon-packs/solar-panel.png"
import batterySize from "../icon-packs/accumulator.png"
import arrayVoltage from "../icon-packs/flash.png"
import batteryVoltage from "../icon-packs/flashBlue.png"
import NumberOfPannels from "../icon-packs/NumberOfPannels.png"
import batteryChemistry from "../icon-packs/battery.png"
import AverageSunlight from "../icon-packs/AverageSunlight.png"
import Load from "../icon-packs/Load.png"

function Inputs({formData, setFormData}){

  async function handleInputChange(event){

    const { name, value } = event.target;

    setFormData(prevData => (
      {
      ...prevData,

      [name]: value
      }

     
  ));

  }

  
 
  return (
    <>
      <div className="container">

        <div className="background-cover">
          <img src={pannel} alt="" className='icon'/>

          <input 
            type="number"
            name="panelSize" 
            placeholder="Size of Pannels in Watts" 
            onChange={handleInputChange}
            value={formData.panelSize}
          />
        </div>

        <div className="background-cover">
          <img src={batterySize} alt="" className='icon'/>
        
          <input 
            type="number"
            name="batterySize" 
            placeholder="Battery Size in Ah" 
            onChange={handleInputChange}
            value={formData.batterySize}
            />
        </div>

        <div className="background-cover">
        <img src={arrayVoltage} alt=""  className='icon'/>

          <select name="arrayVoltage" value={formData.arrayVoltage} onChange={handleInputChange}>
            <option value="">Array Voltage</option>
            <option value="12">12 Volts</option>
            <option value="24">24 Volts</option>
            <option value="48">48 Volts</option>
          </select>
        </div>

        <div className="background-cover">
        <img src={batteryVoltage} alt=""  className='icon'/>
        
          <select name="batteryVoltage"  value={formData.batteryVoltage} onChange={handleInputChange}>
            <option value="">Battery Voltage</option>
            <option value="12">12 Volts</option>
            <option value="24">24 Volts</option>
            <option value="48">48 Volts</option>
          </select>
        </div>

        <div className="background-cover">
          
        <img src={NumberOfPannels} alt=""  className='icon'/>

          <input 
            type="number" 
            placeholder="Number of Pannels" 
            name="numPanels" 
            value={formData.numPanels}  
            onChange={handleInputChange}
          />

        </div>

        <div className="background-cover">
        <img src={batteryChemistry} alt=""  className='icon'/>
        
          <select name="batteryChemistry" value={formData.batteryChemistry} onChange={handleInputChange}>
            <option value="">Battery chemistry</option>
            <option value="LeadAcidBattery">Lead Acid Battery</option>
            <option value="lithiumIonBattery">lithium Ion Battery</option>
          </select>
        </div>

        <div className="background-cover">
        <img src={AverageSunlight} alt=""  className='icon'/>

          <select name="sunlight" value={formData.sunlight} onChange={handleInputChange}>
            <option value="">Average Sunlight</option>
            <option value="1">1 Hour</option>
            <option value="2">2 Hours</option>
            <option value="3">3 Hours</option>
            <option value="4">4 Hours</option>
            <option value="5">5 Hours</option>
            <option value="6">6 Hours</option>
            <option value="7">7 Hours</option>
            <option value="8">8 Hours</option>
            <option value="9">9 Hours</option>
            <option value="10">10 Hours</option>
          </select>
        </div>

        <div className="background-cover">
        <img src={Load} alt=""  className='icon'/>
        
          <input 
            type="text" 
            name="load"
            placeholder="Load in Watt Hours"
            value={formData.load}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  )
}

export default Inputs