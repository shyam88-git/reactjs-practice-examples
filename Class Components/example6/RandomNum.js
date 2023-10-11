function getNumber(){

    let arr=[1,2,3,4,5,6,7];
    let element=arr[Math.floor(Math.random()*arr.length)];
    return element;
}

class RandomNum extends React.Component{

    render(){

       let element=getNumber();
       let msg=null;
       switch(element==6){

            case true:
                msg=<small>
                    <h1> Congratulations you won the game</h1>
                    <img src="../../React with JSX/Shyam.jpeg"/>
                </small>

                break;
                default:
                    msg=<small>Sorry! better luck for next time</small>

       }

       return(

            <div>
                <p>The number is {element}</p>
                {msg}
            </div>
       );
    }

}
