"use server";

import db from "@/db";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect  } from "next/navigation";

export const upsertUserProgress = async( courseId : number )=>{
  const {userId}=await auth();
  const user = await currentUser();

  if(!userId || !user){
    throw new Error("Unauthorized");
  };

  const course = await getCourseById(courseId);

  if(!course){

    throw new Error("Course not found");
  }

  //TODO:Enable once units and lessons are added

  const existingUserProgress = await getUserProgress();

  if(existingUserProgress){

    await db.update(userProgress).set({
      activeCourseId:courseId,
      userName:user.firstName || "User",
      userImageSrc:user.imageUrl || "/1_mascot.jpg"
    })

    revalidatePath("/courses");
    revalidatePath("/learn")
   redirect("/learn")    
  }

  console.log(5)

  await db.insert(userProgress).values({
    userId,
    activeCourseId:courseId,
    userName:user.firstName || "User",
    userImageSrc:user.imageUrl || "/1_mascot.png",
  });

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
}