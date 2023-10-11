

class Students extends React.Component{


    render(){

        let{city,pincode}=this.props.address;
        return(
           
            
            <div>

                <h1>Students Details</h1>
                <p> Name:{this.props.name}</p>
                <p> age:{this.props.age}</p>
                <p> subjects:{this.props.subjects.join()}</p>
                <p> marks:{this.props.marks.join()}</p>
                <p> ispass:{String(this.props.ispass)}</p>
                <p> City:{city}</p>
                <p> Pincode: {pincode}</p>
            </div>
        )
    }



}