import css from '../css/Login.module.css';
import { useDispatch } from 'react-redux';
import { isLogin } from 'redux/slise';
import Notiflix from 'notiflix';

export const Login = () => {
  const dispath = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = e.currentTarget.elements.data.value.toLowerCase().trim();
    e.currentTarget.reset();
    if (data === 'qwerty') {
      dispath(isLogin());
      return Notiflix.Notify.success('вгадав', { timeout: 700 });
    }

    return Notiflix.Notify.failure('неправильно!', { timeout: 700 });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="id">найващий в світі пароль</label>
      <input name="data" type="text" id="id" placeholder="qwerty" />
      <button className={css.button}>не нажимай!</button>
    </form>
  );
};
