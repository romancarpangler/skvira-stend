import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar } from './AppBar';
import { AddedTask } from './FormAddedTask';
import { TaskList } from './TaskList';
import css from '../css/App.module.css';
import { modalIsOpenAdd, isLoading } from '../redux/selector';
import { fetchTask } from 'operations';

export const App = () => {
  const modalAdd = useSelector(modalIsOpenAdd);
  const isLoadings = useSelector(isLoading);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchTask());
  }, [dispath]);

  return (
    <div className={css.div}>
      <AppBar></AppBar>
      {isLoadings && <h1 className={css.div2}>Завантаження...</h1>}
      {modalAdd && <AddedTask />}

      {!isLoadings && <TaskList></TaskList>}
    </div>
  );
};
