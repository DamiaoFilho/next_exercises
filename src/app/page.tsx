import Image from "next/image";
import Video from "./components/video";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-[50%] h-[50%]">
        <Video />
      </div>
    </main>
  );
}
