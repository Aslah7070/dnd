import { useState } from 'react'

interface Item {
  id: string
  content: string
}

interface Container {
  id: string
  title: string
  items: Item[]
}

export default function MultipleContainers() {
  const [containers, setContainers] = useState<Container[]>([
    {
      id: 'todo',
      title: 'To Do',
      items: [
        { id: 'task-1', content: 'Research @dnd-kit' },
        { id: 'task-2', content: 'Create basic example' },
        { id: 'task-3', content: 'Write tutorial' },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      items: [{ id: 'task-4', content: 'Record demo video' }],
    },
    {
      id: 'done',
      title: 'Done',
      items: [{ id: 'task-5', content: 'Setup project' }],
    },
  ])
  void setContainers

  return (
    <div className="mx-auto w-full">
      <h2 className="mb-4 text-xl font-bold dark:text-white">Kanban Board</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {containers.map((container) => (
          <div
            key={container.id}
            className="flex h-full min-h-40 flex-col rounded-md border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/50"
          >
            <h3 className="mb-2 font-medium text-gray-700 dark:text-gray-200">
              {container.title}
            </h3>
            <div className="flex-1">
              <ul className="flex flex-col gap-2">
                {container.items.map((item) => (
                  <li
                    key={item.id}
                    className="rounded border bg-white p-3 dark:border-gray-700 dark:bg-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 dark:text-gray-400">
                        ⋮
                      </span>
                      <span className="dark:text-gray-200">{item.content}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {container.items.length === 0 && (
                <div className="flex h-20 items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-800/30">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Drop items here
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
