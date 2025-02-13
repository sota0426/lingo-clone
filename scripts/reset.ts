import "dotenv/config";

import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from "@/db/schema";

const db = drizzle(process.env.DATABASE_URL! , {schema}); 

const main = async()=>{
  try{
    console.log("resetting database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);
    

    console.log("resetting finished")
  }catch(error){
    console.error(error);
    throw new Error("Failed to seed the database")
  }

};

main();
