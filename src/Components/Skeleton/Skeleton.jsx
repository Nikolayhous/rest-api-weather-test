import errorImages from '../../images/skeleton.jpg';
import s from './Skeleton.module.css';

export default function Skeleton() {
    return (
        <div role="alert">
            <p className={s.text}>
                To view the weather, enter the name of city!
            </p>
            <img src={errorImages} alt="photo_error" className={s.image} />
        </div>
    );
}
