import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  player: {
    currentTrack: {
      title: null,
      cover: null,
      music: null
    },
    isPlaying: false,
    isOn: false,
  }
}


const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setCurrentTrack: ( state, {payload}) => {
      state.player.currentTrack.title = payload?.title;
      state.player.currentTrack.cover = payload?.cover;
      state.player.currentTrack.music = payload?.music;
    },
    turnOnPlayer: (state,) => {
      state.player.isOn = true
    },
    turnOffPlayer: (state) => {
      state.player.isOn = false
    },
    playMusic: (state) => {
      if(!state.player.isOn){
        state.player.isOn = true
      }
      state.player.isPlaying = true
    },
    stopMusic: (state) => {
      state.player.isPlaying = false
    },
  }
})




export const {turnOnPlayer, turnOffPlayer, playMusic, stopMusic, setCurrentTrack} = uiSlice.actions

export default uiSlice.reducer