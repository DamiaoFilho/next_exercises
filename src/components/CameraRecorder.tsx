
"use client";
import { Pause, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react"


export default function CameraRecorder(){
    const [stream, setStream] = useState<MediaStream | null>(null)
    const [permission, setPermission] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const recorderChunksRef = useRef<Blob[]>([]);
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState<string|null>(null)



    async function getMediaStream(){
        try{
            const stream = await navigator.mediaDevices.getUserMedia({audio: true, video:true})

            console.log("Stream coletado")
            setPermission(true)
            setStream(stream)
            console.log(permission)
            mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: "video/webm; codecs=vp8",})
            mediaRecorderRef.current.ondataavailable = (e) => {
                if(e.data.size > 0){
                    recorderChunksRef.current.push(e.data)
                }
            }
            mediaRecorderRef.current.onstop = (e) => {
                const blob = new Blob(recorderChunksRef.current, {
                    type: "video/webm; codecs=vp8"
                })
                const url = URL.createObjectURL(blob);
                setVideoUrl(url);
                recorderChunksRef.current = []
            }
        }catch (e:any){
            setPermission(false)
            console.log("Erro ao coletar Stream:", e.message)
        }
    }

    useEffect(() => {
        getMediaStream()

        return () => {
            if (stream){
                stream.getTracks().forEach((track) => track.stop())
                setStream(null)
                setPermission(false)
            }
        }
    }, [])

    useEffect(() => {
        if(videoRef.current && stream){
            videoRef.current.srcObject = stream
        }
    }, [stream])


    const startRecording = () => {
        if(
            mediaRecorderRef.current && mediaRecorderRef.current.state === "inactive"
        ){
            recorderChunksRef.current = []
            mediaRecorderRef.current.start()
            setIsRecording(true)
            console.log(isRecording)
            setVideoUrl(null)
        }
    }

    const stopRecording = () => {
        if(
            mediaRecorderRef.current && mediaRecorderRef.current.state === "recording"
        ){
            mediaRecorderRef.current.stop()
            setIsRecording(false)
        }
    }
 
    return(
            <div className="flex flex-col gap-16 p-10 justify-center items-center">
                <div className="relative">
                    <video className="rounded-md" ref={videoRef} autoPlay playsInline/>
                    {!permission && (
                        <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-md">
                            Sem permissões necessárias para reprodução
                        </span>
                    )}
                    {!isRecording ? (
                        <button
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70 rounded-lg p-4 bg-red-500 hover:opacity-90 transition-opacity"
                            onClick={startRecording}
                        >
                            <Play/>
                        </button>
                    ) : (
                        <button
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70 rounded-lg p-4 bg-red-500 hover:opacity-90 transition-opacity"
                            onClick={stopRecording}
                        >
                            <Pause/>
                        </button>
                    )}
                </div>
                {videoUrl && (
                    <>
                        <video src={videoUrl} controls>

                        </video>
                        <a href={videoUrl} download="video.webm">Baixar vídeo</a>
                    </>
                )}
            </div>
    )
}