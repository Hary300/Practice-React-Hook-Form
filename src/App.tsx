import {
  StateAndInput,
  ManyInputs,
  FormSubmit,
  BasicValidation,
  ObjectStateForm,
  ConfirmPassword,
  DynamicSkills,
} from './lv0';
import { SimpleRegisterForm } from './lv2';

function App() {
  return (
    <div className='container'>
      <StateAndInput />
      <ManyInputs />
      <FormSubmit />
      <BasicValidation />
      <ObjectStateForm />
      <ConfirmPassword />
      <DynamicSkills />
      <SimpleRegisterForm />
    </div>
  );
}

export default App;
