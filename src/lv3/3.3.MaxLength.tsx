import { useForm } from 'react-hook-form';

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
};

export default function MaxLength() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 3.3 maxLength()</h2>
      <input
        type='text'
        placeholder='Username'
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
          maxLength: {
            value: 10,
            message: 'Username cannot exceed 10 characters',
          },
        })}
      />
      {errors.username && (
        <p className='error-text'>{errors.username.message}</p>
      )}

      <input
        type='email'
        placeholder='Email'
        {...register('email', {
          required: 'Email is required',
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
      <button type='submit'>Register</button>
    </form>
  );
}
