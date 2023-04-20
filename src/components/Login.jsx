import css from '../css/Login.module.css';
import { useDispatch } from 'react-redux';
import { isLogin } from 'redux/slise';
import Notiflix from 'notiflix';

export const Login = () => {
  const dispath = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = e.currentTarget.elements.data.value;
    if (data === 'qwerty') {
      dispath(isLogin());
      e.currentTarget.reset();
      return Notiflix.Notify.success('вгадав', { timeout: 2000 });
    }
    e.currentTarget.reset();
    return Notiflix.Notify.failure('неправильно!', { timeout: 2000 });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="id">найващий в світі пароль, точно не qwerty</label>
      <input name="data" type="text" id="id" />
      <button className={css.button}>не нажимай!</button>
    </form>
  );
};
