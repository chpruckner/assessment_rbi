import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Input from './components/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: []
    }
  }

  handleOnClick = (user, message) => {
    const arr = this.state.output;
    const mess = {
        user: user,
        message: message
    }
    arr.push(mess);

    this.setState({
        output: arr
    });
  }

  render() {
    return(
        <div className="App container">
          <div className="chat">
            <Chat output={this.state.output} />
          </div>
          <Input onclick={this.handleOnClick} />
        </div>
    );
  }
}

export default App;
