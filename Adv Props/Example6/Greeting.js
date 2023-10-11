class Greeting extends React.Component{

    render(){

        return(
        <div>

           <p> Good Morning {String(this.props.name)}  from {String(this.props.who)}</p>
        </div>
        );
    }
}