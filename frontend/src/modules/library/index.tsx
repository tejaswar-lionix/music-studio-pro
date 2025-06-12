import React, {useState} from 'react';
export const LibraryView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>LIBRARY - Library - packs, presets, license</h2><p>pack</p></div>
};
export default LibraryView;
