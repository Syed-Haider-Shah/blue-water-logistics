import Button from '../Button';
import Logo from '../Logo';
import "./index.css";

const Nav = () => {
  return(
  <> 
    <nav className='nav'>
      <Logo image='/Logo12.svg' cusStyle='logo2' />
      <div className='hide-on-mobile'>
      <Button title='Home' cusStyle='nav-btn' dest='/'/>
      <Button title='Our Product' cusStyle='nav-btn' dest='/vending'/>
      <Button title='About Us' cusStyle='nav-btn' dest='/aboutus'/>
      <Button title='Contact' cusStyle='nav-btn' dest='/contact'/>
      </div>
    </nav>
  </>
  )
}

export default Nav