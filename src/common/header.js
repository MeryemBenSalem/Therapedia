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

                </div>
            </nav>
        );
    }
}

export default Header;
