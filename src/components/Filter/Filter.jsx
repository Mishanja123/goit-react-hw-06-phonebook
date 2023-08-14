import { useDispatch } from 'react-redux';

import { setFilter } from '../../features/filterSlice'


import css  from "./Filter.module.css";


export const Filter = () => {
  const dispatch = useDispatch() 

  const handleFilterChange = (event) => {
    const filters = event.target.value

    console.log(filters);
    dispatch(setFilter(filters));
  };

    return (
        <form className={css.form}>
        <label className= {css.lable}>
          Find contacts by name
        <input
         className={css.input}
         type="text"
         name="filter"
         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         placeholder="Enter contact Name"
         onChange={handleFilterChange}
        />
      </label>
      </form>
  );
};