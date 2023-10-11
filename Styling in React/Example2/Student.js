class Student extends React.Component{

    render(){

        let{subjects ,marks}=this.props;
         let total=0;
         let arr=[];
         arr=marks.map((m)=>{

            total+=m;
            return <li>{m}</li>
         });

        return(

                <div style={{backgroundColor:"skyBlue",borderRadius:"20px",border:"solid 2px brown"}}>
                    <h1>Student Details:</h1>
                    <p style={{color:"red"}}>Name:{this.props.name}</p>
                    <p style={{color:"green"}}>Age:{this.props.age}</p>
                    <p>Subjects:</p>
                    <ul style={{color:"blue"}}>{subjects.map((sub)=>
                        <li>{sub}</li>)} </ul>

                    <p>Marks:</p>
                    <ul>{marks.map((m)=>
                    <li>{m}</li>
                    )}</ul>

                    <p>Total:{total}</p>
                    <p>Result:{total>=150?"Pass":"Fail"}</p>

                </div>
        );
    }
}