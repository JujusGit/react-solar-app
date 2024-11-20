import { useState, useEffect } from 'react';
import './output.css'

function Output({outputData, calculated, formData, errorMessage}){


  const { arrayCalculation, batteryCalculation, backup } = outputData;
  const { sunlight } = formData;
  const { message , state} = errorMessage

      const [backupStatus, setBackupStatus] = useState({
        className: '',
        message: ''
      });

      const [chargingStatus, setChargingStatus] = useState({
        className: '',
        message: ''
      });

      useEffect(() => {
        if(calculated){
            let status = 
              { 
                className: '',
                message: '' 
              };
          
              if (backup <= 3) {
                status.className = 'red';
                status.message = 'short backup time';
              } else if (backup > 3 && backup<= 6) {
                status.className = 'orange';
                status.message = 'medium backup time';
              } else if (backup > 6) {
                status.className = 'green';
                status.message = 'good backup time';
              }
            
              setBackupStatus(status);
          }
          else {
            setBackupStatus({
              className: '',
              message: ''
            });
          }
        }, 
        
        [backup, calculated]
      ); 

      useEffect(() => {
        if(calculated){
          let status = 
            { 
              className: '',
              message: '' 
            };

            if(batteryCalculation > sunlight){
              status.message = 'charging time is too slow please reconfigure setup';
              status.className = 'red';
            }
            if(batteryCalculation < sunlight){
              status.message = 'charging time is okay';
              status.className = 'green';
            }
          
            setChargingStatus(status);
          }

          else {
            setChargingStatus({
              className: '',
              message: ''
            });
          }
      }, 

        [batteryCalculation, calculated]

      ); 


  return(
    <>
    <div className="output-container">
      <div className="array-output-section">
       {state === false && <p> Array Output/24hrs: <span className = {`${chargingStatus.className}`}>{arrayCalculation}</span> Watts </p>}
       {state === true && <p> {message} </p>}

      </div>
      <div className={`Battery-chargingTime-section`}>
        
        <p>
          Battery Charging Time: {batteryCalculation} Hours
        </p>

        <p className={`battery-backup-output ${chargingStatus.className}`}>
          {chargingStatus.message}
        </p>

      </div>
      <div className={`battery-backup-section`}>

        <p>
          Battery backup Time: {backup} Hours
        </p>

        <p className={`battery-backup-output ${backupStatus.className}`}>
          {backupStatus.message}
        </p>

      </div>
    </div>
    </>
  )
  }
  
  export default Output