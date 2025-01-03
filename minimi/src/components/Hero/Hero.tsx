
import heroImg from '../../assets/Youngson-w.-kids.jpg'
import hero from '../../assets/kids-stretching.jpg'
import hero2 from '../../assets/hero2.jpg'
import './Hero.css';
import Button from '../Button/Button';

function Hero() {
  return (
    <>
        <div className="container grid grid--1x2">
            
              <header className="hero__header-container">
                <div className="header hero__header">
                  <h2 className="hero__heading">
                    {/* <div>
                      함께
                    </div>
                    <div>
                      배우자
                    </div> */}
                    함께<br/>
                    배우자
                  </h2> 
                </div>
                <div className="subheader hero__subheader">
                  <p className="hero__subheading">
                    K-pop 댄스부터<br />
                    필라테스까지 
                    다 있습니다
                  </p>
                </div>
                <div className="hero__button">
                <Button/>
              </div>
                
              </header>
            
            <div className="hero__image-container">
              <img className="hero__image" src={hero} alt="" />
              
            </div>
        </div>
            
            
      
      
    </>
  )
};

export default Hero;