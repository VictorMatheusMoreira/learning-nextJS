import Caixa from "@/components/Caixa";
import Link from "next/link";

export default function Page(){
    return (
        <div className="h-screen">
            <h1>Flexbox</h1>
            <div className="
                    h-full flex justify-around items-start bg-zinc-700 gap-5
             
                     ">
                <Caixa texto="#1" className='w-24' />
                <Caixa texto="#2" className='flex-grow' />
                <Caixa texto="#3" className="w-20" />
                
            </div>
            <Link href="/">Inicio</Link>
        </div>
    )
}