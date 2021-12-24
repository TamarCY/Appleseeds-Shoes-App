import React from "react";
import api from "./api";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";

class App extends React.Component{
  state = {
      data:[]
  }

  getData = async () => {
    const data = await api.getItems();
    this.setState({data})
  }

  addItem = (data) => {
      console.log(data)
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
                <Route path="/add" element={<Edit items={this.state.data}  addItem={this.addItem}/>}/>

              </Routes>
            </BrowserRouter>

          </div>
      )
  }
}






export default App;
