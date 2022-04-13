import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { playMusic, setCurrentTrack } from "../state_management/slices/ui.slice";
import { useNavigate } from "react-router-dom";
import urls from "../utils/routes/page.routes";

const MusicCard = ({id, cover, title, bpm,  beat}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const playMusicHandler = () => {
    dispatch(setCurrentTrack({cover: cover, music: beat, title}))
    dispatch(playMusic())
  }
  return (
    <div className="playlist-card">
      <h5 className="signature">Sneezebeat</h5>

      <div className="playlist-card-img">
        <div className="absolute-placeholder">
          <FontAwesomeIcon icon={faPlayCircle} onClick={playMusicHandler} />
        </div>
        <img src={cover} alt="" />
      </div>
      <div className="playlist-card-content">
        <span className="text-slate-400">
          <FontAwesomeIcon icon={faEye} /> <small>33</small>
        </span>
        <h4 className="text-primary cursor-pointer"  onClick={() => navigate(urls.beat_detail.replace(':beatID', id))}>{title}</h4>
        <span className="text-slate-400">{bpm}BPM</span>
      </div>
    </div>
  );
};



export default MusicCard;
