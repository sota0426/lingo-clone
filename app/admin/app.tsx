"use client"
import {Admin, Resource} from "react-admin";
import simpleRestProvide from "ra-data-simple-rest";

import { CourseList } from "./courses/list";
import { CourseCreate } from "./courses/create";
import { CourseEdit } from "./courses/edit";

import { UnitList } from "./units/list";
import { UnitCreate } from "./units/create";
import { UnitEdit } from "./units/edit";

import { LessonList } from "./lessons/list";
import { lessonCreate } from "./lessons/create";
import { lessonEdit } from "./lessons/edit";

import { ChallengeList } from "./challenge/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";

import { ChallengeOptionList } from "./challengeOptions/list";
import { ChallengeOptionCreate } from "./challengeOptions/create";
import { ChallengeOptionEdit } from "./challengeOptions/edit";

const dataProvider = simpleRestProvide("/api")

const App =()=>{
  return(
  <Admin dataProvider={dataProvider}>
    <Resource 
      name="courses"
      list={CourseList}
      create={CourseCreate}
      edit={CourseEdit}
      recordRepresentation="title"
    />

    <Resource 
      name="units"
      list={UnitList}
      create={UnitCreate}
      edit={UnitEdit}
      recordRepresentation="title"
    />

    <Resource 
      name="lessons"
      list={LessonList}
      create={lessonCreate}
      edit={lessonEdit}
      recordRepresentation="title"
    />


    <Resource 
      name="challenges"
      list={ChallengeList}
      create={ChallengeCreate}
      edit={ChallengeEdit}
      recordRepresentation="question"
    />


    <Resource 
      name="challengeOptions"
      list={ChallengeOptionList}
      create={ChallengeOptionCreate}
      edit={ChallengeOptionEdit}
      recordRepresentation="text"
      options={{label:"Challenge Options"}}
    />


  </Admin>
)}


export default App;
