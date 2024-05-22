import { useParams } from "react-router-dom";
import data from "../../../public/hospitality.json";



const PropertyDetail = () => {

  const { id } = useParams();
  console.log('property id:',id);
  const property = data.find((item) => item.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

    return (
      <div>
        <h2>Property Details</h2>
        <div className="card card-compact max-w-[600px] m-auto justify-center bg-base-100 shadow-xl">
          <figure>
            <img src={property.image} alt={property.estate_title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{property.estate_title}</h2>
            <p>{property.description}</p>
            <p>Segment: {property.segment_name}</p>
            <p>Price: {property.price}</p>
            <p>Status: {property.status}</p>
            <p>Area: {property.area}</p>
            <p>Location: {property.location}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PropertyDetail;