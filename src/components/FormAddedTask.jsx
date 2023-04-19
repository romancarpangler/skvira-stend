import { ModalWindow } from './ModalWindow';
import { useDispatch } from 'react-redux';
import { closeModalAdd } from '../redux/slise';
import { addTask } from 'operations';
import css from '../css/addedTask.module.css';

export const AddedTask = () => {
  const dispatch = useDispatch();

  // const data = {
  //   name:'',
  //   e: 1,
  //   m: 2,
  //   d: 3,
  //   h: 4,
  // };
  // const gg = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
  // console.log(gg.includes('Poly'));

  const handleSubmit = e => {
    e.preventDefault();
    const date = e.currentTarget.elements.date.value;
    const name = e.currentTarget.elements.name.value;

    if (!name) {
      return alert('введіть імена');
    }

    if (!date) {
      return alert('вкажіть дату');
    }

    const data = {
      data: {
        name: name,
        y: date.slice(0, 4),
        m: date.slice(5, 7),
        d: date.slice(8, 10),
        h: date.slice(11, 13),
      },
    };

    dispatch(addTask(data));
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
