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
          <span className='bold'>
          AFMAM  
          </span>
          Solar
          <br/>
          Calculator
        </div>

      </div>


      <div className="right">
        <div className="right-image-section">
        <img src={nigeria} alt="" className="nigeria-image img-size"/>
        </div>

        <div className="text">
            Nigeria
        </div>
      </div>
    </div>

  )
}

export default Header