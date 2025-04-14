import Image from "next/image";

const Kerjasama = () => {
  return (
    <>
      <div className="container mx-auto pb-14">
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold text-gray-900">KERJASAMA DENGAN TVKU</h2>
          <div className="w-12 mx-auto mt-2 border-b-2 border-gray-300"></div>
        </div>
        <div id="logo" className="flex justify-center items-center space-x-16">
          {[
            "/images/tvkublue.png",
            "/images/tvkublue.png",
            "/images/tvkublue.png",
            "/images/tvkublue.png",
          ].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="Partner Logo"
              width={200} // Ukuran diperbesar
              height={150} // Ukuran diperbesar
              className="mx-8" // Margin diperbesar
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Kerjasama;
