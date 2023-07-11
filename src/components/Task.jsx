import { number } from 'operation';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../asuncOperations';
import { isLogin, modalIsOpendelete } from 'redux/selector';
import { openModalDeleteTask, closeModalDeleteTask } from '../redux/slise';
import { ModalWindow } from './ModalWindow';
import css from '../css/Task.module.css';

export const Task = ({ day, arr, mounth }) => {
  const dispath = useDispatch();
  const login = useSelector(isLogin);
  const modalDelete = useSelector(modalIsOpendelete);

  // <ModalWindow>
  //   <p> видалити запис ?</p>
  //   <div className={css.d}>
  //     <button
  //       className={css.b}
  //       onClick={() => {
  //         dispath(closeModalDeleteTask());
  //       }}
  //     >
  //       ні
  //     </button>
  //     <button
  //       id={id}
  //       className={css.b}
  //       onClick={e => {
  //         dispath(deleteTask(e.currentTarget.id));
  //       }}
  //     >
  //       так
  //     </button>
  //   </div>
  // </ModalWindow>
  const a = false;

  return (
    <ul className={css.ul}>
      <h1 className={css.h1}>{`${day}.${mounth}`}</h1>
      <p className={css.p}>залишилось мість {arr.length - 4}</p>

      {arr.map(({ id, data }) => {
        const { name, h } = data;

        return (
          <li id={id} key={id} className={css.li}>
            <h3>{name}</h3>
            <p>
              години служіння з {number(h)} до {number(h) + 1}
            </p>
            {login && (
              <button
                className={css.button}
                type="button"
                onClick={() => {
                  dispath(openModalDeleteTask());
                }}
              >
                видалити запис X
              </button>
            )}
            {a && (
              <ModalWindow>
                <p> видалити запис ?</p>
                <div className={css.d}>
                  <button
                    className={css.b}
                    onClick={() => {
                      dispath(closeModalDeleteTask());
                    }}
                  >
                    ні
                  </button>
                  <button
                    id={id}
                    className={css.b}
                    onClick={e => {
                      dispath(deleteTask(e.currentTarget.id));
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
  );
};
