import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            searchQuery: ""
        }
    }

    handleSearch = (e) => {
        this.setState({ searchQuery: e.target.value });
        // Perform search operations here
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom" style={{ paddingLeft: "15rem" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto">
                            <div className="input-group">
                                <span className="input-group-text"><i className="fa fa-search"></i></span>
                                <input className="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search" value={this.state.searchQuery} onChange={this.handleSearch} style={{ width: "20rem" }} />
                            </div>
                        </form>
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item dropdown notifications">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bell"></i></a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={{ minWidth: "20rem" }}>
                                    <div className="dropdown-header">Notifications</div>
                                    <a className="dropdown-item" href="#!">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>Therapist liked your post</strong><br />
                                                <span className="text-muted">1h ago</span>
                                            </div>
                                            <div><i className="fa fa-thumbs-up text-primary"></i></div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>John upvoted Bella's post</strong><br />
                                                <span className="text-muted">2h ago</span>
                                            </div>
                                            <div><i className="fa fa-thumbs-up text-primary"></i></div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>New message from Alice</strong><br />
                                                <span className="text-muted">3h ago</span>
                                            </div>
                                            <div><i className="fa fa-envelope text-primary"></i></div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>You have a session scheduled for tomorrow</strong><br />
                                                <span className="text-muted">1d ago</span>
                                            </div>
                                            <div><i className="fa fa-calendar text-primary"></i></div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>New blog post published: "10 Tips for Managing Anxiety"</strong><br />
                                                <span className="text-muted">2d ago</span>
                                            </div>
                                            <div><i className="fa fa-newspaper-o text-primary"></i></div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!">View all notifications</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
