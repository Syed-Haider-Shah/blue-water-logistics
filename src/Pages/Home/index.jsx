import { Box } from '../../Components';
import { Lightbulb } from 'lucide-react';
import "./index.css"
const Home = () => {
  return (
    <>
    <div className='hero'><img className="scaled-image" src="/hero5.jpg"/></div>
    <div className='section-2'>
      <h1 className='heading'>Why Perfume Vending Machines?</h1>
      <div className='boxes'>
        <Box number='01' heading='Fast ROI' text='Earn your investment back in 3 months or less. High profitable and steadily growing business'>
          <Lightbulb size={48}/>
          </Box>
        <Box number='02' heading='Low Investment' text='Get started with a low investment and enjoy high quality'>
          <Lightbulb size={48}/>
        </Box>
        <Box number='03' heading='Smart Automatic' text='Business without the involvement of employees'>
          <Lightbulb size={48}/>
        </Box>
      </div>
    </div>
    </>
  )
}

export default Home;