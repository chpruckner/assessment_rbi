import React from 'react';


const Output = (props) => {
    let key = new Date();
    return(
        <div className="card mb-3" key={key}>
            <div className="card-body">
                <h5 className="card-title">{props.user}</h5>
                <p className="card-text">{props.message}</p>
            </div>
        </div>
    );
}

class Chat extends React.Component {


    render() {
        const arr = this.props.output;
        const outputs = arr.map(el => <Output user={el.user} message={el.message} />)
        return(
            <div>
                {outputs}
            </div>
        );
    }
}

export default Chat;