
import './App.css'
import { Header} from './Components/Header/header'
import Blogs from './Components/Blogs/blogs'
import Bookmarks from './Components/Bookmarks/bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handlereadingTime = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  

  return (
    <>
      <Header></Header>
      <div className='w-10/12 mx-auto flex gap-5 '>
        <div className='w-2/3 mx-auto'>
          <Blogs handleBookmark={handleBookmark} handlereadingTime={handlereadingTime}></Blogs>
        </div>
        <div className='w-1/3 mx-auto mt-3'>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
