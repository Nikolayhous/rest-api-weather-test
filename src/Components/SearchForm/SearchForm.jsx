import { useState } from 'react';
import s from './SearchForm.module.css';
import Button from '../Button';
import { toast } from 'react-toastify';

const SearchForm = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (searchQuery.trim() === '') {
            return toast('Pleas enter a name for the city');
        }
        onSubmit(searchQuery);
        setSearchQuery('');
    };

    const handleNameChange = e => {
        console.log(e.target.value);
        setSearchQuery(e.target.value.toLowerCase());
    };
    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    className={s.input}
                    name="searchQuery"
                    type="text"
                    autoComplete="on"
                    autoFocus
                    placeholder="Enter city name"
                    value={searchQuery}
                    onChange={handleNameChange}
                />
                <Button text="Add" type="submit" />
            </form>
        </div>
    );
};

export default SearchForm;
