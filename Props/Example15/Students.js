class Students extends React.Component{

    render(){
        let{city,pincode}=this.props.Address;

        return(

            <div>
                <h1> Students Details</h1>
                <p>Name:{this.props.name}</p>
                <p>age:{this.props.age}</p>
                <p>subjects:{this.props.subjects.join()}</p>
                <p>marks:{this.props.marks.join()}</p>
                <p>isPass:{String(this.props.isPass)}</p>
                <p>city:{city}</p>
                <p>Pincode:{pincode}</p>
            </div>
        );
    }
}