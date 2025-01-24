import { Menu } from "lucide-react"
import { Sidebar } from "./sidebar"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"



export const MobileSidebar=()=>{
  return(
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white"/>
      </SheetTrigger>
      <SheetTitle>
        <SheetContent className="p-0 z-[100]" side="left">
          <Sidebar />
        </SheetContent>
      </SheetTitle>
    </Sheet>
  )
}