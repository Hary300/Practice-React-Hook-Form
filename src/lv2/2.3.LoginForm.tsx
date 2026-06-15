import { useForm } from 'react-hook-form';

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 2.3 Understanding handleSUbmit</h2>
      <input type='email' placeholder='Email' {...register('email')} />
      <input type='password' placeholder='Password' {...register('password')} />
      <button type='submit'>Login</button>
    </form>
  );
}
