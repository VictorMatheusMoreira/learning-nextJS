import Link from "next/link";
import MenuItem from "./MenuItem";

export default function MenuPrincipal(){

    
    return (
        <aside className=" w-80 bg-zinc-900">
            <nav className=" flex flex-col p-5 gap-3">
                <MenuItem texto="primeiro componente" link="/primeiro" />
                <MenuItem texto="flexbox" link="/flexbox" />

                
            </nav>
        </aside>
    )
}