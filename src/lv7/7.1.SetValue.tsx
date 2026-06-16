import { useForm } from 'react-hook-form';

type EmailInputFormData = {
  email: string;
};

export default function SetValue() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EmailInputFormData>();

  const onSubmit = async (data: EmailInputFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('submitted successfully');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 7.1 setValue()</h2>
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

      <button
        type='button'
        onClick={() =>
          setValue('email', 'demo@gmail.com', {
            shouldDirty: true,
            shouldValidate: true,
          })
        }
      >
        Fill Demo Email
      </button>
      <button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}
