import "./index.css"

const Box = ({number, heading, text, children}) => {
  return (
    <div className='box'>
      <div className='left'>{number}</div>
      <div className='right'>
        <div className='logo-box'>{children}</div>
        <h1 className='heading-box'>{heading}</h1>
        <p1 className='content'>{text}</p1>
      </div>
    </div>
  )
}

export default Box;