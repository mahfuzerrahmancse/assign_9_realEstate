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
    <div>
      <img src={image} alt="hotel"></img>
      <h2>{estate_title}</h2>
      <h3>{id}</h3>
      <h3>{segment_name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Hospitality;
