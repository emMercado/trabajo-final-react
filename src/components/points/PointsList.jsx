import React from 'react';

export const PointsList = ({points}) => (
    <ul>
        { points.map(point => <li key={point.id}>{point.name}</li>) }
    </ul>
)