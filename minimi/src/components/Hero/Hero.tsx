
import heroImg from '../../assets/Youngson-w-kids-cropped.jpg'
import './Hero.css';
function Hero() {
  return (
    <>
        <div className="container">
          <div className="grid grid--1x2">
            <img className="hero--image" src={heroImg} alt="" />
            <div className="box-2">함께 배우자</div>
          </div>
          
        </div>
      
    </>
  )
};

export default Hero;