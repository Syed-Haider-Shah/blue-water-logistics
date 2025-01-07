import { Box } from '../../Components';
import { Lightbulb, BadgeDollarSign, Bot } from 'lucide-react';
import "./index.css"
const Home = () => {
  return (
    <div className='home'>
    <div className='hero'><img className="scaled-image" src="/hero5.jpg"/></div>
    <div className='section-2'>
      <h1 className='heading'>Why Perfume Vending Machines?</h1>
      <div className='boxes'>
        <Box heading='Fast ROI' text='Earn your investment back in 3 months or less. High profitable and steadily growing business'>
          <Lightbulb size={48}/>
          </Box>
        <Box heading='Low Investment' text='Get started with a low investment and enjoy high quality'>
          <BadgeDollarSign size={48}/>
        </Box>
        <Box heading='Smart Automatic' text='Business without the involvement of employees'>
          <Bot size={48}/>
        </Box>
      </div>
    </div>
    <div className='section-3'>
      <div className='left-3'><img className="scaled-image-3"src="Vending.jpeg"/></div>
      <div className='right-3'>
        <h1 className='heading-3'>Unlock Your Effortless Income</h1>
        <ul className='all-dot-points'>
          <li className='dot-point'><p1 className="bold">Profitability in less than 4 months</p1> – start seeing returns faster than ever.</li>
          <li className='dot-point'><p1 className="bold">Up to 800% profit per use</p1> – maximize your revenue with each transaction.</li>
          <li className='dot-point'><p1 className="bold">Full control at your fingertips</p1> – manage everything through our app, anytime, anywhere.</li>
          <li className='dot-point'>Powered by a <p1 className="bold">one-of-a-kind global technology</p1> that sets you apart from the competition.</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Home;