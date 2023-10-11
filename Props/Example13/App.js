class App extends React.Component{

    render(){

        return(
            <Greeting name="Shyam" from ="Janjyoti College"/>
        );

    }
   
}
let mydiv=document.querySelector('#root');
ReactDOM.render(<App/>,mydiv);