"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, SeparatorHorizontal } from "lucide-react";
import ProgressBar from "./progressBar";
import { time } from "console";

export default function Video(){
    const videoRef = useRef<HTMLVideoElement>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>();
    
    const formatTimeWithHours = (timeInSeconds: number): string => {
        if (isNaN(timeInSeconds)) return "0:00:00";
        
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = Math.floor(timeInSeconds % 60);

        if (hours === 0) {
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const video = videoRef.current
        if (!video) return;
        const handleLoadedMetadata = () => {
            setDuration(video.duration);
        };
        
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        
        if (video.readyState >= 1) {
            setDuration(video.duration);
        }
        
        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [])

    const handlePause = () => {
        const video = videoRef.current;
        if (!video) return;

        if(video.paused) {
            video.play();
            setVisible(false);
        }else{
            setVisible(true)
            video.pause();
        }
    }

    const toogleButtons = async () => {
        setVisible(!visible)
    }

    const handlePlay = () => {
        setIsPlaying(true);
    }

    const handlePauseEvent = () => {
        setIsPlaying(false);
    }

    const timeUpdate = () => {
        const video = videoRef.current
        if (!video) return;
        setCurrentTime(video.currentTime)
        setProgress((video.currentTime/video.duration) * 100)
    }

    return (
        <>
            <div 
                onMouseEnter={toogleButtons} 
                onMouseLeave={toogleButtons} 
                className="relative flex flex-col items-center justify-center w-full h-full"
            >
                    {visible && <>
                        <button
                            onClick={handlePause}
                            className="absolute z-10 opacity-60 bg-green-900 rounded-[100%] p-4"
                        >
                        {isPlaying ? <Pause></Pause> : <Play></Play>}
                        </button>
                        <span className="absolute bottom-10 left-50 text-white bg-black px-2 rounded">
                            {formatTimeWithHours(currentTime)} / {formatTimeWithHours(duration || 0)}
                        </span>
                        <ProgressBar progress={progress}></ProgressBar>
                    </>}
                <video
                    ref={videoRef}
                    className="rounded-2xl"
                    width="100%"
                    height="100%"
                    style={{ pointerEvents: visible ? "none" : "auto" }}
                    onPlay={handlePlay}
                    onPause={handlePauseEvent}
                    onTimeUpdate={timeUpdate}
                >
                    <source src="/videos/garen.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}