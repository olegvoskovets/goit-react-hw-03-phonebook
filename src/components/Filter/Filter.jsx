import PropTypes from 'prop-types';
import css from '../App/App.module.css';

export const Filter = ({ handleFilter, filter }) => {
  return (
    <div className={css.filter}>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        className={css.input}
        onChange={handleFilter}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
