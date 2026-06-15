import { useForm } from 'react-hook-form';
type LoginFormData = {
  email: string;
  password: string;
};
export default function RequiredValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 3.1 Required Validation</h2>
      <input
        type='email'
        placeholder='Email'
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && <p className='error-text'>{errors.email.message}</p>}
      <input
        type='password'
        placeholder='Password'
        {...register('password', { required: 'Password is required' })}
      />
      {errors.password && (
        <p className='error-text'>{errors.password.message}</p>
      )}
      <button type='submit'>Login</button>
    </form>
  );
}
