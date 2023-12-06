import { datasarana } from "../data/datasarana";

function Sarana() {
  return (
    <>
    <div
      className="py-2 px-2 max-w-sm mx-auto font-poppins bg-gray-100 h-screen sm:max-w-2xl xl:h-fit xl:max-w-full"
      id="sarana"
    >
      <div className="font-dela px-2 flex flex-col xl:max-w-xl mx-auto xl:py-8">
        <h1 className="text-3xl text-center font-bold xl:text-6xl">
          Sarana Desa
        </h1>
      </div>


      <div
        className="flex h-full flex-row justify-center items-end flex-wrap sm:flex-row sm:max-w-2xl sm:flex-wrap sm:justify-around xl:max-w-full xl:py-5"
      >
        {datasarana.map((semangat, key) => {
          return (
            <div
              key={key}
              className="flex flex-col  my-1 bg-white px-2 py-2 text-center border-2 border-gray-200 rounded-l-xl rounded-br-xl shadow-md w-32  sm:w-52 sm:h-fit sm:justify-center xl:w-80 xl:p-4 xl:my-4"
            >
              <div className="flex flex-col justify-end">
                <h1 className="xl:text-2xl">{semangat.logo}</h1>
                <span className="font-bold text-md -mb-2 xl:text-2xl">{semangat.judul}</span>
                <p className="font-bold text-xs xl:text-base mt-2">
                  {semangat.isiquote}
                </p>
              </div>
            </div>
          );
        })}
      </div>


    </div>
  </>
  )
}

export default Sarana