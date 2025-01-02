
import heroImg from '../../assets/Youngson-w.-kids.jpg'
import hero from '../../assets/kids-stretching.jpg'
import hero2 from '../../assets/hero2.jpg'
import './Hero.css';
import Button from '../Button/Button';

function Hero() {
  return (
    <>
        <div className="container grid grid--1x2">
            <div className="hero__content">
              <div className="hero__header-content">
                <h2 className="header hero__header">
                  <div>함께</div>
                  <div>배우자</div>
                
                </h2>
              </div>
              <div className="hero__subheader-content">
                <p className="subheader hero__subheader">
                  <div>K-pop부터</div>
                  <div>필라테스까지</div>
                  <span>다!</span> 있습니다.
                </p>
                <div className="hero__button">
                <Button/>
              </div>
              
              </div>
              
            </div>
              
              <img className="hero__image" src={hero} alt="" />
              
        </div>
            
            
      
      
    </>
  )
};

export default Hero;