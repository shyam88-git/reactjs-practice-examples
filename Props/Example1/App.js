class App extends React.Component{

    render(){

        return(<div>

            <Greeting name="Shyam"/>

        </div>
        );
    }
}

let mydiv=document.querySelector('#root');
let root=ReactDOM.createRoot(mydiv);
root.render(<App/>);