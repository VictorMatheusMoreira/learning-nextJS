import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="
        min-h-screen
        bg-gradient-to-r from-black to-zinc-800
    ">
        <h1 className="font-black">MasterClass Next </h1> 
        <nav className="flex flex-col">                       
          <Link href = "/primeiro">link proxima pagian</Link>
          <Link href="/flexbox">FLexbox</Link>
        </nav>
    </div> 
  );
}
