import { Edit,SimpleForm, required, TextInput, ReferenceInput, NumberInput, SelectInput} from "react-admin";

export const ChallengeEdit =()=>{
  return(
    <Edit>
      <SimpleForm>
        <TextInput 
          source="question" 
          validate={[required()]} 
          label="Question" 
        />

        <SelectInput 
          source="type"
          choices={[
            {
              id:"SELECT",
              name:"SELECT"
            },
            {
              id:"ASSIST",
              name:"ASSIST"
            }
          ]}
          validate={[required()]} 
          optionText="name"
          />
        <ReferenceInput 
          source="lessonId"
          reference="lessons"
        />        
        <NumberInput 
          source="order"
          validate={[required()]}
          label="Order"
        />
      </SimpleForm>
    </Edit>
  )
}