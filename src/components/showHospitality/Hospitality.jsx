/* eslint-disable react/prop-types */
// import hotel2 from "../../assets/images/hotel2.jpg"

const Hospitality = ({ hospitality }) => {
  const {
    image,
    estate_title,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    view_property,
  } = hospitality;

  return (
    
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{id}</p>
          <h3>{segment_name}</h3>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">View Property</button>
          </div>
        </div>
      </div>
      
    
  );
};

export default Hospitality;
