import StateAndInput from './components/0.1.StateAndInput';
import ManyInputs from './components/0.2.ManyInputs';
import FormSubmit from './components/0.3.FormSubmit';
import BasicValidation from './components/0.4.BasicValidation';

function App() {
  return (
    <div className='container'>
      <StateAndInput />
      <ManyInputs />
      <FormSubmit />
      <BasicValidation />
    </div>
  );
}

export default App;
