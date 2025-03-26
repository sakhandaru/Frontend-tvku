export default function PosisiIklan() {
  const ads = [
    { title: "Masthead", image: "/images/iklan/posisiIklan.png" },
    { title: "In-Stream Non-Skippable", image: "/images/iklan/posisiIklan.png" },
    { title: "Trueview in search", image: "/images/iklan/posisiIklan.png" },
    { title: "Trueview in-stream", image: "/images/iklan/posisiIklan.png" },
    { title: "In-display sponsored video", image: "/images/iklan/posisiIklan.png" },
    { title: "In-display banner", image: "/images/iklan/posisiIklan.png" }
  ];

  return (
    <div className="pt-10 pb-16 flex flex-col items-center  bg-gray-100 ">
      <h2 className="text-3xl font-bold text-gray-900 uppercase">Jenis Iklan di YouTube</h2>
      <div className="w-12 mx-auto mt-2 mb-7 border-b-2 border-gray-300"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {ads.map((ad, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img 
              src={ad.image} 
              alt={ad.title} 
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{ad.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}