import React from 'react';
import { connect } from 'react-redux';
import { filterAction } from '../../redus/actions';
import PropTypes from 'prop-types';

function Filter({ filter, onFilter }) {
  return (
    <label>
      <p>Find contact by name</p>
      <input type="input" name="filter" onChange={onFilter} value={filter} />
    </label>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateProps = state => {
  return {
    filter: state.contacts.filter,
  };
};

const mapDispathToProps = dispath => {
  return {
    onFilter: event => dispath(filterAction(event)),
  };
};

export default connect(mapStateProps, mapDispathToProps)(Filter);
