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
import {
  MaxLength,
  MinLength,
  Pattern,
  RequiredValidation,
  Validate,
} from './lv3';
import { CrossFieldValidation } from './lv4';

function App() {
  return (
    <div className='container'>
      {/* Level 0 */}
      <StateAndInput />
      <ManyInputs />
      <FormSubmit />
      <BasicValidation />
      <ObjectStateForm />
      <ConfirmPassword />
      <DynamicSkills />

      {/* Level 2 */}
      <SimpleRegisterForm />
      <LoginForm />

      {/* Level 3 */}
      <RequiredValidation />
      <MinLength />
      <MaxLength />
      <Pattern />
      <Validate />

      {/* Level 4 */}
      <CrossFieldValidation />
    </div>
  );
}

export default App;
