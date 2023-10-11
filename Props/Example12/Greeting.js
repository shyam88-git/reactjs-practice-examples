function Greeting(props){


    return <h1> Hello Good morning {props.name} </h1>;
}
let mydiv=document.querySelector('#root');
ReactDOM.render(<Greeting name="Sachin"/>,mydiv);