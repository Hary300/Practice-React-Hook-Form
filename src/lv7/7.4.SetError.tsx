import { useForm } from 'react-hook-form';

type EmailInputFormData = {
  email: string;
};

export default function SetError() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<EmailInputFormData>();

  const onSubmit = async (data: EmailInputFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Submitted successfully');
    reset();
  };

  const handleSetErrorClick = (input: keyof EmailInputFormData) => {
    setError(input, {
      type: 'manual',
      message: 'Email already exists',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 7.4 setError()</h2>
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

      <button type='button' onClick={() => handleSetErrorClick('email')}>
        Simulate API Error
      </button>
      <button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}
