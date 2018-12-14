import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import { getUserPoints } from '../../../../../redux/Game/actions';

import style from './styles.scss';
import Statistics from './components/Statistics';
import Rules from './components/Rules';

class Points extends Component {
  // componentDidMount() {
  //   this.props.getUserPoints(this.props.token);
  // }
  render() {
    return (
      <div className={style.points}>
        <div className={style.pointsStatistics}>
          <h3>Points</h3>
          <Statistics />
        </div>
        <div className={style.pointsRules}>
          <h3>Rules</h3>
          <Rules />
        </div>
      </div>
    );
  }
}

export default Points;

// Points.propTypes = {
//   token: PropTypes.string,
//   gamePoints: PropTypes.objectOf(PropTypes.object),
//   getUserPoints: PropTypes.func
// };

// const mapStateToProps = state => ({
//   token: state.auth.token,
//   gamePoints: state.game.gamePoints,
//   getUserPoints: PropTypes.func
// });

// const mapDispatchToProps = dispatch => ({
//   getUserPoints: token => {
//     dispatch(getUserPoints({ token }));
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Points);
