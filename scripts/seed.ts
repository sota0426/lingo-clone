import "dotenv/config";

import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL! , {schema}); 

const main = async()=>{
  try{
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    

    await db.insert(schema.courses).values([
      {
        id:1,
        title:"spanish",
        imageSrc:"/es.png"
      },
      {
        id:2,
        title:"italian",
        imageSrc:"/it.png"
      },
      {
        id:3,
        title:"japan",
        imageSrc:"/jp.png"
      },
    ]);

    await db.insert(schema.units).values([
      {
        id:1,
        courseId:1,
        title:"Unit 1",
        description:"Learn the basics of Spanish",
        order:1,  
      },
      {
        id:2,
        courseId:2,
        title:"Unit 1",
        description:"Learn the basics of Spanish",
        order:1,  
      },
      {
        id:3,
        courseId:3,
        title:"Unit 1",
        description:"Learn the basics of Spanish",
        order:1,  
      }
    ])

    await db.insert(schema.lessons).values([
      {
        id:1,
        unitId:1,
        order:1,
        title:"Nouns",
      },
      {
        id:2,
        unitId:1,
        order:2,
        title:"Verbs",
      },
      {
        id:3,
        unitId:1,
        order:2,
        title:"Verbs",
      },
      {
        id:4,
        unitId:1,
        order:2,
        title:"Verbs",
      },
      {
        id:5,
        unitId:1,
        order:2,
        title:"Verbs",
      },

    ])

    await db.insert(schema.challenges).values([
      {
        id:1,
        lessonId:1,
        type:"SELECT",
        order:1,
        question:"Which one of these is the 'the man' ? "
      }
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id:1,
        challengeId:1,
        imageSrc:"/man.png",
        correct:true,
        text:"who is he?",
        audioSrc:"/man.mp3"
      },
      {
        id:2,
        challengeId:1,
        imageSrc:"/man.png",
        correct:false,
        text:"who is he?",
        audioSrc:"/man.mp3"
      },
    ])


    console.log("Seeding finished")
  }catch(error){
    console.error(error);
    throw new Error("Failed to seed the database")
  }

};

main();
