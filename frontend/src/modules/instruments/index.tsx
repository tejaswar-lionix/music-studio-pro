import React, {useState} from 'react';
export const InstrumentsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>INSTRUMENTS - Instruments - synth, sampler, drum machi</h2><p>synth</p></div>
};
export default InstrumentsView;
