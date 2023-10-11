class App extends React.Component{

    render(){

        return(

            <div>
                <h1> Emoji Details</h1>
                <Course name="Java" title={["Java SE","Java EE","Android"]}/>
                <Course name="Front End Development" title={["Html","CSS" ,"JS"]}/>
            </div>
        );
    }
}
let mydiv=document.querySelector('#root');
ReactDOM.render(<App/>,mydiv);