import React from "react"
import {Button} from "react-bootstrap"

const Data = ({number}) =>{
  React.useEffect(()=>{
    console.log(number);
  },[number])
    return(
    <>
    <h1 className="my-auto">{number}</h1>
    </>)
}

const Count = () => {
  const [value, increment] =React.useState(0)
  return(
    <div className="parent d-flex justify-content-center alight-items-center">
      <div className="d-flex my-auto">
        <Button className="mx-5 size-btn" onClick={()=>value===0?increment(value+0):increment(value-1)}>Dec</Button>
        {<Data number={value}></Data>}
        <Button className="mx-5 size-btn" onClick={()=>increment(value+1)}>Inc</Button>
      </div>
    </div>
  )
}

export default Count