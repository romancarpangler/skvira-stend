import { useDispatch } from 'react-redux';
import { openModalAdd } from 'redux/slise';
import css from '../css/AppBar.module.css';

export const AppBar = () => {
  const dispath = useDispatch();
  return (
    <div className={css.div}>
      <h1 className={css.h1}>графік служіня зі стендом</h1>
      <button
        onClick={() => {
          dispath(openModalAdd());
        }}
        className={css.button}
        type="button"
      >
        записатися
      </button>
    </div>
  );
};
