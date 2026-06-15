import { useForm } from 'react-hook-form';

type RegisterFormData = {
  password: string;
  confirmPassword: string;
};

export default function CrossFieldValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();

  const password = watch('password');

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 4 Cross Field Validation</h2>
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

      <input
        type='password'
        placeholder='Confirm Password'
        {...register('confirmPassword', {
          required: 'Confirm password is required',
          validate: (value) => value === password || 'Password does not match',
        })}
      />
      {errors.confirmPassword && (
        <p className='error-text'>{errors.confirmPassword.message}</p>
      )}
      <button type='submit'>Register</button>
    </form>
  );
}
