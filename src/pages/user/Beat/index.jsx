import React from 'react'
import { useSelector } from 'react-redux'
import MusicCard from '../../../components/MusicCard'
import CustomPlayList2 from '../../../components/Playlist2'
import CustomLayout from '../../../layouts'
import { HttpStatus } from '../../../state_management/types'
import FilterBar from '../../../components/FilterBar'

const BeatPage = () => {
  const deezer = useSelector( state => state.deezer)
  return (
   <CustomLayout>
     <section className='container mt-16 md:mt-2'>
      <FilterBar />
      <section className='py-4'>
        <CustomPlayList2 loading={deezer.fetchState !== HttpStatus.FULFILLED} dataSource={deezer?.data} pageSize={20} MyItem={MusicCard} />
      </section>
     </section>
   </CustomLayout>
  )
}

export default BeatPage