import React, {useState} from 'react';
export const EffectsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>EFFECTS - Effects - reverb, delay, chorus, distort</h2><p>reverb</p></div>
};
export default EffectsView;
