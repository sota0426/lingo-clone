import { Button } from "@/components/ui/button";

const page=()=>{

  return(
    <div className="p-4 flex flex-col space-y-4 max-w-[200px]">
      <Button variant="default">Primary</Button>
      <Button variant="primary">Primary outline</Button>
      <Button variant="primaryOutline">Primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondaryOutline">secondary outline</Button>
      <Button variant="danger">secondary</Button>
      <Button variant="dangerOutline">secondary outline</Button>    
      <Button variant="super">secondary</Button>
      <Button variant="superOutline">secondary outline</Button>    
      <Button variant="ghost">secondary</Button>
      <Button variant="sidebar">secondary</Button>
      <Button variant="sidebarOutline">secondary outline</Button>    
       
    </div>
  )
}

export default page;