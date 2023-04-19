import css from '../css/modalWindow.module.css';

export const ModalWindow = ({ children }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};
