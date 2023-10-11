

class Students extends React.Component{

     studentStyle={

        backgroundColor:"green",
        borderRadius:"20px",
    };


    render(){

       let{subjects,marks}=this.props;
        let total=0;
        let arr=[];

       arr=marks.map((m)=>{
       total+=m;
       return <li>{m}</li>
    });
        return(
           
            
            <div style={this.studentStyle}>

                <h1>Students Details</h1>
                <p> Name:{this.props.name}</p>
                <p> age:{this.props.age}</p>
                <p>subjects:</p>
                <ul>{subjects.map((sub)=>
                <li>{sub}</li>)}</ul>
                <p>Total:{total}</p>
                <p>Result:
                    <b>{total>=150?"Pass":"Fail"}</b>
                </p>
                
            </div>
        )
    }



}