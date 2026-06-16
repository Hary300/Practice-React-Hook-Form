import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  hasId: 'yes' | 'no';
  IdNumber: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    setValue,
    resetField,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      hasId: 'yes',
      IdNumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  const hasId = watch('hasId');

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (data.confirmPassword !== data.password) {
        throw new Error('Password does not match');
      }
      console.log('registered successfully');
      reset();
    } catch (error) {
      if (error instanceof Error) {
        setError('confirmPassword', {
          type: 'manual',
          message: error.message,
        });
        setValue('password', '');
        setValue('confirmPassword', '');
      }
    }
  };

  useEffect(() => {
    if (hasId === 'no') {
      resetField('IdNumber');
    }
  }, [hasId, resetField]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='wrapper'>
      <h2>Level 6.2 Form lifecycle</h2>
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
        placeholder='Confirm password'
        {...register('confirmPassword', {
          required: 'Confirm password is required',
        })}
      />
      {errors.confirmPassword && (
        <p className='error-text'>{errors.confirmPassword.message}</p>
      )}
      <div>
        <p>Do you have Id card?</p>
        <div>
          <input type='radio' value='yes' id='yes' {...register('hasId')} />
          <label htmlFor='yes'>Yes</label>
        </div>
        <div>
          <input type='radio' value='no' id='no' {...register('hasId')} />
          <label htmlFor='no'>No</label>
        </div>
      </div>

      {hasId === 'yes' && (
        <input
          type='text'
          placeholder='Id number'
          {...register('IdNumber', {
            required: 'Id number is required',
          })}
        />
      )}
      <button type='submit' disabled={!isValid || isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Register'}
      </button>
    </form>
  );
}
