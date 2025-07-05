



export default function ProgressBar({ progress }:{ progress : number}){
    return(
        <div className="absolute bottom-6">
            <div className="rounded-md bg-white w-xl h-2 overflow-hidden">
                <div className="rounded-md bg-green-900 transition-all h-2" style={{
                    width: `${progress}%`
                }}></div>
            </div>
        </div>
    )
}