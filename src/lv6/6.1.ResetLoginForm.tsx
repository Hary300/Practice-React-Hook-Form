import { useForm } from 'react-hook-form';

type LoginFormData = {
  email: string;
  password: string;
};

export default function ResetLoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: 'test@gmail.com',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Registered successfully');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 6.1 Reset Login Form</h2>
      <input
        type='email'
        placeholder='Email'
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'invalid email format',
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

      <div className='flex gap-4'>
        <button type='button' onClick={() => reset()}>
          Reset All
        </button>
        <button type='button' onClick={() => resetField('password')}>
          Reset Password
        </button>
      </div>
      <button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
}
