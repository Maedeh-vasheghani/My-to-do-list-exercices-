export default function Card ({image, title, content}) {
  


    return (

    <div className="col">

      <div className="card">
      {/* <img src={image} class="card-img-top" alt="..." /> */}
         <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{content}</p>
             <button className=" btn btn-danger px-4" >Delet</button>
         </div>
    </div>
  </div>
    )
}