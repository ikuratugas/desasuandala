function Geografi() {
  return (
    <div className="font-poppins bg-slate-100 sm:bg-gray-100 xl:bg-gray-100 xl:h-full mt-10" id="geografi">
    <div className="grid xl:grid-cols-2">
      <div className="px-4 py-4 max-w-sm mx-auto sm:max-w-2xl sm:px-6 xl:max-w-4xl xl:px-10">
        <h1 className="text-3xl pb-5 xl:pb-0 font-dela text-center font-bold xl:text-6xl">Geografi Desa Suandala</h1>


        <div
        className="flex flex-row justify-start items-start flex-wrap sm:flex-row sm:max-w-2xl sm:flex-wrap sm:justify-around xl:max-w-full xl:py-5">

          <div className="flex flex-col  my-1 bg-white px-3 py-2 text-left border-2 border-gray-300 rounded-l-xl rounded-br-xl shadow-md w-full sm:h-fit sm:justify-center xl:p-4">
            <div className="flex flex-col justify-end">
              <span className="text-md xl:text-lg"><span className="font-bold">luas wilayah</span>: 21.5 km2 atau 215 Ha</span>
            </div>
          </div>
          
          <div className="flex flex-col  my-1 bg-white px-3 py-2 text-left border-2 border-gray-300 rounded-l-xl rounded-br-xl shadow-md w-full sm:h-fit sm:justify-center xl:p-4">
            <div className="flex flex-col justify-end">
              <span className="text-md xl:text-lg"><span className="font-bold">Luas Lahan Pemukiman</span>: 30,5 Ha</span>
            </div>
          </div>

          <div className="flex flex-col  my-1 bg-white px-3 py-2 text-left border-2 border-gray-300 rounded-l-xl rounded-br-xl shadow-md w-full sm:h-fit sm:justify-center xl:p-4">
            <div className="flex flex-col justify-end">
              <span className="text-md xl:text-lg"><span className="font-bold">Jumlah Dusun</span>: 3</span>
              <ul>
                <li><span className="text-xs xl:text-base">◉ Dusun 1: Dusun Suandala</span></li>  
                <li><span className="text-xs xl:text-base">◉ Dusun 2: Dusun Kaombo</span></li>
                <li><span className="text-xs xl:text-base">◉ Dusun 3: Dusun Ladikila</span></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col  my-1 bg-white px-3 py-2 text-left border-2 border-gray-300 rounded-l-xl rounded-br-xl shadow-md w-full sm:h-fit sm:justify-center xl:p-4">
            <div className="flex flex-col justify-end">
              <span className="text-md font-bold xl:text-lg">Batas Wilayah</span>
              <ul>
                <li><span className="text-xs xl:text-base">◉ utara: Desa Kab. Buton Utara</span></li>  
                <li><span className="text-xs xl:text-base">◉ selatan: Desa Hutan Negara</span></li>
                <li><span className="text-xs xl:text-base">◉ barat: Desa Nambo</span></li>
                <li><span className="text-xs xl:text-base">◉ timur: Desa Togomangura</span></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col  my-1 bg-white px-3 py-2 text-left border-2 border-gray-300 rounded-l-xl rounded-br-xl shadow-md w-full sm:h-fit sm:justify-center xl:p-4">
            <div className="flex flex-col justify-end">
              <span className="text-md font-bold xl:text-lg">Tapografi</span>
              <ul>
                <li><span className="text-xs xl:text-base">◉ dataran rata: 107.5 Ha (rata-rata)</span></li>  
                <li><span className="text-xs xl:text-base">◉ dataran tinggi: 107.5 Ha (rata-rata)</span></li>
                <li><span className="text-xs xl:text-base">◉ ketinggian di atas permukaan laut: 50m dpl (rata-rata)</span></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col  my-1 bg-white px-3 py-2 text-left border-2 border-gray-300 rounded-l-xl rounded-br-xl shadow-md w-full sm:h-fit sm:justify-center xl:p-4">
            <div className="flex flex-col justify-end">
              <span className="text-md font-bold xl:text-lg">Klimatologi</span>
              <ul>
                <li><span className="text-xs xl:text-base">◉ Suhu 27-30 °C</span></li>  
                <li><span className="text-xs xl:text-base">◉ Curah Hujan 1500/2000 mm</span></li>
                <li><span className="text-xs xl:text-base">◉ Kelembaban udara 29-32%</span></li>
                <li><span className="text-xs xl:text-base">◉ Kecepatan angin 125 Knot/jam</span></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="relative h-auto w-full sm:max-w-2xl xl:hidden py-2">
            <iframe className="rounded-lg h-60 w-full object-cover shadow-md shadow-gray-400 sm:h-80 sm:object-bottom xl:hidden  border-4 border-green-400 "  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69323.13087060247!2d122.94617985292942!3d-5.247075285311114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da3fb4c6cce4231%3A0xc5bed72da60183be!2sSuandala%2C%20Lasalimu%2C%20Buton%20Regency%2C%20South%20East%20Sulawesi!5e0!3m2!1sen!2sid!4v1696425490163!5m2!1sen!2sid"  loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
        </div>
      </div>



      {/* gambar besar muncul ketika ukuran xl */}
      <div className="hidden relative xl:block h-full">
            <iframe className="absolute inset-0 w-full h-full object-cover border-4 border-green-400 rounded-xl"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69323.13087060247!2d122.94617985292942!3d-5.247075285311114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da3fb4c6cce4231%3A0xc5bed72da60183be!2sSuandala%2C%20Lasalimu%2C%20Buton%20Regency%2C%20South%20East%20Sulawesi!5e0!3m2!1sen!2sid!4v1696425490163!5m2!1sen!2sid"  loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
      </div>

      </div>
  </div>

  )
}

export default Geografi