import { useForm } from 'react-hook-form';

type LoginFormData = {
  email: string;
  password: string;
};
export default function FormState() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<LoginFormData>({ mode: 'onChange' });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('submitted successfully');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 5 Form State</h2>
      <input
        type='email'
        placeholder='Email'
        {...register('email', {
          required: 'email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email format',
          },
        })}
      />
      {errors.email && <p className='error-text'>{errors.email.message}</p>}

      <input
        type='password'
        placeholder='Password'
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        })}
      />
      {errors.password && (
        <p className='error-text'>{errors.password.message}</p>
      )}
      <button type='submit' disabled={!isDirty || !isValid || isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}
