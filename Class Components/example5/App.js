class Greeting extends React.Component{


    render(){

        return(

            <div>
                <Hello/>
            </div>
        );
    }
}

let mydiv=document.querySelector('#root');
ReactDOM.render(<Greeting/>,mydiv);