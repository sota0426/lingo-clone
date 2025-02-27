import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react";
import { useAudio , useKey} from "react-use";

type Props={
  id:number;
  text:string;
  imageSrc:string | null;
  shortcut:string;
  selected?:boolean;
  onClick:()=>void;
  status?: "correct" | "wrong" | "none";
  audioSrc : string | null;
  disabled:boolean;
  type:typeof challenges.$inferSelect["type"];
}

export const Card =({
  id,
  text,
  imageSrc,
  shortcut,
  selected,
  onClick,
  status,
  audioSrc,
  disabled,
  type
}:Props)=>{
  const [audio , _ , controls] = useAudio({src : audioSrc || ""})

  const handleClick = useCallback(()=>{
    if(disabled) return;

    controls.play();
    onClick();    
  },[disabled , onClick , controls])

  useKey(shortcut , handleClick , {} , [handleClick]);


  return (
    <div 
      onClick={handleClick}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
        selected && "text-sky-500 bg-sky-100 border-sky-300",
        selected && status==="correct" && "border-green-300 bg-green-100 hover:bg-sky-100",
        selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-sky-100",
        disabled && "pointer-events-none hover:bg-white",
        type ==="ASSIST" && "lg:p-3 w-full"
      )}
      > 
      {audio}
      {imageSrc && (
        <div className="relative aspect-square mb-4 mx-h-[80px] lg:max-h-[150px] w-full">
          <Image 
            src={imageSrc}
            alt={text}
            fill
          />
        </div>
      )}
      <div className={cn(
        "flex items-center justify-between",
        type === "ASSIST" && "flex-row-reverse",
      )}>
        <p className={cn(
          "text-neutral-600 text-sm lg:text-base",
          selected && "text-sky-500 border-sky-300 ",
          selected && status==="correct" && "border-green-500 text-green-500",
          selected && status === "wrong" && "border-rose-500 text-rose-500",
        )}>
          {text}
        </p>
        <div className={cn(
          "lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font-semibold"
        )}>
          {shortcut}
        </div>

      </div>
    </div>
  )
}