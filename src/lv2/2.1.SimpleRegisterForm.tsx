import { useForm } from 'react-hook-form';

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
};

export default function SimpleRegisterForm() {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.dir(register('email'));
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 2.1 Simple Register Form (RHF)</h2>
      <input type='text' placeholder='Username' {...register('username')} />
      <input type='email' placeholder='Email' {...register('email')} />
      <input type='password' placeholder='Password' {...register('password')} />
      <button type='submit'>Submit</button>
    </form>
  );
}
