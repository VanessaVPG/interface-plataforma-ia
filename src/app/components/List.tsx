import { ItemList } from "./ItemList";
import { Code, ImageSquare, PlayCircle, MusicNoteSimple } from "@phosphor-icons/react";

export function List() {
  return (
    <ul className="mt-10 md:w-1/2">
      <ItemList itemText="Gerador de códigos" icon={<Code size={32} />} />
      <ItemList itemText="Edição de foto" icon={<ImageSquare size={32} />} />
      <ItemList itemText="Geração de vídeos" icon={<PlayCircle size={32} />} />
      <ItemList itemText="Criador de áudios e músicas" icon={<MusicNoteSimple size={32} />} />
    </ul>
  );
}
