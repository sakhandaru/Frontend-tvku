const Kerjasama = () => {
  return (
    <>
      <div className="text-center my-10">
      <h2 className="text-3xl font-bold text-gray-900">KERJASAMA DENGAN TVKU</h2>
      <div className="w-12 mx-auto mt-2 border-b-2 border-gray-300"></div>
      </div>
      <div id="logo" className="flex space-x-10 overflow-hidden">
        {[
          "/images/tvkublue.png",
          "/images/tvkublue.png",
          "/images/tvkublue.png",
          "/images/tvkublue.png",
        ].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Partner Logo"
            width={150}
            height={100}
            className="mx-5"
          />
        ))}
      </div>
    </>
  );
};

export default Kerjasama;
