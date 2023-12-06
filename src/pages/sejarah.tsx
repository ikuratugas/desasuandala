import sejarahfoto from "../assets/desasunandala.jpg";

function Sejarah() {
  return (
    <div className="bg-gray-100 py-2 mx-auto" id="sejarah">
    <div className="mx-auto max-w-sm sm:max-w-2xl xl:grid xl:grid-cols-2 xl:max-w-full">
      <div className="px-5 font-dela flex flex-col gap-2 text-center sm:text-left sm:px-8 xl:w-full xl:pr-10 xl:gap-4">
        <h1 className="text-3xl text-center font-bold xl:text-6xl">
          Sejarah Desa Suandala
        </h1>

        <img
            className="rounded-lg h-60 w-full object-cover my-4 shadow-md shadow-gray-400 sm:h-80 sm:object-bottom xl:hidden" src={sejarahfoto} alt="desasuandala"
          />

        <p className="font-poppins indent-8 text-justify sm:text-lg xl:text-lg xl:indent-12">
          Desa Suandala  adalah pemekaran dari Desa Lawele pada tahun 1997 dan merupakan daerah pedesaan yang subur dan mayoritas mata pencahariannya bergerak di bidang bercocok tanam yaitu petani, ading, dan sebahagian nelayan dan lain-lain.
        </p>

        <p className="font-poppins indent-8 text-justify sm:text-lg xl:text-lg xl:indent-12">
        Awalnya Desa Suandala terdiri dari 5 dusun yaitu Dusun Suandala, Dusun Kaombo, Dusun Nambo, Dusun Lagunturu dan Dusun Tandaompure dengan luas wilayah 42,5 km2. Selanjutnya pada tahun 2011 Desa Suandala memperkecil atau di mekarkan lagi menjadi 2 desa yaitu desa Nambo yang terdiri dari dusun Nambo, Dusun Lagunturu, dan Tandaompure sehingga Desa Suandala dengan luas wilayah 21.5 km2 saat ini tinggal memiliki 2 Dusun Suandala dan Dusun Kaombo, Namun pemerintah Desa Suandala telah mengusulkan pemekaran Dusun sejak tahun 2012 yaitu Dusun Ladikila sampai dengan saat belum terealisasi.
        </p>

        <p className="font-poppins indent-8 text-justify sm:text-lg xl:text-lg xl:indent-12">
        Selain dari pada itu Desa Suandala merupakan daerah pertambangan yaitu berupa, Aspal Buton dan tambangan golongan C. Warga desa Suandala didalam melaksanakan kegiatan baik itu dalam kegiatan pemerintahan dan kegiatan sosial masyarakat selalu mengutamakan gotong royong, saling bantu-membantu antara dusun yang satu dengan yang lainnya seperti pembangunan fasilitas umum karena dengan kerja keras dan semangat tinggi dapat menyukseskan pembangunan yang ada di Desa Suandala dan Alhamdulillah sampai saat ini boleh di bilang telah mampu bersaing dengan desa-desa lain di wilayah Kecamatan Lasalimu Kabupaten Buton Provinsi Sulawesi Tenggara.
        </p>
      </div>

      <div className="hidden py-2 px-2 sm:max-w-2xl  xl:flex flex-col  flex-wrap justify-around sm:flex-row xl:max-w-full xl:justify-center xl:items-center xl:order-first xl:w-full ">
      {/* <div className="relative xl:block "> */}
            <img className="w-full h-full object-cover border rounded-xl" src={sejarahfoto} alt="desasuandala"/>
      {/* </div> */}
      </div>
        
    </div>
  </div>
  )
}

export default Sejarah