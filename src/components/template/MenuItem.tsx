import Link from "next/link"

export default function menuItem(props: any){
    return(
        <Link href = {props.link} className=" hover:bg-blue-500 px-4 py-2 rounded-md">
                    {props.texto}
                </Link>
    )
}