import Canvas from "./Canvas";
import CanvasLeft from "./CanvasLeft";
import CanvasRight from "./CanvasRight";

export default function CanvasLayout() {
  return (
    <div className="size-full p-2 gap-4 overflow-hidden grid grid-cols-[minmax(200px,_250px)_1fr_minmax(200px,_250px)]">
      <CanvasLeft />
      <Canvas />
      <CanvasRight />
    </div>
  )
}
