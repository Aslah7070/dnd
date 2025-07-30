import React, { useState } from 'react'
import { DndContext,closestCenter,useSensors,useSensor,PointerSensor,KeyboardSensor, DragEndEvent } from '@dnd-kit/core'
import {arrayMove, SortableContext,useSortable,verticalListSortingStrategy,sortableKeyboardCoordinates} from "@dnd-kit/sortable"
interface Item {
  id: string
  content: string
}


function SortableListing  ({id,content}:{id:string,content:string}){

 const {attributes,listeners,setNodeRef,transform,isDragging}= useSortable({id})
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
    <li
          style={style} 
          {...attributes}
          {...listeners}
          ref={setNodeRef} 
            className={` cursor-grab active:cursor-grabbing ${isDragging?"z-10 opacity-50 shadow:md":"bg-white"} rounded-md border bg-white p-3 dark:border-gray-700 dark:bg-gray-800`}
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-500 dark:text-gray-400">⋮⋮</span>
              <span className="dark:text-gray-200">{content}</span>
            </div>
          </li>
  )
}

export default function SortableList() {

  const sensor=useSensors(
    useSensor(PointerSensor,{
      activationConstraint:{
        distance:8
      }
    }),
    useSensor(
      KeyboardSensor,{
        coordinateGetter:sortableKeyboardCoordinates
      }
    )
  )
  const [items, setItems] = useState<Item[]>([
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
    { id: '4', content: 'Item 4' },
    { id: '5', content: 'Item 5' },
  ])
  void setItems

  function handleDragEnd(event:DragEndEvent){
    const {over,active}=event
    if(over&&active.id!==over.id){
      setItems((item)=>{
        const oldest=item.findIndex((item)=>item.id===active.id)
        const newst=item.findIndex((item)=>item.id===over.id)
        return arrayMove(item,oldest,newst)
      })
    }
 console.log("object",event)
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-lg border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-bold dark:text-white">Sortable List</h2>
      <DndContext
      sensors={sensor}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      >
        <SortableContext
        items={items.map((item)=>item.id)}
        strategy={verticalListSortingStrategy}
        >

        
      <ul className="space-y-2">
        {items.map((item) => (
         <SortableListing key={item.id}id={item.id}content={item.content} />
        ))}
      </ul>
      </SortableContext>
      </DndContext>
    </div>
  )
}
