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

  const filterday = day
    .filter((course, index, array) => array.indexOf(course) === index)
    .sort();

  const day1 = filterday[0];
  const day2 = filterday[1];
  const day3 = filterday[2];
  const day4 = filterday[3];

  const render = day1 && day2 && day3 && day4;

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
    <div>
      {!render && <h3 className={css.h3}>записів немає 😢</h3>}
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
      )}
    </div>
  );
};
