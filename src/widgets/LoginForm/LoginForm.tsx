import { useLoginMutation } from 'features/Auth';
import { SyntheticEvent, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm: FC = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    login({ email, password })
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((reason) => {
        console.log(reason);
      });
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleFormSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
};

LoginForm.displayName = 'LoginForm';
