import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar } from './AppBar';
import { AddedTask } from './FormAddedTask';
import { TaskList } from './TaskList';
import css from '../css/App.module.css';
import { modalIsOpenAdd, isLoading } from '../redux/selector';
import { fetchTask } from 'asuncOperations';
import { Login } from './Login';
import { RestrictedRoute } from './Routz';

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
      <Routes>
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={<Login></Login>}
              redirectTo="/task"
            ></RestrictedRoute>
          }
        />
        <Route path="/task" element={<TaskList></TaskList>} />
        <Route path="*" element={<TaskList></TaskList>} />
      </Routes>

      {isLoadings && <h1 className={css.div2}>Завантаження...</h1>}
      {modalAdd && <AddedTask />}
    </div>
  );
};
