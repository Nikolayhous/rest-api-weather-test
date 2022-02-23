import s from './Button.module.css';

const Button = ({ text, type = 'submit' }) => {
    return (
        <button className={s.btn} type={type}>
            {text}
        </button>
    );
};

export default Button;
