import { useForm } from 'react-hook-form';

type EmailInputFormData = {
  email: string;
};

export default function Trigger() {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<EmailInputFormData>();

  const onSubmit = async (data: EmailInputFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('submitted successfully');
    reset();
  };

  const handleTriggerClick = async (input: keyof EmailInputFormData) => {
    const result = await trigger(input);
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 7.3 triger()</h2>
      <input
        type='email'
        placeholder='Email'
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email format',
          },
        })}
      />
      {errors.email && <p className='error-text'>{errors.email.message}</p>}

      <button type='button' onClick={() => handleTriggerClick('email')}>
        Validate Email
      </button>
      <button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}
