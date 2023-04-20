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
        <Link to="/login">логін</Link>
        <div className={css.div2}>
          <Link to="/task">
            <h3 className={css.h1}>Cлужіня зі стендом</h3>
          </Link>
        </div>
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
