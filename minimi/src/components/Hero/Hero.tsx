
import heroImg from '../../assets/Youngson-w-kids-cropped.jpg'
import './Hero.css';

function Hero() {
  return (
    <>
        <div className="container">
          <div className="grid grid--1x2">
            <img className="hero--image" src={heroImg} alt="" />
            <div className="hero--box">
              <h2 className="header">함께 배우자</h2>
              <p>Lorem ipsum do</p>
            </div>
          </div>
          
        </div>
      
    </>
  )
};

export default Hero;