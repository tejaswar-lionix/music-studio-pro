import React, {useState} from 'react';
export const TempoView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>TEMPO - Tempo map - BPM, time sig, automation</h2><p>4/4</p></div>
};
export default TempoView;
