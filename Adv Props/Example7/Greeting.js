class Greeting extends React.Component{
    static defaultProps={name:"Puran", who:"Dambar"};

    render(){
       

        return(
        <div>

           <p> Good Morning {String(this.props.name)}  from {String(this.props.who)}</p>
        </div>
        );
    }
}