import "dotenv/config";

import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL! , {schema}); 

const main = async()=>{
  try{
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

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

    ])

    console.log("Seeding finished")
  }catch(error){
    console.error(error);
    throw new Error("Failed to seed the database")
  }

};

main();
