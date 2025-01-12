import "./index.css"

const Card = ({text1, text2, children}) => {
  return(
    <div className='card'>
      {children ? children : (
        <>
          <p className="description">{text1}</p>
          <p className="description">{text2}</p>
        </>)
      }
    </div>
  )
}

export default Card
