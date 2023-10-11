class App extends React.Component{

    render(){

        return(
            <Students name="Shyam" 
            age={25}
             subjects={["Phy","Chy","Bio"]}
              marks={[50,60,80]} 
              isPass={true}
               Address={{city:"mnr" , pincode:12345}}/>

        );
    }
}
let mydiv=document.querySelector('#root');
ReactDOM.render(<App/>,mydiv);