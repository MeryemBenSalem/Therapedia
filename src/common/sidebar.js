import React from "react";
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return (
            <div className="border-end sidenav" id="sidebar-wrapper" style={{ position: "fixed", top: 0, left: 0, width: "14rem", zIndex: 1000, height: "100vh", background: "#f8f9fa", borderRight: "1px solid #dee2e6" }}>
                <div className="sidebar-heading border-bottom" style={{ background: "#fff" }}>
                    <Link to="/">
                        <img alt="Alt content" src={require('./../Assets/images/logo.jpg')} style={{ width: "180px", borderRadius: "10px 10px 0 0" }} />
                    </Link>
                </div>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1" style={{ backgroundColor: "#68283D" }}>
                        <Link className="text-white" to="/dashboard" style={{ padding: "10px 15px", display: "block" }}>
                            <i className="fa fa-dashboard"></i> Dashboard
                        </Link>
                    </li>


                    <li className="mb-1" style={{ backgroundColor: "#68283D" }}>
                        <Link className="text-white" to="/profile" style={{ padding: "10px 15px", display: "block" }}>
                            <i className="fa fa-user-circle" aria-hidden="true"></i> Profile
                        </Link>
                    </li>
                    <li className="mb-1" style={{ backgroundColor: "#68283D" }}>
                        <Link className="text-white" to="/signin" style={{ padding: "10px 15px", display: "block" }}>
                            <i className="fa fa-sign-out" aria-hidden="true"></i> Sign out
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
