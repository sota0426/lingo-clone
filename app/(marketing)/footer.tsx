import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer =()=>{
  return(
    <header className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/3_france.png" 
            alt="france"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          France
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/3_italy.png" 
            alt="italy"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          Italy
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/3_spain.png" 
            alt="Spain"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          Spanish 
        </Button>        
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/3_japan.png" 
            alt="japan"
            height="32"
            width="40"
            className="mr-4 rounded-md"
          />
          Japan 
        </Button>
      </div>
    </header>
  )
}