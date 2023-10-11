class Students extends React.Component{

    render(){
        let{subjects,marks}=this.props;
        let sum=0;
        for(let i=0;i<marks.length;i++){

            sum+=marks[i];
        }

        return(

            <div style={{backgroundColor:"green",
            borderRadius:"20px",
            border:"solid 2px brown"
            }}>
                <h1>Students Details</h1>
                <p>Name:{this.props.name}</p>
                <p>Age:{this.props.age}</p>
                <p>Subjects:<ul>
                    {subjects.map((s)=><li>{s}</li>)}</ul></p>
                <p>Marks:<ul>
                    {marks.map((m)=><li>{m}</li>)}</ul></p>

                
                <p>Total:{sum}</p>
                <p>Result:{sum>150? "Pass" :"Fail"}</p>
            </div>
        );
    }
}