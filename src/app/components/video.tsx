

export default function Video(){

    return (
        <video className="rounded-2xl" width="100%" height="100%" controls>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
}