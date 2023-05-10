import css from './Filter.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <div className={css.filterContainer}>
        <p className={css.filterTitle}>Find contacts by name</p>
        <input
          className={css.filterInput}
          type="text"
          onChange={this.props.filterContacts}
          value={this.props.filter}
        ></input>
      </div>
    );
  }
}

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

export default Filter;