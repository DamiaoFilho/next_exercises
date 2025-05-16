import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] w-full items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Pagina Inicial</h1>
      <li className="flex flex-row items-center justify-center gap-8">
          <ul className="text-white"><Link href={"/products/1"}>Produto 1</Link></ul>
          <ul className="text-white"><Link href={"/products/2"}>Produto 2</Link></ul>
      </li>
    </main>
  );
}
