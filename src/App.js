import React from "react";
import api from "./api";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

class App extends React.Component{
  state = {
      data:[]
  }

  getData = async () => {
    const data = await api.getItems();
    this.setState({data})
  }

  

  componentDidMount = () => {
    this.getData()
    
  }
  render(){
    if(!this.state){return <div></div>}
    // TODO: add spiner
      return (
          <div>
            <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Home items={this.state.data}/>}/>
              </Routes>
            </BrowserRouter>

          </div>
      )
  }
}






export default App;
