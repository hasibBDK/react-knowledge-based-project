
const Blog = ({blog,handleBookmark,handlereadingTime}) => {
    const {title,coverImage,author,publishedDate,readTime,tags,isRead} = blog;
      const{name,avatar} = author;
      const[tag1,tag2] = tags;
    
    
    return (
        <div className="py-3 border-b-2">
            <img className="border rounded-md w-full h-96" src={coverImage} alt="" />
            <div className="py-2 flex justify-between items-center">
                <div className="flex gap-4">
                        <img className="w-10 h-10 border rounded-full" src={avatar} alt="" />
                    <div>
                        <h2 className="font-bold lg:text-xl text-sm">{name}</h2>
                        <h5 className="text-gray-500 text-sm">{publishedDate}</h5>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <h5>{readTime} min read</h5>
                    <button onClick={()=>handleBookmark(blog)}><img className="w-8 h-8" src="https://img.icons8.com/?size=48&id=ADJNqbZj2z0G&format=gif&color=f7f7f7" alt="bookmark" /></button>
                </div>
                
            </div>
            <h1 className="lg:text-3xl text-xl font-bold w-2/3">{title}</h1>
            <div className="flex gap-3 text-gray-600 py-2">
                <h3>#{tag1}</h3>
                 <h3>#{tag2}</h3>
            </div>
            <button onClick={()=>handlereadingTime(readTime)} className="text-purple-600 underline font-bold">Mark as read</button>
            


            
        </div>
    )
}

export default Blog