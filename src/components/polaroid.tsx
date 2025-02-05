import { ROUTES } from "@/constants/routes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICard {
    image: StaticImageData,
    text: string
}

export const Polaroid = ({image, text} : ICard) => {
    return (
        <div className="bg-polaroid p-2 pb-8 flex flex-col items-center shadow-xl">
            <Image src={image} alt="imagem" className="object-cover h-72 mb-4 max-w-64" width={5000} height={5000} priority/>
            <div className="max-w-60">
                <h1 className="font-semibold font-fontPolaroid text-center">{text}</h1>
            </div>
        </div>
    )
}