import React from "react";
import { Link } from "react-router-dom";


class Edit extends React.Component {
    state ={
        name: "",
        color: "",
        price: "",
        image: ""

    }
    render() {
        return (
            <div className="ui container">
                <h2>Add New Item</h2>
                <form className="ui form">
                    <div className="field">
                        <label> Name</label>
                        <input type="text" name="first-name" placeholder="Item Name" 
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Color</label>
                        <input type="text" name="last-name" placeholder="Color"
                        value={this.state.color}
                        onChange={e => this.setState({color: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input type="number" name="last-name" placeholder="Price"
                        value={this.state.price}
                        onChange={e => this.setState({price: e.target.value})}/>
                    </div>
                    <div className="field">
                    <label>Image</label>
                        <input type="text" name="last-name" placeholder="Image URL"
                        value={this.state.image}
                        onChange={e => this.setState({image: e.target.value})}/>
                    </div>
                </form>
                <Link to={"/"}>
                <button className="ui button" onClick={()=>this.props.addItem(this.state)}>Submit</button>
                </Link>
            </div>
        )
    }
}


export default Edit