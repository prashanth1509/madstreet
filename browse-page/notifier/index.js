import React from 'react';

let ref;

export default class Notifier extends React.Component {
    constructor(props){
        super(props);
        this.state = {message: null};
    }

    componentDidMount(){
        ref = this.show.bind(this);
    }

    show(message){
        this.setState({message: message}, () => {
            setTimeout(()=> this.setState({message: null}), 3000);
        });
    }

    render(){
        let {message} = this.state;
        return (
            <div className={"toast " + (!message && "hidden")} onClick={()=>this.setState({message: null})}>{message}</div>
        );
    }
}

let notifier = function (message) {
    ref ? ref(message) : alert(message);
};

export {notifier};