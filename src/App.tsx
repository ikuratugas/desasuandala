import Foo from "./pages/foo"
import Geografi from "./pages/geografi"
import Main from "./pages/main"

import Menu from "./pages/menu"
import Sarana from "./pages/sarana"
import Sejarah from "./pages/sejarah"

function App() {
  return (
    <>
    <div className="bg-gray-100">
      <Main />

      <Menu />

      <Sejarah />

      <Sarana />

      <Geografi />

      <Foo />
    </div>
    </>
  )
}

export default App
