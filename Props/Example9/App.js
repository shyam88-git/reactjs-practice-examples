class App extends React.Component{

    render(){

       return( <div>
            <Students name="Shyam" 
            age={23}
             subjects={["Phy","Chy","Math"]} 
             marks={[60,80,90]} ispass={true} 
             address={{city:"kathmandau", pincode:4534}}/>
        </div>
       );
    }
}

let mydiv=document.querySelector('#root');
let root=ReactDOM.createRoot(mydiv);
root.render(<App/>);