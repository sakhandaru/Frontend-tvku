      {/* Penawaran Harga */}
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold">Penawaran Harga</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Hemat", "Umum", "Bisnis"].map((tier, i) => (
          <div key={i} className={`p-6 rounded-lg shadow-lg ${tier === "Umum" ? "border-2 border-blue-500" : ""} text-center` }>
            <h3 className="text-xl font-bold mb-3">{tier}</h3>
            <p className="text-lg">Rp{tier === "Hemat" ? "500.000" : tier === "Umum" ? "1.000.000" : "2.500.000"}</p>
            <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg">Pilih</button>
          </div>
        ))}
      </div>
    </div>