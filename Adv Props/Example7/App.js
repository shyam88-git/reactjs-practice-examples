class App extends React.Component{

    render(){

        return(
            <div>
                <Greeting name="Shyam" who="Lok"/>
                <Greeting name="Shyam" />
                <Greeting who="Lok"/>
                <Greeting/>
            </div>
        )
    }
}

let div=document.querySelector('#root');
let root=ReactDOM.createRoot(div);
root.render(<App/>);