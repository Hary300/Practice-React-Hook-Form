import { useForm } from 'react-hook-form';

type RegisterFormData = {
  username: string;
};

export default function Validate() {
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
      <h2>Level 3.5 validate</h2>
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
            value: 8,
            message: 'Username cannot exceed 8 characters',
          },
          validate: {
            noAdmin: (value) => value !== 'admin' || 'Username cannot be admin',
            noRoot: (value) => value !== 'root' || 'Username cannot be root',
          },
        })}
      />
      {errors.username && (
        <p className='error-text'>{errors.username.message}</p>
      )}
      <button type='submit'>Register</button>
    </form>
  );
}
