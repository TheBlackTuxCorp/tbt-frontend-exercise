import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const { ready } = this.props;

    return (
      <div>
        Put your code here!
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ready: state.app.ready,
});

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Home);
