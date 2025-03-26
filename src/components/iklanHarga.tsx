export default function PricingTable() {
  return (
    <>
      <div className="text-center pt-28 mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          MULAI BERIKLAN
        </h2>
        <div className="w-12 mx-auto mt-2 border-b-2 border-gray-300"></div>
      </div>
      <div className="flex items-center justify-center w-full my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 bg-white text-gray-700 font-semibold text-sm">
          Paket Mingguan
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <div className="flex justify-center items-center pt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl items-end">
          {/* Basic Plan */}
          <div className="bg-white p-12 rounded-lg shadow-2xl text-left w-full flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">HEMAT</h3>
              <p className="text-2xl font-bold text-gray-600">
                <span className="text-sm">Rp</span> 400rb{" "}
                <span className="text-sm">/ Minggu</span>
              </p>
              <ul className="mt-6 text-sm text-gray-600 space-y-3">
                <li>✔️ Estimasi 12.000 tayangan 4000 viewer</li>
                <li>✔️ Youtube Ads In-Stream</li>
                <li>✔️ 30 kali tayang TVKU</li>
                <li>✔️ 1 minggu tayang Jateng.news</li>
                <li>✔️ 1 minggu tvku.tv</li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <button className="mt-6 w-full px-6 py-3 border border-blue-500 text-blue-500 rounded-lg">
              Order
            </button>
          </div>

          {/* Standard Plan - Paling Populer */}
          <div className="bg-white p-12 rounded-lg shadow-2xl text-left w-full border-4 border-blue-500 relative flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-600 flex items-center">
                UMUM{" "}
                <span className="ml-2 text-xs font-semibold text-blue-500">
                  Paling Populer
                </span>
              </h3>
              <p className="text-2xl font-bold text-gray-600">
                <span className="text-sm">Rp</span> 500rb
                <span className="text-sm">/ Minggu</span>
              </p>

              <ul className="mt-6 text-sm text-gray-600 space-y-3">
                <li>✔️ Estimasi 15.000 tayangan 5000 viewer</li>
                <li>✔️ Ads In-Stream</li>
                <li>✔️ 30 kali tayang TVKU</li>
                <li>✔️ 1 minggu tayang Jateng.news</li>
                <li>✔️ 1 minggu tvku.tv</li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <button className="mt-6 w-full px-6 py-3 bg-blue-500 text-white rounded-lg">
              Order
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-12 rounded-lg shadow-2xl text-left w-full flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">
                PROFESSIONAL
              </h3>
              <p className="text-2xl font-bold text-gray-600">
                <span className="text-sm">Rp</span> 600rb{" "}
                <span className="text-sm">/ Minggu</span>
              </p>
              <ul className="mt-6 text-sm text-gray-600 space-y-3">
                <li>✔️ Estimasi 20.000 tayangan 6000 viewer</li>
                <li>✔️ Ads In-Stream</li>
                <li>✔️ 30 kali tayang TVKU</li>
                <li>✔️ 1 minggu tayang Jateng.news</li>
                <li>✔️ 1 minggu tvku.tv</li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <button className="mt-6 w-full px-6 py-3 border border-blue-500 text-blue-500 rounded-lg">
              Order
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 bg-white text-gray-700 font-semibold text-sm">
          Paket Bulanan
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <div className="flex justify-center items-center pt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl items-end">
          {/* Basic Plan */}
          <div className="bg-white p-12 rounded-lg shadow-2xl text-left w-full flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">HEMAT</h3>
              <p className="text-2xl font-bold text-gray-600">
                <span className="text-sm">Rp</span> 1jt{" "}
                <span className="text-sm">/ Bulan</span>
              </p>
              <ul className="mt-6 text-sm text-gray-600 space-y-3">
                <li>✔️ Estimasi 30.000 tayangan 8000 viewer</li>
                <li>✔️ Youtube Ads In-Stream</li>
                <li>✔️ 100 kali tayang TVKU</li>
                <li>✔️ 1 bulan tayang Jateng.news</li>
                <li>✔️ 1 bulan tvku.tv</li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <button className="mt-6 w-full px-6 py-3 border border-blue-500 text-blue-500 rounded-lg">
              Order
            </button>
          </div>

          {/* Standard Plan - Paling Populer */}
          <div className="bg-white p-12 rounded-lg shadow-2xl text-left w-full border-4 border-blue-500 relative flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-600 flex items-center">
                UMUM{" "}
                <span className="ml-2 text-xs font-semibold text-blue-500">
                  Paling Populer
                </span>
              </h3>
              <p className="text-2xl font-bold text-gray-600">
                <span className="text-sm">Rp</span> 1,6jt{" "}
                <span className="text-sm">/ Bulan</span>
              </p>
              <ul className="mt-6 text-sm text-gray-600 space-y-3">
                <li>✔️ Estimasi 50.000 tayangan 12.000 viewer</li>
                <li>✔️ Ads In-Stream</li>
                <li>✔️ 100 kali tayang TVKU</li>
                <li>✔️ 1 bulan tayang Jateng.news</li>
                <li>✔️ 1 bulan tvku.tv</li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <button className="mt-6 w-full px-6 py-3 bg-blue-500 text-white rounded-lg">
              Order
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-12 rounded-lg shadow-2xl text-left w-full flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">
                PROFESSIONAL
              </h3>
              <p className="text-2xl font-bold text-gray-600">
                <span className="text-sm">Rp</span> 2jt{" "}
                <span className="text-sm">/ Bulan</span>
              </p>
              <ul className="mt-6 text-sm text-gray-600 space-y-3">
                <li>✔️ Estimasi 60.000 tayangan 15.000 viewer</li>
                <li>✔️ Ads In-Stream</li>
                <li>✔️ 100 kali tayang TVKU</li>
                <li>✔️ 1 bulan tayang Jateng.news</li>
                <li>✔️ 1 bulan tvku.tv</li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <button className="mt-6 w-full px-6 py-3 border border-blue-500 text-blue-500 rounded-lg">
              Order
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 bg-white text-gray-700 font-semibold text-sm">
          Paket 3 Bulanan
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <div className="flex justify-center items-center pt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl items-end">
          {/* Basic Plan */}
          <div className="bg-white p-12 rounded-lg shadow-2xl text-left w-full flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">HEMAT</h3>
              <p className="text-2xl font-bold text-gray-600">
                <span className="text-sm">Rp</span> 4jt{" "}
                <span className="text-sm">/ 3 Bulan</span>
              </p>
              <ul className="mt-6 text-sm text-gray-600 space-y-3">
                <li>✔️ Estimasi 150.000 tayangan 30.000 viewer</li>
                <li>✔️ Youtube Ads In-Stream</li>
                <li>✔️ 300 kali tayang TVKU</li>
                <li>✔️ 3 minggu tayang Jateng.news</li>
                <li>✔️ 3 minggu tvku.tv</li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <button className="mt-6 w-full px-6 py-3 border border-blue-500 text-blue-500 rounded-lg">
              Order
            </button>
          </div>

          {/* Standard Plan - Paling Populer */}
          <div className="bg-white p-12 rounded-lg shadow-2xl text-left w-full border-4 border-blue-500 relative flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-600 flex items-center">
                UMUM{" "}
                <span className="ml-2 text-xs font-semibold text-blue-500">
                  Paling Populer
                </span>
              </h3>
              <p className="text-2xl font-bold text-gray-600">
                <span className="text-sm">Rp</span> 6jt{" "}
                <span className="text-sm">/ 3 Bulan</span>
              </p>
              <ul className="mt-6 text-sm text-gray-600 space-y-3">
                <li>✔️ Estimasi 170.000 tayangan 40.000 viewer</li>
                <li>✔️ Ads In-Stream</li>
                <li>✔️ 300 kali tayang TVKU</li>
                <li>✔️ 3 minggu tayang Jateng.news</li>
                <li>✔️ 3 minggu tvku.tv</li>
                <li>✔️ Custom, Unique Fields</li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <button className="mt-6 w-full px-6 py-3 bg-blue-500 text-white rounded-lg">
              Order
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-12 rounded-lg shadow-2xl text-left w-full flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">
                PROFESSIONAL
              </h3>
              <p className="text-2xl font-bold text-gray-600">
                <span className="text-sm">Rp</span> 8jt{" "}
                <span className="text-sm">/ 3 Bulan</span>
              </p>
              <ul className="mt-6 text-sm text-gray-600 space-y-3">
                <li>✔️ Estimasi 200.000 tayangan 50.000 viewer</li>
                <li>✔️ Ads In-Stream</li>
                <li>✔️ 300 kali tayang TVKU</li>
                <li>✔️ 3 minggu tayang Jateng.news</li>
                <li>✔️ 3 minggu tvku.tv</li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <button className="mt-6 w-full px-6 py-3 border border-blue-500 text-blue-500 rounded-lg">
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
