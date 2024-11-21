import './header.css'
import sunImage from "../icon-packs/solar-energy.png"
import nigeria from "../images/nigeria.png"

function Header() {

  return (

    <div className="header">
      <div className="left">

        <div className="image-section">
          <img src={sunImage} alt="" className="profile-image img-size"/>
        </div>

        <div className="text-section">

          <span className='bold bold-text'>
       
          </span>

          <span className='solar-calculator'>
            
          </span>
      
        </div>

      </div>


      <div className="right">
        <div className="right-image-section">
        <img src={nigeria} alt="" className="nigeria-image img-size"/>
        </div>

        <div className="text">
            NIGERIA
        </div>
      </div>
    </div>

  )
}

export default Header