

import { Card } from '../../Components';
import "./index.css"

const AboutUs = () => {
  return (
    <div className='aboutus'> 
      <h1 className='heading-add'>About us</h1>
      <div className='section'>
        <Card text1="Welcome to [Your Brand Name], where innovation meets elegance. We are proud to be the first to introduce perfume vending machines to Chicago, Illinois, bringing a revolutionary concept to enhance your on-the-go lifestyle." text2="At [Your Brand Name], we believe that everyone deserves to feel confident and refreshed wherever they are. That’s why we’ve carefully designed our perfume vending machines to offer a curated selection of premium fragrances at your convenience. Whether you're heading out for a night on the town, attending a business meeting, or simply need a quick touch-up, our vending machines provide the perfect solution for a luxurious experience anytime, anywhere."/>
        <Card>
          <img className="card-img" src= "./perfume-photo3.jpg" alt="perfume photo"/>
          </Card>
      </div>
      <div className='section'>
        <Card text1="Our journey began with a passion for blending technology with everyday luxury. We noticed the gap in the market for accessible, high-quality fragrances in places like clubs, lounges, and upscale venues. Driven by this vision, we became pioneers in the industry, offering a unique way to enjoy your favorite scents without the hassle of carrying bulky bottles." text2="Each machine is stocked with a variety of top-tier brands and exclusive scents, ensuring there’s something for every taste and occasion. With just a few taps, you can indulge in the perfect fragrance to elevate your confidence and style."/>
        <Card text1="We’re more than just a vending machine company; we’re here to redefine the way Chicago experiences luxury and convenience. Thank you for joining us on this exciting journey—we can’t wait to help you smell amazing, wherever life takes you!" text2="Experience the future of fragrance. Experience [Your Brand Name]."/>
      </div>
    </div>
  )
}

export default AboutUs;