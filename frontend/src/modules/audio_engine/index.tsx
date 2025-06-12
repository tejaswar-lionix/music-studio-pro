import React, {useState} from 'react';
export const Audio_engineView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>AUDIO_ENGINE - Audio engine - playback, tempo, time-str</h2><p>120bpm</p></div>
};
export default Audio_engineView;
