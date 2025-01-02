
import heroImg from '../../assets/Youngson-w.-kids.jpg'
import hero from '../../assets/kids-stretching.jpg'
import hero2 from '../../assets/hero2.jpg'
import './Hero.css';
import Button from '../Button/Button';

function Hero() {
  return (
    <>
        <div className="container grid grid--1x2">
            
              {/* <h2 className="header hero__text">미니미</h2> */}
              
                {/* <h2 className="header hero__text">몸을</h2>
                <h2 className="header hero__text">튼튼하게</h2>
                <h2 className="header hero__text">만들자</h2> */}
                <h2 className="header hero__header">함께 <div>배우자</div></h2>
                
             
            
                <p className="subheader hero__subheader">
                  <div>K-pop부터</div>
                  <div>필라테스까지</div>
                  <span>다!</span> 있습니다.
                </p>
              <img className="hero__image" src={hero} alt="" />
              <div className="hero__button">
                <Button/>
              </div>
        </div>
            
            
      
      
    </>
  )
};

export default Hero;