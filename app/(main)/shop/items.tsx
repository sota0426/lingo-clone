"use client";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { POINTS_TO_REFILL } from "@/constants";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

type Props={
  hearts:number;
  points:number;
  hasActiveSubscription:boolean;
}


export const Items =({
  hearts,
  points,
  hasActiveSubscription
}:Props)=>{
  const [isPending , startTransition] = useTransition();

  const onRefillHearts =()=>{
    if(isPending || hearts ===5 || points < POINTS_TO_REFILL){
      return;
    }
    startTransition(()=>{
      refillHearts()
        .catch(()=>toast.error("Something went wrong"))
    })
  }

  const onUpgrade =()=>{
    startTransition(()=>{
      createStripeUrl()
        .then((response) =>{
          if(response.data){
            window.location.href = response.data
          }
        })
        .catch(()=>toast.error("Something went wrong"))

    })
  }



  return(
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image 
          src="/heart.png"
          alt="Hearts"
          width={60}
          height={60}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill hearts
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={isPending || hearts=== 5  || points < POINTS_TO_REFILL}
        >
          {hearts === 5 
          ? "full"
          : (
            <div className="flex items-center">
              <Image
                src="/points.png"
                alt="Points"
                width={20}
                height={20}
                className="mr-2"
              />
              <p>
                {POINTS_TO_REFILL}
              </p>
            </div>
          )}
        </Button>
      </div>
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image 
          src="/unlimited.webp"
          alt="unlimited"
          width={60}
          height={60}
        />
        <div className="flex-1">
        <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Unlimited hearts
          </p>
        </div>
        <Button
          onClick={onUpgrade}
          disabled={isPending}
        >
          {hasActiveSubscription ? "setting" :"upgrade"} 
        </Button>
      </div>
    </ul>
  )
}