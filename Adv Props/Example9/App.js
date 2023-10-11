const Product = obj => (
    <div className="card">
    <div className="card-header">
    <h3>{obj.Name}</h3>
    </div>
    <div className="card-body">
    <img src={obj.Photo} width="50%" height="300"></img>
    </div>
    <div className="card-footer">
    <h4>{obj.Price}</h4>
    </div>
    </div>
   );
   ReactDOM.render(
    <Product Name={'Nike Casuals'} Photo={'SHyam.jpg'} 
   Price={4500.55} />,
    document.getElementById('root')
   );