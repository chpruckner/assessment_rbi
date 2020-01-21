import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            user: ""
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
    }

    handleOnChangeMessage = (e) => {
        let input = e.target.value;
        this.setState({
            input: input
        })
    }

    handleOnChangeUser = (e) => {
        let input = e.target.value;
        this.setState({
            user: input
        })

    }

    render() {
        return(
            <div className="input">
                <form className="form-inline" onChange={this.handleOnSubmit}>
                    <label htmlFor="user-name" className="sr-only">Username:</label>
                    <input 
                        id="user-name" 
                        className="form-control mr-2" 
                        placeholder="Username" 
                        value={this.state.user} 
                        onChange={this.handleOnChangeUser}
                    />

                    <label htmlFor="message" className="sr-only">Message:</label>
                    <input 
                        id="message" 
                        className="form-control mr-2" 
                        placeholder="type your message ..." 
                        value={this.state.input}
                        onChange={this.handleOnChangeMessage}
                    />

                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={() => this.props.onclick(this.state.user, this.state.input)}
                    >Send</button>
                </form>
            </div>
        );
    }
}

export default Input;