import React, {useState} from 'react';
export const ExportView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>EXPORT - Export - stems, stems + master, metadata</h2><p>wav</p></div>
};
export default ExportView;
