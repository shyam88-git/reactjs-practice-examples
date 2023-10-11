class App extends React.Component{

    render(){

        return(
        <div>

            <h1> Course Details</h1>
            <Course name="Varun" age={15} subjects={["Java SE","Jakarta EE","Android"]} marks={[50,50,60]}/>
           

        </div>
        );
    }
}

let mydiv=document.querySelector('#root');
let root=ReactDOM.createRoot(mydiv);
root.render(<App/>);