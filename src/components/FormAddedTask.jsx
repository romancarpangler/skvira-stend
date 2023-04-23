import { ModalWindow } from './ModalWindow';
import { closeModalAdd } from '../redux/slise';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from 'asuncOperations';
import { task } from '../redux/selector';
import { number } from 'operation';
import Notiflix from 'notiflix';
import css from '../css/addedTask.module.css';

export const AddedTask = () => {
  const dispatch = useDispatch();
  const todo = useSelector(task);

  const handleSubmit = e => {
    e.preventDefault();

    const date = e.currentTarget.elements.date.value;
    const name = e.currentTarget.elements.name.value.trim();

    return FilterTask(date, name, todo, dispatch);
  };

  return (
    <ModalWindow>
      <form onSubmit={handleSubmit} className={css.form}>
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
          <div className={css.div1}>
            <div className={css.div2}>
              <label htmlFor="userName" className={css.label}>
                хто та з ким
              </label>
              <input
                id="userName"
                name="name"
                type="text"
                placeholder="Василь.М - Сергій.А"
                className={css.input}
              ></input>
            </div>
            <div className={css.div2}>
              <label htmlFor="date" className={css.label}>
                дата та час
              </label>
              <input
                id="date"
                name="date"
                type="datetime-local"
                className={css.input}
              ></input>
            </div>
          </div>
          <button className={css.button2} type="submit">
            додати
          </button>
        </div>
      </form>
    </ModalWindow>
  );
};
const FilterTask = (date, name, todo, dispatch) => {
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
    return Notiflix.Notify.failure('вкажіть імена', { timeout: 5000 });
  }

  if (!date) {
    return Notiflix.Notify.failure('вкажіть дату!', { timeout: 5000 });
  }

  const hourSort = todo.some(elem => elem.data.h === data.data.h);
  const daySort = todo.some(elem => elem.data.d === data.data.d);
  const month = todo.some(elem => elem.data.m === data.data.m);

  if (hourSort && daySort && month) {
    return Notiflix.Notify.failure(
      `${data.data.d} числа на ${data.data.h} годину вже є запис!`,
      { timeout: 5000 }
    );
  }

  const getDate = new Date();
  const year = getDate.getFullYear();
  const mounth = getDate.getMonth() + 1;
  const day = getDate.getDate();
  const hours = getDate.getHours();

  const y = number(data.data.y);
  const m = number(data.data.m);
  const d = number(data.data.d);
  const h = number(data.data.h);

  if (h > 11)
    return Notiflix.Notify.failure('після 12 години дня стенду нема!', {
      timeout: 5000,
    });
  if (h < 7)
    return Notiflix.Notify.failure('до 8 години ранку стенду нема!', {
      timeout: 5000,
    });

  if (d === day && m === mounth && y === year && h <= hours) {
    return Notiflix.Notify.failure('неправильна дата!', { timeout: 5000 });
  }

  if (d >= day || (d < day && m > mounth)) {
    if (m >= mounth || (m > month && y > year)) {
      if (y >= year) {
        return dispatch(addTask(data));
      }
    }
  }

  return Notiflix.Notify.failure('неправильна дата!', { timeout: 5000 });
};
