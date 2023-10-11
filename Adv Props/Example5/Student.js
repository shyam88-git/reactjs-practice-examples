class Student extends React.Component{

    render(){

         let{subjects,marks}=this.props;
         let total=0;
         let arr=[];

       arr=marks.map((m)=>{

            total+=m;
            return <li>{marks}</li>
         });

         return(

                <div>

                    <h1>Student Details:</h1>
                    <p>Name:{this.props.name}</p>
                    <p>Age:{this.props.age}</p>
                    <p>subjects:</p>
                    <ul>
                        {subjects.map((sub)=>
                        <li>{sub}</li>)}
                    </ul>

                    <p>Marks:</p>
                    <ul>{marks.map((m)=>
                     <li>{m}</li>)}</ul>

                    <p>Total:{total}</p>
                    <p>Result:{total>=150?"Pass":"Fail"}</p>

                    <p></p>
                </div>
         );
    }
}