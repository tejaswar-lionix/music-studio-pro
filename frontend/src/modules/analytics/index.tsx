import React, {useState} from 'react';
export const AnalyticsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ANALYTICS - Analytics - play count, skip, complexity</h2><p>plays</p></div>
};
export default AnalyticsView;
