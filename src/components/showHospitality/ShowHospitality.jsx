import { useEffect, useState } from "react";
import Hospitality from "./Hospitality";


const ShowHospitality = () => {
    const [hospitalities, setHospitality] = useState([]);

  useEffect(() => {
    fetch("hospitality.json")
      .then((response) => response.json())
      .then((data) => setHospitality(data));
  }, []);
  console.log("hospitalities show connect:", hospitalities);

  return (
    <div>
      <h2 className="text-2xl text-center font-bold mt-4">
        This is hospitalities page:{hospitalities.length}
      </h2>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1  gap-4">
        {hospitalities.map((hospitality) => (
          <Hospitality key={hospitality.id} hospitality={hospitality}></Hospitality>
        ))}
      </div>
    </div>
  );
};

export default ShowHospitality;