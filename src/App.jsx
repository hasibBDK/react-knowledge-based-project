
import './App.css'
import { Header} from './Components/Header/header'
import Blogs from './Components/Blogs/blogs'
import Bookmarks from './Components/Bookmarks/bookmarks'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='border border-gray-600 w-10/12 mx-auto flex gap-5'>
        <div className='w-2/3 mx-auto'>
          <Blogs></Blogs>
        </div>
        <div className='w-1/3 mx-auto'>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
