import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="ui pointing  menu">
                    <Link to="/">
                        <div className=" Navbar-home item">
                            <i className="fas fa-home"></i>
                        </div>
                    </Link>
                    <Link to="/add">
                        <div className="Navbar-add item">
                            Add Item
                        </div>
                    </Link>

                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..." />
                                <i className="search link icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Navbar