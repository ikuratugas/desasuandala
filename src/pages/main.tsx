import woke from "../assets/woke.jpg";
import logokabupatenbuton from "../assets/logo_kab_buton.png";
import '../styles/glow.css';

function Main() {

  return (
    <div className="bg-slate-100 sm:bg-gray-100 xl:bg-gray-100 bgimage xl:h-screen">
      <div className="grid xl:grid-cols-2">
        <div className="px-4 py-4 max-w-sm mx-auto sm:max-w-2xl sm:px-6 xl:max-w-4xl xl:px-10">
          <div className="xl:pb-16">
            <div className="flex flex-row">           
            <img className="w-8 h-10" src={logokabupatenbuton} alt="logokabupatenbuton"/>
            <div className="-mt-1 sm:-mt-2 ">
              <h1 className="font-extrabold font-poppins text-3xl text-gray-900 sm:text-4xl sm:py-1 sm:px-2 xl:pb-18">
                <span className="text-base xl:text-lg bg-green-400 px-2 rounded-full">Kabupaten Buton</span>    
              </h1>
            </div>     
            </div>
          </div>

          <div className="xl:block  flex flex-col items-end h-screen gap-2 justify-end sm:justify-normal -mt-20 sm:mt-0 xl:h-fit">
            <img
              className="hidden sm:block rounded-lg h-60 w-full object-cover mt-4 shadow-md shadow-gray-400 sm:h-3/4 sm:object-bottom xl:hidden" src={woke} alt="desasuandala"
            />


            <h1 className=" glass sm:mb-0 xl:mt-6 mb-2 p-5 sm:p-0 xl:p-0 text-3xl font-bold font-dela uppercase sm:text-gray-950 sm:text-2xl xl:text-6xl xl:mb-14 xl:ml-10">Selamat Datang di Website <span className="underline font-bold decoration-green-400">Desa Suandala</span>.
            </h1>

            <a href="#menu">
              <div className="xl:pt-20 xl:pb-10 xl:ml-10">
                <span className="glowing-border bg-gray-50 border border-green-400 font-bold font-poppins  rounded-md shadow-md shadow-green-500 uppercase text-xs py-2 px-4 tracking-wide sm:tracking-widest sm:text-sm hover:cursor-pointer hover:-mt-1 hover:mb-1 xl:inline-block ">
                  Selengkapnya 👇
                </span>
              </div>
            </a>

          </div>
        </div>
        {/* gambar besar muncul ketika ukuran xl */}
        <div className="hidden relative xl:block h-screen">
              <img className="absolute inset-0 w-full h-screen object-cover border rounded-xl" src={woke} alt="desasuandala"/>
        </div>

        </div>
    </div>
  );
}

export default Main;

