
const Contact = () => {
  return (
    <div className="contact m-12">
      <h1 className="text-5xl font-lg">Contact Us</h1>
      <h3>Email contact@feastfleet.com</h3>

      <form action="/contact">
        <input type="text" placeholder="name" className="border border-gray-300 rounded-lg p-2 m-2"/>
        <input type="text" placeholder="email" className="border border-gray-300 rounded-lg p-2 m-2"/>
        <button className="border border-gray-300 rounded-lg p-2 m-2 bg-green-200">Submit</button>
      </form>
    </div>
  );
};

export default Contact;