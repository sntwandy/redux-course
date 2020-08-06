import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks } from '../actions';

// Components
import Loading from '../components/Loading';

const Tasks = (props) => {

  useEffect( () => {
    (!props.tasks.length) && props.getTasks()
  }, []);

  return(
    <div>
    {
      (props.loading) ?
        <div className="loading-container">
          <Loading />
        </div>
        :
        <h2>Tasks</h2>
    }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  getTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);