import '../styles/glow.css';

function Menu() {
  return (
    <>
    <div className='p-4 font-poppins h-screen flex flex-col justify-around sm:max-w-2xl mx-auto xl:max-w-full' id='menu'>

      <h1 className="text-3xl pb-5 xl:pb-0 font-dela text-center font-bold xl:text-6xl">Info Yang Tersedia</h1>

    
      <div className='hover:cursor-pointer glowing-border border-4 rounded-lg my-2 bg-gradient-to-r from-green-50 via-green-50 to-green-100  hover:bg-gradient-to-r hover:from-green-50 hover:via-green-100 hover:to-green-200'>
        <a href="#sejarah">
            <div className="flex flex-col h-full col-span-1 xl:col-auto xl:w-1/2">
                <div className="flex flex-col justify-center p-4">
                  <h5 className="text-2xl font-bold"><span className='text-6xl'>1.</span>Sejarah Desa</h5>
                  <p></p>
                </div>
                <h1 className="w-full h-1/2 object-cover text-5xl">📚</h1>
            </div>
        </a>
      </div>

      <div className='hover:cursor-pointer glowing-border border-4 rounded-lg my-2 bg-gradient-to-r from-green-50 via-green-50 to-green-100 hover:bg-gradient-to-r hover:from-green-50 hover:via-green-100 hover:to-green-200'>
        <a href="#sarana">
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-center p-4">
            <h5 className="text-2xl font-bold"><span className='text-6xl'>2.</span>Sarana Desa</h5>
            <p></p>
          </div>
          <h1 className="w-full h-1/2 object-cover text-5xl">🏡</h1>
        </div>
        </a>
      </div>
      

      <div className='hover:cursor-pointer glowing-border border-4 rounded-lg my-2 bg-gradient-to-r from-green-50 via-green-50 to-green-100 hover:bg-gradient-to-r hover:from-green-50 hover:via-green-100 hover:to-green-200'>
        <a href="#geografi">
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-center p-4">
            <h5 className="text-2xl font-bold"><span className='text-6xl'>3.</span>Geografi Desa</h5>
            <p></p>
          </div>
          <h1 className="w-full h-1/2 object-cover text-5xl">🌍</h1>
        </div>
        </a>
      </div>



    </div>
    </>
  )
}


export default Menu;