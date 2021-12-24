import React from "react";


class Card
    extends React.Component {
    render() {
        console.log(this.props.item);

        return (
            <div className="card">
                <div className="image">
                    <img src={this.props.item.image} alt={this.props.item.name} />
                </div>
                <div className="content">
                    <div className="header">{this.props.item.name}</div>
                    <div className="color">
                        {this.props.item.color}
                    </div>
                    <div class="meta">
                        <span class="date">{this.props.item.price} $</span>
                    </div>
                </div>

                <div class="extra content">
                    <div class="large ui buttons">
                        <button class="ui button">Edit</button>
                        <button class="ui button">Delete</button>
                    </div>
                </div>
            </div>

        )
    }
}


export default Card
