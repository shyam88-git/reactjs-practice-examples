 class Students extends React.Component{
   
    render(){
        let{subjects,marks}=this.props;
        return(

            <div>
                <h2>Students  Details</h2>
                <p>Name:{this.props.name}</p>
                <p>Age:{this.props.age}</p>
                <p>Subjects:
                <ul>{subjects.map((sub)=>
                <li>{sub}</li>)}</ul></p>

            <p>Marks:
                <ul>{marks.map((num)=>
                <li>{num}</li>)}</ul></p>


                
            </div>
        )
    }
 }