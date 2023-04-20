import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModalAdd } from 'redux/slise';
import css from '../css/AppBar.module.css';
import { isLogin } from 'redux/selector';

export const AppBar = () => {
  const login = useSelector(isLogin);
  const dispath = useDispatch();

  return (
    <>
      <div className={css.div}>
        <div className={css.div2}>
          <Link to="/login">логін</Link>
          <Link to="/task">графік </Link>
        </div>
        <h1 className={css.h1}>Cлужіня зі стендом</h1>
        {login && (
          <button
            onClick={() => {
              dispath(openModalAdd());
            }}
            className={css.button}
            type="button"
          >
            записатися
          </button>
        )}
      </div>
    </>
  );
};
