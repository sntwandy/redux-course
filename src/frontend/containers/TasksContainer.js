import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../actions';

const Tasks = (props) => {

  useEffect( () => {
    props.getTasks();
  }, []);

  return(
    <h2>Tasks</h2>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = {
  getTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);