import {Bookmark} from "lucide-react"

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <div className="img">

          <img src={props.logo} alt="something" />
          </div>
          <button>Save<Bookmark /></button>
          
        </div>
        <div className="center">
        <h3>{props.name}<span>{props.posted}</span></h3>
        <h2>{props.post}</h2>
        <div className='time'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
        </div>
        <hr />
        <div className="bottom">
          
            <div>
              <h3>${props.pay}/hr</h3>
              <p>{props.location}</p>
              
            </div>
            <button>Apply now</button>
         
        </div>
      </div>
    </>
  )
}

export default Card
