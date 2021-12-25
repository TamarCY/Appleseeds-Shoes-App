import React from "react";
import { Link } from "react-router-dom";


class Edit extends React.Component {
    state ={
        name: this.props.itemToEdit.name,
        color: this.props.itemToEdit.color,
        price: this.props.itemToEdit.price,
        image: this.props.itemToEdit.image,
        id: this.props.itemToEdit.id

    }

    

    
    
    // TODO: destructor dry "this.props."

    render() {
        if (!this.props){return <div></div>}
        console.log(this.state);
        return (
            <div className="ui container">
                {(this.props.edit)?
                <h2>Edit Item</h2>:
                <h2>Add New Item</h2>}
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="first-name" placeholder="Item Name" 
                        defaultValue ={this.props.edit? this.props.itemToEdit.name: this.state.name}
                        onChange={e => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Color</label>
                        <input type="text" name="last-name" placeholder="Color"
                        defaultValue ={this.props.edit? this.props.itemToEdit.color: this.state.color}
                        onChange={e => this.setState({color: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input type="number" name="last-name" placeholder="Price"
                        defaultValue ={this.props.edit? this.props.itemToEdit.price: this.state.price}
                        onChange={e => this.setState({price: e.target.value})}/>
                    </div>
                    <div className="field">
                    <label>Image</label>
                        <input type="text" name="last-name" placeholder="Image URL"
                        defaultValue ={this.props.edit? this.props.itemToEdit.image: this.state.image}
                        onChange={e => this.setState({image: e.target.value})}/>
                    </div>
                </form>
                <Link to={"/"}>
                <button className="ui button" onClick={()=>this.props.addItem(this.state)}>
                    Submit
                </button>
                </Link>
            </div>
        )
    }
}


export default Edit