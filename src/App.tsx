import CanvasLayout from "./components/CanvasLayout"
import LeftNavigation from "./components/LeftNavigation"
import TopNavigation from "./components/TopNavigation"

function App() {

  return (
    <section className="h-screen w-full grid grid-cols-[50px_1fr] grid-rows-[70px_1fr] bg-dark-background">
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex items-center">
        <TopNavigation />
      </div>

      <div className="col-start-1 col-end-2 row-start-1 row-end-3 max-w-20 flex items-center border-r-white/20 border-r">
        <LeftNavigation />
      </div>


      <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col">
        <CanvasLayout />
      </div>
    </section>
  )
}

export default App
