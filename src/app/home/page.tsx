"use client"
import Image from "next/image";
import fotinho from "../../../public/foto1.jpg";
import { Polaroid } from "@/components/polaroid";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="bg-[url('/hearts.gif')] bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center md:p-2 p-2">
        <div className="bg-background flex items-center gap-8 justify-center p-1 py-10 rounded-md flex-col-reverse w-96 shadow-2xl">
          <div className="bg-pink p-2 rounded flex flex-col max-w-80">
            <h1 className="text-font text-center font-semibold">Bem vindo ao quiz de aniversário de namoro!</h1>
            <button onClick={() => router.push('/quiz')} className="bg-button text-font shadow-lg hover:bg-buttonHover transition-colors duration-300 rounded">Começar</button>
          </div>
          <div>
            <Polaroid image={fotinho} text="Quiz de aniversário de namoro!"></Polaroid>
          </div>

        </div>
      </div>
    </>
  );
}
