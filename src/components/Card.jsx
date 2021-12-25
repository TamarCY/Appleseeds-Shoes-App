import React from "react";
import { Link } from "react-router-dom";


class Card
    extends React.Component {


    render() {
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
                    <div className="meta">
                        <span className="date">{this.props.item.price} $</span>
                    </div>
                </div>

                <div className="extra content">
                    <div className="large ui buttons">
                        <Link to={`/edit/${this.props.item.id}`}>
                            <button className="ui button"
                                onClick={() => this.props.handleEdit(this.props.item.id, this.props.item)}>Edit</button>
                        </Link>
                        <button className="ui button"
                            onClick={() => this.props.removeItem(this.props.item.id)}>Delete</button>
                    </div>
                </div>
            </div>

        )
    }
}


export default Card
