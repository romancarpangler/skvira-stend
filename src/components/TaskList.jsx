import { useSelector } from 'react-redux';
import { task } from '../redux/selector';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'operations';
import css from '../css/taskList.module.css';

export const TaskList = () => {
  const dispath = useDispatch();
  const todo = useSelector(task);

  const tasks = [...todo].sort((a, b) => a.data.d - b.data.d);

  const day = todo.map(x => x.data.d);

  const filterArr = day
    .filter((course, index, array) => array.indexOf(course) === index)
    .sort();

  const num1 = filterArr[0];
  const num2 = filterArr[1];
  const num3 = filterArr[2];
  const num4 = filterArr[3];

  const arr1 = tasks
    .filter(x => x.data.d === num1)
    .sort((a, b) => a.data.h - b.data.h);

  const arr2 = tasks
    .filter(x => x.data.d === num2)
    .sort((a, b) => a.data.h - b.data.h);

  const arr3 = tasks
    .filter(x => x.data.d === num3)
    .sort((a, b) => a.data.h - b.data.h);

  const arr4 = tasks
    .filter(x => x.data.d === num4)
    .sort((a, b) => a.data.h - b.data.h);

  const number = x => {
    switch (x) {
      case '01':
        return 1;
      case '02':
        return 2;
      case '03':
        return 3;
      case '04':
        return 4;
      case '05':
        return 5;
      case '06':
        return 6;
      case '07':
        return 7;
      case '08':
        return 8;
      case '09':
        return 9;
      default:
        return Number(x);
    }
  };

  return (
    <div className={css.wraperr}>
      <ul className={css.ul}>
        <h1 className={css.h1}>{number(num1) || 'запишіться на стенд 😢'}</h1>
        {arr1.map(({ id, data }) => {
          const { name, h } = data;

          return (
            <li key={id} className={css.li}>
              <h3>{name}</h3>
              <p>
                години служіння з {number(h)} до {number(h) + 1}
              </p>
              <button
                type="button"
                onClick={() => {
                  dispath(deleteTask(id));
                }}
              >
                видалити запис
              </button>
            </li>
          );
        })}
      </ul>
      <ul className={css.ul}>
        <h1 className={css.h1}>{number(num2) || 'запишіться на стенд 😢'}</h1>
        {arr2.map(({ id, data }) => {
          const { name, h } = data;

          return (
            <li key={id} className={css.li}>
              <h3>{name}</h3>
              <p>
                години служіння з {number(h)} до {number(h) + 1}
              </p>
              <button
                type="button"
                onClick={() => {
                  dispath(deleteTask(id));
                }}
              >
                видалити запис
              </button>
            </li>
          );
        })}
      </ul>
      <ul className={css.ul}>
        <h1 className={css.h1}>{number(num3) || 'запишіться на стенд 😢'}</h1>
        {arr3.map(({ id, data }) => {
          const { name, h } = data;

          return (
            <li key={id} className={css.li}>
              <h3>{name}</h3>
              <p>
                години служіння з {number(h)} до {number(h) + 1}
              </p>
              <button
                type="button"
                onClick={() => {
                  dispath(deleteTask(id));
                }}
              >
                видалити запис
              </button>
            </li>
          );
        })}
      </ul>
      <ul className={css.ul}>
        <h1 className={css.h1}>{number(num4) || 'запишіться на стенд 😢'}</h1>
        {arr4.map(({ id, data }) => {
          const { name, h } = data;

          return (
            <li key={id} className={css.li}>
              <h3>{name}</h3>
              <p>
                години служіння з {number(h)} до {number(h) + 1}
              </p>
              <button
                type="button"
                onClick={() => {
                  dispath(deleteTask(id));
                }}
              >
                видалити запис
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
