import { useSelector } from 'react-redux';
import { task } from '../redux/selector';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'asuncOperations';
import css from '../css/taskList.module.css';
import { isLogin } from 'redux/selector';
import { number } from 'operation';
import { ModalWindow } from './ModalWindow';
import { modalIsOpendelete } from '../redux/selector';
import { openModalDeleteTask, closeModalDeleteTask } from 'redux/slise';

export const TaskList = () => {
  const dispath = useDispatch();
  const modalDelete = useSelector(modalIsOpendelete);
  const todo = useSelector(task);
  const login = useSelector(isLogin);

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
                    type="button"
                    onClick={() => {
                      dispath(openModalDeleteTask());
                    }}
                  >
                    видалити запис
                  </button>
                )}
                {modalDelete && (
                  <ModalWindow>
                    <p>ви точно хочете видалити запис 🫣 </p>
                    <div className={css.f}>
                      <button
                        className={css.b}
                        type="button"
                        onClick={() => {
                          dispath(closeModalDeleteTask());
                        }}
                      >
                        ні
                      </button>
                      <button
                        className={css.b}
                        type="button"
                        onClick={() => {
                          dispath(deleteTask(id));
                        }}
                      >
                        так
                      </button>
                    </div>
                  </ModalWindow>
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
                      dispath(openModalDeleteTask());
                    }}
                  >
                    видалити запис
                  </button>
                )}
                {modalDelete && (
                  <ModalWindow>
                    <p>ви точно хочете видалити запис 🫣 </p>
                    <button
                      type="button"
                      onClick={() => {
                        dispath(closeModalDeleteTask());
                      }}
                    >
                      ні
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        dispath(deleteTask(id));
                      }}
                    >
                      так
                    </button>
                  </ModalWindow>
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
                      dispath(openModalDeleteTask());
                    }}
                  >
                    видалити запис
                  </button>
                )}
                {modalDelete && (
                  <ModalWindow>
                    <p>ви точно хочете видалити запис 🫣 </p>
                    <button
                      type="button"
                      onClick={() => {
                        dispath(closeModalDeleteTask());
                      }}
                    >
                      ні
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        dispath(deleteTask(id));
                      }}
                    >
                      так
                    </button>
                  </ModalWindow>
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
                      dispath(openModalDeleteTask());
                    }}
                  >
                    видалити запис
                  </button>
                )}
                {modalDelete && (
                  <ModalWindow>
                    <p>ви точно хочете видалити запис 🫣 </p>
                    <button
                      type="button"
                      onClick={() => {
                        dispath(closeModalDeleteTask());
                      }}
                    >
                      ні
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        dispath(deleteTask(id));
                      }}
                    >
                      так
                    </button>
                  </ModalWindow>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
