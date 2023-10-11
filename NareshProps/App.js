import React, { Component } from 'react'


class ProductDetails{

    name="JBL Speaker";
    price=45000.0;
    photo='SHyam.jpg';
}
 class CategoryDetails extends ProductDetails
 {


    mdf=new Date("2022-02-10");
    CategoryName='Electricity';
 }

 class Product extends React.Component
 {


     render(){

        const prod=new CategoryDetails();
        return(

         <div className="card">
        <div className="card-header">
          <h3>{prod.name}</h3>
        </div>
        <div className="card-body">
          <img src={prod.photo} width="200" height="200" />
        </div>
        <div className="card-footer">
          <h3>{prod.price}</h3>
          <p>{prod.mdf.toLocaleDateString()}</p>
          <p>{prod.CategoryName}</p>
        </div>
      </div>
        )
     }
 }
export default class App extends Component {
  render() {
    return (
      <div><Product/></div>
    )
  }
}
ReactDOM.render(
    <MainContent />,
    document.getElementById('root')
  );
  