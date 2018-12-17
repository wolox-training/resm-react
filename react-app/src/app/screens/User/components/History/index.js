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
    const history = this.props.gamePoints && this.props.gamePoints.history;
    if (history) {
      const keysSnapshots = Object.keys(history);
      const snapshots = keysSnapshots.map((key, i) => {
        const date = new Date(Number(key));
        return <Snapshot key={i.toString()} date={date.toLocaleDateString()} points={history[key]} />;
      });
      return snapshots;
    }
    return null;
  };
  render() {
    return (
      <div className={style.history}>
        <h3>History</h3>
        {this.props.gamePoints && this.props.gamePoints.history && (
          <div className={style.historySnapshots}>{this.renderHistoryPoints()}</div>
        )}
      </div>
    );
  }
}

History.propTypes = {
  token: PropTypes.string,
  gamePoints: PropTypes.objectOf(PropTypes.object),
  getUserPoints: PropTypes.func
};

const mapStateToProps = state => ({
  token: state.auth.token,
  gamePoints: state.game.gamePoints
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
