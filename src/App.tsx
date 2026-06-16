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
import { FormState } from './lv5';
import { RegisterForm, ResetLoginForm } from './lv6';
import { GetValues, SetError, SetValue, Trigger } from './lv7';

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

      {/* Level 5 */}
      <FormState />

      {/* Level 6 */}
      <ResetLoginForm />
      <RegisterForm />

      {/* Level 7 */}
      <SetValue />
      <GetValues />
      <Trigger />
      <SetError />
    </div>
  );
}

export default App;
