import Link from "next/link";

export default function Primeiro(){

    const titulo = (
        <h1>tirulo com variavel</h1>
    )

    function gerarLista(){
        return (
            <ul className="pl-12 list-disc">
                <li>pao</li>
                <li>golden</li>
                <li>pedro jorge</li>
            </ul>
        )
    }
    return (
        <div>
            <h1>Primeiro</h1>
            {titulo}
            <div className="flex flex-col">
                <span>soma de 1 + 1 : {1+1}</span>
                <h1>{gerarLista()}</h1>
             </div>
                <nav>
                <Link href="/">Inicio</Link>
             </nav>
        </div>
    )
}