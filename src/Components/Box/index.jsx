import "./index.css"

const Box = ({number, heading, text, children}) => {
  return (
    <div className='box'>
      <div className='right'>
        <div className='logo-box'>{children}</div>
        <h1 className='heading-box'>{heading}</h1>
        <p className='content'>{text}</p>
      </div>
    </div>
  )
}

export default Box;