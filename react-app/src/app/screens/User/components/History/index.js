import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserPoints } from '../../../../../redux/Game/actions';

import style from './styles.scss';
import Snapshot from './Snapshot';

class History extends Component {
  componentDidMount() {
    this.props.getUserPoints(this.props.token);
  }
  render() {
    const renderHistoryPoints = () => {
      if (this.props.historyPoints) {
        const keysSnapshots = Object.keys(this.props.historyPoints);
        const snapshots = keysSnapshots.map((key, i) => {
          const date = new Date(Number(key));
          return (
            <Snapshot
              key={i.toString()}
              date={date.toLocaleDateString()}
              points={this.props.historyPoints[key]}
            />
          );
        });
        return snapshots;
      }
      return null;
    };
    return (
      <div className={style.history}>
        <h3>History</h3>
        <div className={style.historySnapshots}>{renderHistoryPoints()}</div>
      </div>
    );
  }
}

History.propTypes = {
  token: PropTypes.string,
  historyPoints: PropTypes.arrayOf(PropTypes.object),
  getUserPoints: PropTypes.func
};

const mapStateToProps = state => ({
  logged: state.auth.logged,
  user: state.auth.user,
  token: state.auth.token,
  historyPoints: state.game.historyPoints
});

const mapDispatchToProps = dispatch => ({
  getUserPoints: token => {
    dispatch(getUserPoints({ token }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
