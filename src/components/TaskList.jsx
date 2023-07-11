import { useSelector } from 'react-redux';
import { task } from '../redux/selector';
import css from '../css/taskList.module.css';
import Notiflix from 'notiflix';
import { error, norm } from '../redux/selector';
import { Task } from './Task';

export const TaskList = () => {
  const todo = useSelector(task);

  const eror = useSelector(error);
  const ok = useSelector(norm);

  if (eror) {
    Notiflix.Notify.failure(
      'щось пішло не так, Мостіцкий все поламав, дзвоніть Рибаку в 3 години ночі',
      {
        timeout: 5000,
      }
    );
  }
  if (ok) {
    Notiflix.Notify.success('операція пройшла успішно', {
      timeout: 3000,
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

  const render = [day1, day2, day3, day4].every(
    elem => Boolean(elem) === false
  );

  return (
    <div>
      {render &&
        setTimeout(() => {
          <h3 className={css.h3}>записів немає 😢</h3>;
        })}
      {day1 && <Task day={day1} arr={arr1} mounth={'05'} />}
      {day2 && <Task day={day2} arr={arr2} mounth={'05'} />}
      {day3 && <Task day={day3} arr={arr3} mounth={'05'} />}
      {day4 && <Task day={day4} arr={arr4} mounth={'05'} />}
    </div>
  );
};
