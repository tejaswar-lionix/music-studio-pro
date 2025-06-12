import React, {useState} from 'react';
export const CatalogView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>CATALOG - Sample catalog - metadata, search, taggi</h2><p>genre</p></div>
};
export default CatalogView;
