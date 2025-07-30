
import {DndContext,DragEndEvent,pointerWithin,useDraggable,useDroppable} from "@dnd-kit/core"
import { useState } from "react";

function Droppable({children}:{children:React.ReactNode}){
  const {isOver,setNodeRef}=useDroppable({
    id:"droppable"
  })
  return(
  <div
  ref={setNodeRef}
  className={`flex h-40 w-40 items-center justify-center rounded-md border-2 border-dashed border-gray-400
  ${isOver?'border-blue-800 bg-blue-200':"border-gray-500"}
  `}>
        {children||<span className="text-gray-500 dark:text-gray-400">Drop here</span>}
      </div>
  )
}

function Draggable(){
  const {attributes,listeners,setNodeRef,transform }=useDraggable({
  id:"draggable"
})
const style:React.CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        position: "relative", 
        touchAction: "none",
        
      }
    : {
        position: "relative",
        touchAction: "none",
       
      };
  return(
 <div 
 ref={setNodeRef}
 style={style}
 className="h-24 w-24 cursor-grab active:cursor-grabbing  rounded-md bg-blue-500 p-4 text-white"
 {...listeners}
 {...attributes}
 >

        Drag me
      </div>
  )
}






export default function BasicDragDrop() {
const [isDropped,setIsDropped]=useState(false)
  const handleDragEnd=(event:DragEndEvent)=>{
    if(event.over&&event.over.id==="droppable"){
         setIsDropped(true)
    }else{
      setIsDropped(false)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}
    collisionDetection={pointerWithin}
    >
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">

      {!isDropped&& <Draggable/>}
<Droppable>{isDropped&&<Draggable/>}</Droppable>
  
    </div>
    </DndContext>
  )
}
