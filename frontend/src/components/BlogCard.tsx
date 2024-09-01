
interface BlogCardPropsType{
    authorName: string;
    publishedDate: string;
    title: string;
    content: string
}


export const BlogCard = ({
    authorName,
    publishedDate,
    title,
    content
}:BlogCardPropsType) =>{
    return <div className="border-b border-slate-200 pb-4 p-4"> 
      <div className="flex">
       <div className="flex justify-center flex-col">
       <Avatar name={authorName}/> 
       </div> 
       <div className=" font-extralight pl-1 text-sm">
       {authorName} ・
       </div> 
       
       <div className="pl-1 font-thin text-slate-500 text-sm">
       {publishedDate}
       </div>
       </div>
      <div className="text-xl font-semibold pt-2">
        {title}
      </div>

      <div className="text-md font-light text-gray-500">
        {content.length > 100 ?content.slice(0,100)+"...": content}
      </div>

      <div className="text-sm font-thin text-slate-500 pt-1">
        {`${Math.ceil(content.length/100)} minute(s) read`}
      </div>

    </div>
}

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500">

  </div>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
  return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
  <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
      {name[0]}
  </span>
</div>
}