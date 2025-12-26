import Bookmark from "../Bookmark/bookmark"
const Bookmarks = ({bookmarks,readingTime})=>{
    return(

        <div>
            <div className="bg-[#6047EC]/20 rounded-xl flex justify-center items-center">
                <h3 className="lg:font-bold lg:text-xl p-5 ">Sepd time on reading : {readingTime} </h3>
            </div>

            <div className=" bg-slate-200 rounded-xl p-4 items-center mt-4">
            
            <h1 className="font-bold lg:text-xl">Bookmarked Blogs : {bookmarks.length}</h1>{
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
         </div>
            
        </div>
        
        
    )
        

    
}

export default Bookmarks