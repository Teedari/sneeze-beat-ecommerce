import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MusicCard from '../../../components/MusicCard'
import CustomPlayList2 from '../../../components/Playlist2'
import CustomLayout from '../../../layouts'
import { HttpStatus } from '../../../state_management/types'
import FilterBar from '../../../components/FilterBar'
import { useSearchParams } from 'react-router-dom'
import { getBeatListByGenre } from '../../../state_management/slices/beat.slice'
import { reverseQueryParams } from '../../../utils/helpers'

const BeatPage = () => {
  const [params] = useSearchParams()
  const dispatch = useDispatch()
  const beatState = useSelector( state => state.beat)
  
  const findGenre = useMemo(() => {
    const genre = params.getAll('query')
    return genre.length >= 1 ? reverseQueryParams(genre[0]): ''
  }, [params])

  useEffect(() => {
    dispatch(getBeatListByGenre(findGenre))
  }, [dispatch, findGenre])
  return (
   <CustomLayout>
     <section className='container mt-16 md:mt-2'>
      <FilterBar params={params} />
      <section className='py-4'>
        <CustomPlayList2 loading={beatState.fetchingState !== HttpStatus.FULFILLED} dataSource={beatState?.queried} pageSize={20} MyItem={MusicCard} />
      </section>
     </section>
   </CustomLayout>
  )
}

export default BeatPage