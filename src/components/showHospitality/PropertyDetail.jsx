import { Link, useParams } from "react-router-dom";
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
        <h2 className="text-2xl font-bold text-center my-4">
          Property Details
        </h2>
        <div className="card card-compact max-w-[600px] m-auto justify-center bg-base-100 shadow-xl">
          <figure>
            <img src={property.image} alt={property.estate_title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{property.estate_title}</h2>
            <p className="text-gray-500">{property.description}</p>
            <p>
              <span className="font-semibold">Segment:</span>{" "}
              {property.segment_name}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {property.price}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {property.status}
            </p>
            <p>
              <span className="font-semibold">Area:</span> {property.area}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {property.location}
            </p>
            <div className="card-actions justify-end">
              <Link to="/contact">
                <button className="btn btn-primary">Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PropertyDetail;