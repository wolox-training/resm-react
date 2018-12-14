import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUserPoints } from '../../../../../redux/Game/actions';

import style from './styles.scss';
import Snapshot from './components/Snapshot';

class History extends Component {
  componentDidMount() {
    this.props.getUserPoints(this.props.token);
  }
  renderHistoryPoints = () => {
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
  render() {
    return (
      <div className={style.history}>
        <h3>History</h3>
        {this.props.historyPoints && (
          <div className={style.historySnapshots}>{this.renderHistoryPoints()}</div>
        )}
      </div>
    );
  }
}

History.propTypes = {
  token: PropTypes.string,
  historyPoints: PropTypes.arrayOf(PropTypes.object),
  getUserPoints: PropTypes.func.isRequired
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
