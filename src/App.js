import React from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

const api = axios.create({
  baseURL:'https://rickandmortyapi.com/api/character'
})

class App extends React.Component{
  state={
    data:[]
  }

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data.results);
      this.setState({data: res.data.results})
    })
  }

  render(){
    return(
      <Container className="w-100">
        <Row className="d-flex justify-content-between">
          {this.state.data.map(result=>
          <Col s={12} md={3} key={result.id}>
            <img className="w-100" src={result.image} alt={result.name}></img>
            <h2 className="text-center">{result.name}</h2>
            </Col>)}
        </Row>
      </Container>
    )
  }
}

export default App

// const App = () => {
//   const [data,setData] = React.useState([])
//   const mount = async () => {
//     try{
//       const res = await api.get('/')
//       setData(res.data.results)
//       console.log(setData);
//     }
//     catch{
//       console.log('error');
//     }
//   }
//   React.useEffect(()=>
//   mount(), [])

//   return(
//           <Container className="w-100">
//             <Row className="d-flex justify-content-between">
//               {data&&data.map(result=>
//               <Col s={12} md={3} key={result.id}>
//                 <img className="w-100" src={result.image} alt={result.name}></img>
//                 <h2 className="text-center">{result.name}</h2>
//                 </Col>)}
//             </Row>
//           </Container>
//         )
// }