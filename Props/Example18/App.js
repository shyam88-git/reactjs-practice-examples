class App extends React.Component{

    render(){

        return(

            <div>
                <Students name="Varun"
                age={15}
                subjects={["Phy","Chem","Maths"]}
                marks={[40,500,60]}/>

            </div>
        );
    }
}
let mydiv=document.querySelector("#root");
ReactDOM.render(<App/>,mydiv);