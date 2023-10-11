class Greeting extends React.Component{


    render(){

        let element=<h1>Good morning </h1>;
        return element;
    }
}

let mydiv=document.querySelector('#root');
ReactDOM.render(<Greeting/>,mydiv);