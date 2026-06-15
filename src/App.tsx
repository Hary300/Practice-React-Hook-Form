import {
  StateAndInput,
  ManyInputs,
  FormSubmit,
  BasicValidation,
  ObjectStateForm,
  ConfirmPassword,
  DynamicSkills,
} from './lv0';
import { LoginForm, SimpleRegisterForm } from './lv2';

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
      <LoginForm />
    </div>
  );
}

export default App;
