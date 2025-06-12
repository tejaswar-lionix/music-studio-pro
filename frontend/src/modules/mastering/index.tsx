import React, {useState} from 'react';
export const MasteringView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>MASTERING - Mastering - loudness, export, dBFS, LUFS</h2><p>-14 LUFS</p></div>
};
export default MasteringView;
