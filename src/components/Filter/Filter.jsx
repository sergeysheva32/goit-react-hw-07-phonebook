import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <FilterInput
        name="filterInput"
        type="text"
        placeholder="Find contacts by name"
        onChange={e => dispatch(setFilter(e.target.value))}
      ></FilterInput>
      <FilterLabel></FilterLabel>
    </FilterContainer>
  );
};