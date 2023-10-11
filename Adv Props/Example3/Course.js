class Course extends React.Component{
    

    render(){
        let{name,titles}=this.props;
        let subjects=[];
        for(let sub of titles)
        {

             subjects.push(<li>{sub}</li>);
        }

       return (

            <div>

                <p> Course name:{name}</p>
                <p>Titles :<ul>{subjects}</ul></p>

            </div>
       )
    }
}