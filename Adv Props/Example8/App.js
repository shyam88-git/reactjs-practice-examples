class App extends React.Component{

    render(){


        return(

            <div>

                <Students name="Shyam" age={15}  subjects={["Java","Html","CSS"]} marks={[50,60,90]}/>
            </div>
        )
    }

}

let mydiv=document.querySelector('#root');
let root=ReactDOM.createRoot(mydiv);
root.render(<App/>);