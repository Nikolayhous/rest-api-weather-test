import s from './ListWeather.module.css';
import { useState } from 'react';
import Modal from '../Modal';

const List = ({ weather, onClose }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <Modal onClose={onClose}>
                <div className={s.wrapper}>
                    <ul className={s.list}>
                        {weather.map(el => (
                            <li className={s.item} key={el.id}>
                                <button onClick={toggleModal}>close</button>
                                <p className={s.nameCity}>{el.name}</p>
                                <p className={s.textDesc}>{el.sys.country}</p>
                                <p>Wind: {el.wind.speed}m/s</p>
                                <p>Humidity: {el.main.humidity}%</p>
                                <p>Pressure: {el.main.pressure}Pa</p>
                                <p>Feels-like: + {el.main.feels_like} С°</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>
        </>
    );
};

export default List;
