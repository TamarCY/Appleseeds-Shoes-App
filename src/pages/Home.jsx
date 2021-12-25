import React from "react";
import Card from "../components/Card";


class Home extends React.Component {
    renderCards = () => {
        return this.props.items.map((item) => {
            return <Card item={item}
                key={item.id}
                removeItem={this.props.removeItem} 
                handleEdit={this.props.handleEdit} />
        })
    }
    render() {
        if (!this.props.items) { return <div>???</div> }
        // TODO: add spinner
        return (
            <div>
                <div className="ui container">
                    <h1>Shoes</h1>
                    <div className="ui link cards">
                        {this.renderCards()}
                    </div>
                </div>
            </div>
        )
    }
}


export default Home