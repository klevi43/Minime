
import heroImg from '../../assets/Youngson-w.-kids.jpg'
import './Hero.css';

function Hero() {
  return (
    <>
        <div className="container">
            
              {/* <h2 className="header hero__text">미니미</h2> */}
              <div className="centered">
                <div className="hero__box">
                  <h3 className="header hero__text">함께</h3>
                <h3 className="header hero__text">놀자</h3>
                </div>
                
              </div>
              
          
              <img className="hero__image" src={heroImg} alt="" />
        </div>
            
            
      
      
    </>
  )
};

export default Hero;