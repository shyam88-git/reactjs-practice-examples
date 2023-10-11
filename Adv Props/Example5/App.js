
class App extends React.Component{


    render(){


        return(

            <div>

                <Student name="Shyam" age={24} subjects={["Java","PHP","Python"]} marks={[60,80,90]}/>
            </div>
        );
    }
}

let div=document.querySelector('#root');
let root=ReactDOM.createRoot(div);
root.render(<App/>);