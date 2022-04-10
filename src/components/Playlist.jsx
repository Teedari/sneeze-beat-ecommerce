import React, { useMemo } from 'react'
import { List } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faEye } from '@fortawesome/free-solid-svg-icons'

import useMediaQuery from '../utils/hooks/useSize';

import playlistData from '../data/playlist.json'

const CustomPlayList = () => {
  const media = useMediaQuery()
  
  const configSize = useMemo(() => {
    return  media.screen === 'sm' ? 2 : 4;
  }, [media.screen])
  return (
    <List
    className="recommended-playlist custom-list"
    grid={{ gutter: 0, column: configSize }}
    dataSource={playlistData}
    pagination={{
      pageSize: configSize,
      onChange: (page) => console.log(page),
    }}
    renderItem={(data) => (
      <div className="playlist-card">
        
        <h5 className="signature">Sneezebeat</h5>
        
        <div className="playlist-card-img">
          <div className="absolute-placeholder">
            <FontAwesomeIcon icon={faPlayCircle} />
          </div>
          <img src={data.imgUrl} alt="" />
        </div>
        <div className="playlist-card-content">
          <span className='text-slate-400'><FontAwesomeIcon icon={faEye} /> <small>33</small></span>
          <h4 className='text-primary'>{data.title}</h4>
          <span className='text-slate-400'>{data.bpm}BPM</span>
        </div>
      </div>
    )}></List>
  )
}

export default CustomPlayList