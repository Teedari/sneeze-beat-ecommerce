import { faComment, faHeadphones, faPlay, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'

import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MusicCard from '../../../components/MusicCard'
import CustomPlayList2 from '../../../components/Playlist2'
import CustomLayout from '../../../layouts'
import { addItemToCart } from '../../../state_management/slices/cart.slice'
import { playMusic, setCurrentTrack } from '../../../state_management/slices/ui.slice'
import { HttpStatus } from '../../../state_management/types'

const BeatDetail = () => {
  const tracks = useSelector( state => state.deezer.data)
  const params = useParams()
  const dispatch = useDispatch()
  const deezer = useSelector( state => state.deezer)
  const selectedTrack = useMemo(() => {
    return tracks.filter( track => track.id.toString() === params.beatID)[0]
  }, [params.beatID, tracks])

  const playMusicHandler = () => {
    dispatch(setCurrentTrack({cover: selectedTrack?.album.cover, music: selectedTrack?.preview, title: selectedTrack?.title}))
    dispatch(playMusic())
  }

  return (
    <CustomLayout >
      <div className='container mt-20'>
        <div className='md:bg-dark-400 max-w-screen-lg mx-auto flex items-center justify-between h-80 p-8 rounded-2xl md:bg-none relative overflow-hidden'>
          <div className='md:hidden absolute-container'>
            <img className='block w-full h-full object-cover' src={selectedTrack?.album?.cover} alt="" />
          </div>
          <div className='flex flex-col gap-4 z-10'>
            <h1 className='text-slate-300 m-0'>On Purpose</h1>
            <p className='m-0 text-primary font-thin'>with SneezeBeat</p>
            <div className='flex gap-4'>
              <span className='flex items-center gap-2 cursor-pointer'><FontAwesomeIcon icon={faHeadphones}/><small>126 plays</small></span>
              <span className='flex items-center gap-2 cursor-pointer'><FontAwesomeIcon icon={faComment}/><small>126 plays</small></span>
            </div>
            <div className='flex gap-4 items-center'>
              <button onClick={playMusicHandler} className='w-20 h-20 text-2xl bg-dark-500 rounded-full border border-slate-800'>
                <FontAwesomeIcon icon={faPlay} />
              </button>
              <Button className='btn btn-secondary'>Share <FontAwesomeIcon className='px-2' icon={faShare} /></Button>
            </div>
          </div>
          <div className='hidden md:flex items-center justify-center border h-52 w-52  rounded-full relative'>
            <div className='w-[10px] h-[10px] bg-dark-800 rounded-full absolute z-10'></div>
            <div className='image-container rounded-full'>
              <img src={selectedTrack?.album?.cover} alt="" />
            </div>
          </div>
        </div>
        <br/>
        <div className='flex gap-4 justify-center'>
          <button className='relative text-left px-4 py-3  hover:bg-dark-500 hover:c-shadow hover:border-none border border-slate-700 rounded-xl w-60' onClick={() => dispatch(addItemToCart(selectedTrack))}>
            <div>
              <h5 className='text-primary capitalize font-semibold'>Exclusive</h5>
              <p className='m-0'>$123.098</p>
            </div>
          </button>
          <button className='relative text-left px-4 py-3  hover:bg-dark-500 hover:c-shadow hover:border-none border border-slate-700 rounded-xl w-60'>
            <div>
              <h5 className='text-primary capitalize font-semibold'>mp3</h5>
              <p className='m-0'>$123.098</p>
            </div>
          </button>
        </div>
        <br/>
        <div className='heading'>
          <h3><span>Genre</span> Playlist</h3>
        </div>
        <CustomPlayList2 loading={deezer.fetchState !== HttpStatus.FULFILLED} dataSource={deezer?.playlist.recommended} MyItem={MusicCard} />
        <br/>
      </div>
    </CustomLayout>
  )
}

export default BeatDetail
