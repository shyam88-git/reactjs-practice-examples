class App extends React.Component{


    render(){

        return(

            <div>

                <Student name="Shyam" age={25} subjects={["Java","PHP","Python"]}  marks={[60,20,20]} />
            </div>
        )

    }
}

let div=document.querySelector('#root');
let root=ReactDOM.createRoot(div);
root.render(<App/>);