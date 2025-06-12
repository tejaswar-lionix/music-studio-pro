import React, {useState} from 'react';
export const MixingView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>MIXING - Stem mixing - gain, pan, EQ, compression</h2><p>vocals</p></div>
};
export default MixingView;
