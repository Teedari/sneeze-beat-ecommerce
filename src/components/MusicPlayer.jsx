import { faBackward, faClose, faForward, faMinus, faPause, faPlay, faRotate, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{ useState} from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { turnOffPlayer , playMusic, stopMusic} from '../state_management/slices/ui.slice'


// import music from '../assets/music/ArrDee x Aitch War.mp3'
const MusicPlayer = () => {
  const [isMinimized, setIsMinimized] = useState(true)
  const [isLoopMode, setIsLoopMode] = useState(false)

  const minimizeClass = 'bg-dark-800 rounded-b-2xl text-center py-8'
  const maximizeClass = minimizeClass + ' bg-[url("https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80")] bg-cover bg-center rounded-2xl'

  const musicToolbarClass = isMinimized ? maximizeClass : minimizeClass

  const dispatch = useDispatch()

  const player = useSelector( state => state.ui.player)

  const track = useSelector( state => state.ui.player.currentTrack)

  const hideMusicPlayer = () =>  dispatch(turnOffPlayer())

  const onPlay = () => {
    if(!player.isPlaying){
      dispatch(playMusic())
    }else{
      dispatch(stopMusic())
    }
  }

  const onEnded = () => {
    dispatch(stopMusic())
  }

  const onSeek = (sec) => {
    console.log(sec)
  }

  const onCount = (count) => {
    console.log(count)
  }
  return (
    <div className='fixed max-w-[20rem] w-full right-0 top-1/2 -translate-y-1/2 rounded-3xl p-2 bg-dark-200 z-40'>
      <div className='bg-dark-300 rounded-2xl max-h-[600px] h-full flex flex-col justify-between relative'>
        <div className='absolute top-0 z-40 right-0 px-2 flex gap-4'>
          {/* <button 
            onClick={() => setIsMinimized((prev, next) => !prev)}
            className='text-xl hover:scale-105 focus:text-red-700'><FontAwesomeIcon icon={faMinus} /></button> */}
          <button onClick={hideMusicPlayer} className='text-xl hover:scale-105 focus:text-red-700'><FontAwesomeIcon icon={faClose} /></button>
        </div>
        <div hidden={isMinimized} className='h-[350px] rounded-2xl text-center flex flex-col items-center justify-center  bg-[url("https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80")] bg-cover bg-center bg-blend-darken flex-auto filter-blur'>
          <h4 className='text-white'>{track.title}</h4>
        </div>
        <div className={musicToolbarClass} style={{height: '200px'}}>
          <h3 className='text-primary m-0'>{track.title}</h3>
          <p className='m-0 font-thin'>Hip pop <small className='font-semibold text-slate-700'>120BPM</small></p>
          <div className='flex gap-6 justify-center pt-4'>
            <button><FontAwesomeIcon icon={faShuffle} /></button>
            <button><FontAwesomeIcon icon={faBackward} /></button>
            <button onClick={onPlay} className='bg-primary w-12 h-12 rounded-full '>{ player.isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} /> }</button>
            <button><FontAwesomeIcon icon={faForward} /></button>
            <button
              onClick={() => setIsLoopMode((prev, next) => !prev)}
              className={isLoopMode === true ? 'text-slate-800' : ''}
            ><FontAwesomeIcon icon={faRotate} /></button>
          </div>
          <ReactPlayer
            
            url={track?.music} 
            playing={player.isPlaying}
            onEnded={onEnded}
            onSeek={onSeek}
            loop={isLoopMode}
            onDuration={onCount} 
            progressInterval={2}
          ></ReactPlayer>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer