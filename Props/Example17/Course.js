class Course extends React.Component{

    render(){
        

        let{name,title}=this.props;
        let subject=title.map(subj=>{

            return <li>{subj}</li>
        })
        
        return(

            <div>
                <p>Course Name:{name}</p>
                <p>titles:{title.map(subj=>{
                    return <li>{subj}</li>
                })}</p>
            </div>
        );
    }
}