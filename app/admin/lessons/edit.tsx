import { Edit ,  SimpleForm, required, TextInput, ReferenceInput, NumberInput} from "react-admin";

export const lessonEdit =()=>{
  return(
    <Edit>
      <SimpleForm>
        <TextInput 
          source="title" 
          validate={[required()]} 
          label="Title" 
        />
        <ReferenceInput 
          source="unitId"
          reference="units"
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