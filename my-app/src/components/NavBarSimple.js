import React from 'react'

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: "My Galery",
            buttonText: "Login",
            message: "Hello Guest!"
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State Handle:", prevState);
            console.log("Previous Props handle:", prevProps);
            return {
                buttonText: prevState.buttonText === "Login" ? "Log out" : "Login",
                message: prevState.message ===  "Welcome Back User!" ? "Hello, guest!" : "Welcome Back User!",
            }
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.Title}
                </h1>
                <span>
                {this.state.message}
                </span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}


export default NavBarSimple