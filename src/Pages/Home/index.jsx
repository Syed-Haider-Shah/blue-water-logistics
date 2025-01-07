import { Box } from '../../Components';
import { Lightbulb, BadgeDollarSign, Bot, ChartNoAxesCombined, Drill, Smile } from 'lucide-react';
import "./index.css"
const Home = () => {
  return (
    <div className='home'>
    <div className='hero'><img className="scaled-image" src="/hero5.jpg"/></div>
    <div className='section-2'>
      <h1 className='heading'>Why Perfume Vending Machines?</h1>
      <div className='boxes'>
        <Box heading='Customer Convenience' text='Offer a curated collection of premium perfumes, customized to align with customer preferences and current trends, enhancing the luxury and convenience of your venue&apos;s offerings.'>
        <Smile size={48} />
          </Box>
        <Box heading='Minimal Space' text='The machine occupies a small, visible area in high-traffic locations like restrooms or lobbies, ensuring maximum exposure with minimal space usage.'>
          <Lightbulb size={48}/>
        </Box>
        <Box heading='Hassle Free' text='We manage installation, restocking, and maintenance, so your team can focus on what matters while we handle everything related to the vending machine.'>
          <Bot size={48}/>
        </Box>
      </div>
      <div className='boxes'>
        <Box heading='Contactless Payment' text='Convenient payments via mobile wallets, cards, and cash.'>
          <BadgeDollarSign size={48}/>
          </Box>
        <Box heading='Potential Venue Benefits' text='Offers an additional amenity that aligns with your venue&apos;s premium image.'>
          <ChartNoAxesCombined size={48}/>
        </Box>
        <Box heading='Inventory Management' text='Regular checks and replenishments to ensure a seamless experience.'>
          <Drill size={48}/>
        </Box>
      </div>
    </div>
    <div className='section-3'>
      <div className='left-3'><img className="scaled-image-3"src="Vending.jpeg"/></div>
      <div className='right-3'>
        <h1 className='heading-3'>Product: Machine Specifications</h1>
        <ul className='all-dot-points'>
          <li className='dot-point'><p1 className="bold">Space Requirement: </p1>Minimal, thanks to its compact size.</li>
          <li className='dot-point'><p1 className="bold">Dimensions: </p1>730mm x 200mm x 450mm</li>
          <li className='dot-point'><p1 className="bold">Weight: </p1>22kg</li>
          <li className='dot-point'><p1 className="bold">Electricity Consumption: </p1>Low, making it cost-efficient.</li>
          <li className='dot-point'><p1 className="bold">Color:  </p1>Black, with a sleek and modern aesthetic.</li>
          <li className='dot-point'><p1 className="bold">Operation: </p1>Plug-and-play installation with a user-friendly interface.</li>
          <li className='dot-point'><p1 className="bold">Payment Options:  </p1>Supports contactless payments for convenience.</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Home;