import { ModalWindow } from './ModalWindow';
import { useDispatch } from 'react-redux';
import { closeModalAdd } from '../redux/slise';
import { useSelector } from 'react-redux';
import { task } from '../redux/selector';
import { addTask } from 'operations';
import css from '../css/addedTask.module.css';

export const AddedTask = () => {
  const dispatch = useDispatch();
  const todo = useSelector(task);

  const handleSubmit = e => {
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
    e.preventDefault();
    const date = e.currentTarget.elements.date.value;
    const name = e.currentTarget.elements.name.value;

    const data = {
      data: {
        name: name,
        y: date.slice(0, 4),
        m: date.slice(5, 7),
        d: date.slice(8, 10),
        h: date.slice(11, 13),
      },
    };

    if (!name) {
      return alert('введіть імена!');
    }

    if (!date) {
      return alert('вкажіть дату!');
    }

    const hourSort = todo.some(elem => elem.data.h === data.data.h);
    const daySort = todo.some(elem => elem.data.d === data.data.d);
    if (hourSort && daySort) {
      return alert(
        `${data.data.d} числа на ${data.data.h} годину вже є запис!`
      );
    }

    const getDate = new Date();
    const year = getDate.getFullYear();
    const mounth = getDate.getMonth() + 1;
    const day = getDate.getDate();
    const hour = getDate.getHours();
    console.log('year', year);
    console.log('mounth', mounth);
    console.log('day', day);
    console.log('hour', hour);

    const y = number(data.data.y);
    const m = number(data.data.m);
    const d = number(data.data.d);
    const h = number(data.data.h);
    console.log('y', y);
    console.log('m', m);
    console.log('d', d);
    console.log('h', h);

    if (d >= day) {
      if (m >= mounth) {
        if (y >= year) {
          return dispatch(addTask(data));
        }
      }
    }

    return alert('неправильна дата!');
  };

  return (
    <ModalWindow>
      <form onSubmit={handleSubmit}>
        <div className={css.wrraper}>
          <button
            className={css.button1}
            onClick={() => {
              dispatch(closeModalAdd());
            }}
            type="button"
          >
            закрити
          </button>
          <label className={css.label}>
            хто та з ким
            <input
              name="name"
              type="text"
              placeholder="Василь.М - Сергій.А"
              className={css.input}
            ></input>
          </label>
          <label className={css.label}>
            дата та час
            <input
              name="date"
              type="datetime-local"
              className={css.input}
            ></input>
          </label>

          <button className={css.button2} type="submit">
            додати
          </button>
        </div>
      </form>
    </ModalWindow>
  );
};
