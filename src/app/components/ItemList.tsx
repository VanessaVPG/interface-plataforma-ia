import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { ReactElement, ReactSVGElement } from "react";

interface ItemListProps {
  itemText: string;
  icon: ReactElement<ReactSVGElement>;
}

export function ItemList({ itemText, icon }: ItemListProps) {
  return (
    <li className="text-gray-03 flex justify-between items-center p-4 mb-2 bg-gray-06 rounded-2xl w-full border border-gray-04 hover:bg-gray-07 hover:border-white transition-all">
      <div className="flex gap-10 items-center">
        <div className="p-4 border rounded-2xl border-solid border-gray-05 ">
          {icon}
        </div>
        <span className="text-lg text-gray-02">{itemText}</span>
      </div>
      <Link href={'#'}>
        <ArrowRight size={32} className="" />
      </Link>
    </li>
  )
}