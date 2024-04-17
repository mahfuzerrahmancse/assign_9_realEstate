/* eslint-disable react/prop-types */

const Hospitality = ({ hospitality }) => {
  const { Image, estate_title, id, segment_name, description } = hospitality;

  return (
    <div>
      <img src={Image}></img>
      <h2>{estate_title}</h2>
      <h3>{id}</h3>
      <h3>{segment_name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Hospitality;
