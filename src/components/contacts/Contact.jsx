

const Contact = () => {
  return (
    <div className="max-w-[800px] mx-auto p-4 bg-white shadow-md rounded-md">
      <h3 className="text-xl text-center font-bold mb-4">Contact Us</h3>
      <div className="text-gray-700 flex justify-around">
        <div>
          <h4 className="font-semibold">CBRE Group, Inc.</h4>
          <p>2100 McKinney Ave #1250</p>
          <p>Rangpur, TX 75201</p>
          <p>Bangladesh</p>
          <p className="mt-2">Phone: (214) 979-6100</p>
          <p>Email: info@cbre.com</p>
        </div> 
        <div>
          <h4 className="font-semibold">CBRE Group, Inc.</h4>
          <p>2100 McKinney Ave #1250</p>
          <p>Dallas, TX 75201</p>
          <p>United States</p>
          <p className="mt-2">Phone: (214) 979-6100</p>
          <p>Email: info@cbre.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
