import React, {useState} from 'react';
export const NotationView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>NOTATION - Notation - MIDI, sheet, transposition, n</h2><p>C4</p></div>
};
export default NotationView;
