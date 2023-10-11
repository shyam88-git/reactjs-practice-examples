class App extends React.Component{

    render(){

        let element=<h1>Hello User</h1>;
        return element;


    }
}

let myDiv=document.querySelector("#root");

ReactDOM.render(<App/> ,myDiv);