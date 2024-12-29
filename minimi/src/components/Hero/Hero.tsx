
import heroImg from '../../assets/Youngson-w.-kids.jpg'
import hero from '../../assets/hero-cropped.jpg'
import hero2 from '../../assets/hero2.jpg'
import './Hero.css';

function Hero() {
  return (
    <>
        <div className="container">
            
              {/* <h2 className="header hero__text">미니미</h2> */}
              <div className="centered">
                {/* <h2 className="header hero__text">몸을</h2>
                <h2 className="header hero__text">튼튼하게</h2>
                <h2 className="header hero__text">만들자</h2> */}
                <h2 className="header hero__text">함께</h2>
                <h2 className="header hero__text">배우자</h2>
                
              </div>
              
              {/* <h2 className="header centered">배우자</h2> */}
              
          
              <img className="hero__image" src={hero} alt="" />
        </div>
            
            
      
      
    </>
  )
};

export default Hero;