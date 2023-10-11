class App extends React.Component{


        render(){

            return (

                <div>

                    <RandomNum/>
                    <Hello/>
                </div>
            );
        }

}

//ReactDOM.render(<App/>,document.querySelector('#root'));

 let mydiv=document.querySelector('#root');
 let root=ReactDOM.createRoot(mydiv);
 root.render(<App/>);