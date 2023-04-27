import { number } from 'operation';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../asuncOperations';
import { isLogin } from 'redux/selector';
import css from '../css/Task.module.css';

export const Task = ({ day, arr, mounth }) => {
  const dispath = useDispatch();
  const login = useSelector(isLogin);
  return (
    <ul className={css.ul}>
      <h1 className={css.h1}>{`${day}.${mounth}`}</h1>
      {arr.map(({ id, data }) => {
        const { name, h } = data;

        return (
          <li key={id} className={css.li}>
            <h3>{name}</h3>
            <p>
              години служіння з {number(h)} до {number(h) + 1}
            </p>
            {login && (
              <button
                id={id}
                type="button"
                onClick={() => {
                  dispath(deleteTask(id));
                }}
              >
                видалити запис
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
