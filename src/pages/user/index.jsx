import Hero from "../../layouts/hero";
import { Avatar, Button, Col, Row } from "antd";
import mobileImgUrl from '../../assets/images/mobile.png'
import CustomLayout from "../../layouts";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import getPlaylistThunk from "../../state_management/thunks/deezer.thunk";
import CustomPlayList2 from "../../components/Playlist2";
import MusicCard from "../../components/MusicCard";
import { HttpStatus } from "../../state_management/types";
import genreData from '../../data/genre.json'
import { Link } from "react-router-dom";
import { beatGoTo } from "../../utils/helpers";
import beatFetchThunk from "../../state_management/thunks/beat/beat.fetch.thunk";
import { getRecommendedBeats, getTrendingBeats } from "../../state_management/slices/beat.slice";
import { auth } from "../../configs/firebase.config";
import PersistentStorage from "../../utils/persistent_storage/storage.persistent";


function Homepage() {
  const dispatch = useDispatch()
  const beat = useSelector( state => state.beat)
  useEffect(() => {
    // dispatch(getPlaylistThunk())
    console.log(PersistentStorage.getUserHasLoggedIn())
    console.log('CURRENT', auth.currentUser)
    dispatch(beatFetchThunk()).unwrap()
    .then( success =>  {
      dispatch(getRecommendedBeats())
      dispatch(getTrendingBeats())
    })
  }, [dispatch])

  return (
    <CustomLayout>
      <Hero />
      <div className="bg-dark-100">
        <div className="container container-block">
          <div className="heading text-center text-white">
            <h2>
              <span>Marketplace</span> to get yourself a beat
            </h2>
          </div>
          <p className="text-muted">
            In sunt non aliquip quis ipsum consectetur velit aute amet. Culpa
            quis non est voluptate pariatur nulla. Mollit pariatur pariatur
            irure non incididunt id. Tempor occaecat ipsum consequat sint.
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-col-6 gap-4">
              <div className="showcase md:col-start-1 md:col-span-3 md:h-72">
               <Link to={beatGoTo('Drill')} ><h3>Drill</h3></Link>
              </div>
              <div className="md:col-start-4 md:col-span-3 grid grid-col-6 gap-4  rounded-lg ">
                <div className="showcase col-span-6">
                <Link to={beatGoTo('Hip Pop')} ><h3>Hip pop</h3></Link>
                </div>
                <div className="col-start-1 col-span-3 showcase text-white">
                <Link to={beatGoTo('Afro Pop')} ><h3>Afro Pop</h3></Link>
                </div>
                <div className="col-start-4 col-span-3 showcase text-white">
                <Link to={beatGoTo('R_and_B')} ><h3>{'R&B'}</h3></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommended container container-block">
        <div className="heading">
          <h2>
            <span>Recommended</span> Playlists
          </h2>
        </div>
        {/** Playlist grid */}
        <CustomPlayList2 loading={beat.fetchingState !== HttpStatus.FULFILLED} dataSource={beat?.category?.recommended} MyItem={MusicCard} />
      </div>
      <div className="recommended container py-4">
        <div className="heading">
          <h2>
            <span>Trending</span> Playlists
          </h2>
        </div>
        {/** Playlist grid */}
        <CustomPlayList2 loading={beat.fetchingState !== HttpStatus.FULFILLED} dataSource={beat?.category?.trending} MyItem={MusicCard} />
      </div>
      <div className="bg-dark-100">
        <div className="container container-block">
        <Row className="flex items-center">
          <Col md={12}>
            <h1 className="text-primary capitalize">Music for Everyone</h1>
            <p>Aute ullamco officia ad consequat est ipsum. Pariatur elit anim sit qui. Ea amet commodo voluptate et nostrud culpa minim ipsum officia consequat sint dolore qui occaecat.</p>
          </Col>
          <Col md={12}>
            <img src={mobileImgUrl} alt="" />
          </Col>
        </Row>
        <Row gutter={[16]} className='flex items-center'>
          <Col md={12}>
            <div className="border border-slate-800 rounded-lg p-8 max-w-md mx-auto">
              <Avatar ><span className="text-slate-800 font-semibold">GD</span></Avatar>
              <p className="py-4">Duis duis sunt Lorem est mollit non non enim ipsum nulla ipsum. Dolor irure mollit quis dolore Lorem duis. Occaecat ea voluptate officia Lorem nostrud laboris dolor duis ex laborum ipsum cillum nisi.
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="text-center">
              <h1 className="text-center capitalize text-slate-400" style={{textShadow: '0 2px rgba(0,0,0,0.5)'}}>People talking about Beat</h1>
              <div className="flex justify-center w-full py-4"><Button className="btn btn-primary">More reviews</Button></div>
            </div>
          </Col>
        </Row>
        </div>
      </div>

    </CustomLayout>
  );
}

export default Homepage;
