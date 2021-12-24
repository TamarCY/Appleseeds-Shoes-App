import React from "react";
import Card from "../components/Card";


class Home extends React.Component {
    renderCards = () => {
       return  this.props.items.map((item) => {return <Card item={item} />})
    }
    render() {
        console.log(this.props);
        if (!this.props.items){ return <div>???</div> }
        // TODO: add spiner
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