class App extends React.Component{

    render(){

        return(
        <div>

            <Students name="Ravi" age={25} subjects={["Java","Oracle","MySQL"]} marks={[60,70,80]}/>
             </div>
        );
    }
}

let mydiv=document.querySelector('#root');
let root=ReactDOM.createRoot(mydiv);
root.render(<App/>);