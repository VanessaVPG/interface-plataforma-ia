'use client'
import { MagicWand, PaperPlaneRight, PlusCircle } from "@phosphor-icons/react";
import { List } from "./components/List";


export default function Home() {
  return (
    <div className="h-screen flex justify-center align-middle items-center">
      <main className="bg-gray-07 p-8 w-[1216px] bg-opacity-80 rounded-[32px] md:p-[60px] mx-auto flex flex-col justify-center items-center">
        <div className="p-4 rounded-2xl bg-gray-06 mb-6 text-gray-03">
          <MagicWand size={40}  />
        </div>
        <h1 className="text-gray-01 text-center font-semibold text-2xl md:text-[2rem]">Experimente o poder da Inteligência Artificial </h1>
        <List />
        <div className="divide divide-y-2 w-full divide-gray-04">
          <div className="mb-8"></div>
          <form className="flex gap-4 items-center w-full pt-8">
            <input type="text" placeholder="Envie uma mensagem ou digite “/” para exibir os comandos " className="p-4 pl-12 relative w-full bg-gray-06 text-gray-01 rounded-2xl border border-gray-04 text-lg placeholder:text-gray-03 placeholder:leading-0" />
            <span className="absolute text-gray-03 p-4 ">
              <PlusCircle size={24} />
            </span>
            <button type="submit" className="p-4 bg-gray-06 rounded-2xl text-gray-01 border border-gray-04 hover:bg-gray-07 hover:text-gray-02 transition-all"><PaperPlaneRight size={32} /> </button>
          </form>
        </div>

      </main>
    </div>
  )
}
