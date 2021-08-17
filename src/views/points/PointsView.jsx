import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getPointsAllPoints } from '../../app/redux/actions/pointsActions';

//https://react-redux.js.org/using-react-redux/connect-mapstate

export class PointsView extends Component {

    componentDidMount() {
        this.props.getPointsAllPoints();
    }
    renderPointsList() {
        return this.props.points.map((point) => {
          return (
            <tr key={point.id}>
              <td>{point.id}</td>
              <td>{point.name}</td>
              <td>{point.email}</td>
            </tr>
          )
        })
      }
 
    render() {
    return (
      <div>
        <h2>Points List</h2>
          { this.renderPointsList() }
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      points: state.point.list
    } 
}

export default connect( mapStateToProps ,{ getPointsAllPoints })(PointsView)