import { type ReactNode, useState } from 'react'
import { useThemeContext } from '@/theme/ThemeProvider'
import { FiSun, FiMoon, FiYoutube, FiGithub } from 'react-icons/fi'
import BasicDragDrop from '@/examples/01BasicDragDrop'
import SortableList from '@/examples/02SortableList'
import Kanban from '@/examples/03Kanban'

function DndKitDemo() {
  const [activeTab, setActiveTab] = useState<'basic' | 'sortable' | 'multiple'>(
    'basic',
  )

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">@dnd-kit Examples</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore different drag and drop patterns with @dnd-kit and React
        </p>
      </div>

      <div className="mb-6">
        <div className="flex border-b dark:border-gray-700">
          <button
            className={`px-4 py-2 ${
              activeTab === 'basic'
                ? 'border-b-2 border-blue-500 font-medium text-blue-600 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('basic')}
          >
            Basic Drag & Drop
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'sortable'
                ? 'border-b-2 border-blue-500 font-medium text-blue-600 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('sortable')}
          >
            Sortable List
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'multiple'
                ? 'border-b-2 border-blue-500 font-medium text-blue-600 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('multiple')}
          >
            Multiple Containers
          </button>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        {activeTab === 'basic' && (
          <div>
            <h2 className="mb-4 text-xl font-bold dark:text-white">
              Basic Drag & Drop
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              A simple example of dragging an item to a drop area. This
              demonstrates the core functionality of @dnd-kit.
            </p>
            <BasicDragDrop />
          </div>
        )}

        {activeTab === 'sortable' && (
          <div>
            <h2 className="mb-4 text-xl font-bold dark:text-white">
              Sortable List
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              A list where items can be reordered by dragging. Uses the
              @dnd-kit/sortable extension to enable intuitive sorting.
            </p>
            <SortableList />
          </div>
        )}

        {activeTab === 'multiple' && (
          <div>
            <h2 className="mb-4 text-xl font-bold dark:text-white">
              Multiple Containers
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              A Kanban-style board where items can be dragged between containers
              and sorted within each container.
            </p>
            <Kanban />
          </div>
        )}
      </div>
    </div>
  )
}

function App(): ReactNode {
  const { isDarkMode, toggleDarkMode } = useThemeContext()

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <header className="sticky top-0 z-10 bg-white shadow-sm dark:border-b dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src="/m6.svg"
              alt="M6 Logo"
              className="h-8 w-auto"
              aria-hidden="true"
            ></img>
            <span className="font-bold text-gray-900 dark:text-white">
              m6io
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/@m6io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none active:bg-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
              aria-label="Visit m6io on YouTube"
            >
              <FiYoutube className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/m6io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none active:bg-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
              aria-label="Visit m6io on GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <span className="h-6 w-px bg-gray-300 dark:bg-gray-700"></span>
            <button
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none active:bg-gray-400 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <FiSun aria-hidden="true" />
              ) : (
                <FiMoon aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow px-4 py-6 sm:p-8">
        <div className="mx-auto max-w-4xl">
          <DndKitDemo />
        </div>
      </main>
    </div>
  )
}

export default App
