export default function Logo(){
    return (
        <div className="flex  gap-3 ">
           <div className=" flex gap-1">
                <span className=" h-7 w-7 bg-red-500 rounded-full "> </span>
                <span className=" h-7 w-7 bg-green-500 rounded-full"></span>
                <span className=" h-7 w-7 bg-blue-500 rounded-full"></span>
           </div>
            <span className=" font-black">AppJS</span>
        </div>
    )
}