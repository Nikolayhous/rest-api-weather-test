import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modalRoot');

const Modal = ({ children }) => {
    return createPortal(<div className={s.modal}>{children}</div>, modalRoot);
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
