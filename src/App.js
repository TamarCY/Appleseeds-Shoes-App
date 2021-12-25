import React from "react";
import api from "./api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";
import EditWrapper from "./components/EditWrapper"

class App extends React.Component {
  state = {
    data: [],
  };

  getData = async () => {
    const data = await api.getItems();
    this.setState({ data });
  };

  addItem = async (data) => {
    await api.postItem(data);
    this.getData();
    // TODO: add validation to the form
    //TODO: add link/redirect when the form is submitted
  };

  removeItem = async (id) => {
    const response = await api.removeItem(id);
    console.log(response);
    this.getData();
  };


  handleEdit = (id, item) => {
    console.log(item);
    return this.state.data.find((item) => {return item.id === +id});
  }

  componentDidMount = () => {
    this.getData();
  };
  render() {
    if (!this.state) {
      return <div></div>;
    }
    // TODO: add spinner
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home items={this.state.data} removeItem={this.removeItem} handleEdit={this.handleEdit}/>
              }
            />
            <Route
              path="/add"
              element={<Edit items={this.state.data} addItem={this.addItem}/>}
            />
            <Route path="/edit/:id" element={<EditWrapper  />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
