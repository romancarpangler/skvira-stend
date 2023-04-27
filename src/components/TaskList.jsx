import { useSelector } from 'react-redux';
import { task } from '../redux/selector';
import { useDispatch } from 'react-redux';
import css from '../css/taskList.module.css';
import { isLogin } from 'redux/selector';
import { number } from 'operation';
import { deleteTask } from '../asuncOperations';
import Notiflix from 'notiflix';
import { error, norm } from '../redux/selector';

export const TaskList = () => {
  const dispath = useDispatch();

  const todo = useSelector(task);
  const login = useSelector(isLogin);

  const eror = useSelector(error);
  const ok = useSelector(norm);

  if (eror) {
    Notiflix.Notify.failure('щось пішло не так, Мостіцкий все поламав', {
      timeout: 5000,
    });
  }
  if (ok) {
    Notiflix.Notify.success('операція пройшла успішно', {
      timeout: 5000,
    });
  }

  const tasks = [...todo].sort((a, b) => a.data.d - b.data.d);

  const day = todo.map(x => x.data.d);

  const filterday = day
    .filter((course, index, array) => array.indexOf(course) === index)
    .sort();

  const day1 = filterday[0];
  const day2 = filterday[1];
  const day3 = filterday[2];
  const day4 = filterday[3];

  const render = [day1, day2, day3, day4].every(
    elem => Boolean(elem) === false
  );

  const arr1 = tasks
    .filter(x => x.data.d === day1)
    .sort((a, b) => a.data.h - b.data.h);

  const arr2 = tasks
    .filter(x => x.data.d === day2)
    .sort((a, b) => a.data.h - b.data.h);

  const arr3 = tasks
    .filter(x => x.data.d === day3)
    .sort((a, b) => a.data.h - b.data.h);

  const arr4 = tasks
    .filter(x => x.data.d === day4)
    .sort((a, b) => a.data.h - b.data.h);

  return (
    <div>
      {render && <h3 className={css.h3}>записів немає 😢</h3>}
      {day1 && (
        <ul className={css.ul}>
          <h1 className={css.h1}>{`${day1}.04`}</h1>
          {arr1.map(({ id, data }) => {
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
      )}
      {day2 && (
        <ul className={css.ul}>
          <h1 className={css.h1}>{`${day2}.04`}</h1>
          {arr2.map(({ id, data }) => {
            const { name, h } = data;

            return (
              <li key={id} className={css.li}>
                <h3>{name}</h3>
                <p>
                  години служіння з {number(h)} до {number(h) + 1}
                </p>
                {login && (
                  <button
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
      )}
      {day3 && (
        <ul className={css.ul}>
          <h1 className={css.h1}>{`${day3}.04`}</h1>
          {arr3.map(({ id, data }) => {
            const { name, h } = data;

            return (
              <li key={id} className={css.li}>
                <h3>{name}</h3>
                <p>
                  години служіння з {number(h)} до {number(h) + 1}
                </p>
                {login && (
                  <button
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
      )}
      {day4 && (
        <ul className={css.ul}>
          <h1 className={css.h1}>{`${day4}.04`}</h1>
          {arr4.map(({ id, data }) => {
            const { name, h } = data;

            return (
              <li key={id} className={css.li}>
                <h3>{name}</h3>
                <p>
                  години служіння з {number(h)} до {number(h) + 1}
                </p>
                {login && (
                  <button
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
      )}
    </div>
  );
};
