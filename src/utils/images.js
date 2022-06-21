const images = {
  //logo
  logo: require('../assets/images/logo.png'),
  //Splash-Screen
  splash: require('../assets/images/splash_screen.png'),
  //background-Image
  background: require('../assets/images/bg.png'),
  // back button
  back: require('../assets/images/back.png'),
  // setting icon
  setting: require('../assets/images/setting.png'),
  //plus icon
  plus: require('../assets/images/plus.png'),
  //close icon
  close: require('../assets/images/crossimg.png'),
  //location icon
  location: require('../assets/images/locationicon.png'),
  //loading image
  loading: require('../assets/images/loading.gif'),
  //gallery
  gallery: require('../assets/images/gallery.png'),
  //camera
  camera: require('../assets/images/camera.png'),
  //home
  home: require('../assets/images/home.png'),
  //star
  star: require('../assets/images/start.png'),
  //lampoff
  lightoff: require('../assets/images/light_select.png'),
  //lamp
  lighton: require('../assets/images/light_unselect.png'),
  //enrance
  enrance: require('../assets/images/enrance_l.png'),
  //eye
  eye: require('../assets/images/buttoneye.png'),
  //room
  room: require('../assets/images/livingroom.png'),
  //setting menu
  setingmenu: require('../assets/images/settingmenu.png'),
  //building
  building: require('../assets/images/building.png'),
  //room-light
  roomLight: require('../assets/images/room_light.png'),
  //rgb
  rgb: require('../assets/images/room_rgbw.png'),
  //irrigation
  irrigation: require('../assets/images/room_irrigation.png'),
  //audio
  audio: require('../assets/images/room_zaudio.png'),
  //room Camera
  roomCamera: require('../assets/images/room_camera.png'),
  //control
  control: require('../assets/images/room_othercontorl.png'),
  //fan
  fan: require('../assets/images/room_fan.png'),
  //mood
  mood: require('../assets/images/room_mood.png'),
  //menu
  menu: require('../assets/images/menu.png'),
  //dmx
  dmx: require('../assets/images/room_dmx.png'),
  //media
  media: require('../assets/images/room_media.png'),
  //hvac
  hvac: require('../assets/images/room_ac.png'),
  //curtain
  curtain: require('../assets/images/room_curtain.png'),
  //security
  security: require('../assets/images/room_security.png'),
  //schedule
  schedule: require('../assets/images/schedule.png'),
  //power off
  powerOff: require('../assets/images/offcircle.png'),
  //power_on
  powerOn: require('../assets/images/oncircle.png'),
  //cold
  cold: require('../assets/images/accold.png'),
  //heat
  heat: require('../assets/images/acheat.png'),
  //acfan
  acfan: require('../assets/images/acfan.png'),
  //acsetting
  acsetting: require('../assets/images/acsetting.png'),
  //vacation
  vacation: require('../assets/images/vacationsecu.png'),
  //alway
  away: require('../assets/images/away.png'),
  //night
  night: require('../assets/images/nightsecu.png'),
  //guest
  guest: require('../assets/images/nightwithguest.png'),
  //day
  day: require('../assets/images/daysecu.png'),
  //alarm
  alarm: require('../assets/images/disarmsecu.png'),
  //lock
  lock: require('../assets/images/security.png'),
  //buzzer
  buzzer: require('../assets/images/redalram.png'),
  //current_location
  currentLocation: require('../assets/images/current.png'),
  //fire
  fire: require('../assets/images/fire.png'),
  //emergency
  emergency: require('../assets/images/emargency.png'),
  //power
  power: require('../assets/images/power.png'),
  //temperature
  temperature: require('../assets/images/temperature.png'),
  //gas
  gas: require('../assets/images/gas.png'),
  //cloud
  cloud: require('../assets/images/day.png'),
  //night mode
  nightmode: require('../assets/images/night.png'),
  //panic
  panic: require('../assets/images/panic.png'),
  //car
  car: require('../assets/images/siren.png'),
  //unselect
  unselect: require('../assets/images/checkbox_unselect.png'),
  //select
  select: require('../assets/images/check_box_select.png'),
  //smart building
  smartbuilding: require('../assets/images/smartbuilding.jpg'),
  //right arrow
  rightarrow: require('../assets/images/right_arrow.png'),
  //pencil
  edit: require('../assets/images/editimage.png'),
  //toggle on
  toggleOn: require('../assets/images/dmxon.png'),
  //toggle off
  toggleOff: require('../assets/images/dmxoff.png'),
  //bulbOff
  lightOff1: require('../assets/images/light_off.png'),
  //bulbOn
  lightOn1: require('../assets/images/light_on.png'),
  //RedBulb
  RedBulb: require('../assets/images/red_bulb.png'),
  //whiteBulb
  whiteBulb: require('../assets/images/white_bulb.png'),
  //whiteDMX
  whiteDMX: require('../assets/images/white_multi.png'),
  //redDMX
  redDMX: require('../assets/images/red_multi.png'),
  //dot
  dot: require('../assets/images/hot.png'),
  //flowerOn
  flowerOn: require('../assets/images/flower_on.png'),
  //flowerOff
  flowerOff: require('../assets/images/flower_off.png'),
  //soundOn
  soundOn: require('../assets/images/sound_on.png'),
  //soundOff
  soundOff: require('../assets/images/sound_off.png'),
  //windowOn
  windowOn: require('../assets/images/window_on.png'),
  //windowOff
  windowOff: require('../assets/images/room_curtain.png'),
  //heartOn
  heartOn: require('../assets/images/heart_on.png'),
  //heartOff
  heartOff: require('../assets/images/heart_off.png'),
  //arrow
  arrow: require('../assets/images/img_arrow.png'),
  //fanOn
  fanOn: require('../assets/images/fan_on.png'),
  //fanOff
  fanOff: require('../assets/images/fan_off.png'),
  //otherOn
  otherOn: require('../assets/images/other_on.png'),
  //otherOff
  otherOff: require('../assets/images/other_off.png'),
  //treeOn
  treeOn: require('../assets/images/tree_on.png'),
  //treeOff
  treeOff: require('../assets/images/tree_off.png'),
  //musicOn
  musicOn: require('../assets/images/music_on.png'),
  //musicOff
  musicOff: require('../assets/images/music_off.png'),
  //cameraOn
  cameraOn: require('../assets/images/camerontab.png'),
  // cameraOff
  cameraOff: require('../assets/images/camerofftab.png'),
  //temperature icon
  temperatureIcon: require('../assets/images/bigtemprecher.png'),
  //fan
  fanButton: require('../assets/images/fan_btn.png'),
  //fan Fast
  fanFast: require('../assets/images/fan_btn.png'),
  //fan Slow
  fanSlow: require('../assets/images/fan_btn.png'),
  //fan Medium
  fanMedium: require('../assets/images/fan_btn.png'),
  //heat icon
  heatIcon: require('../assets/images/heat_btn.png'),
  //thumb
  thumb: require('../assets/images/hot.png'),
  //frequently
  frequently: require('../assets/images/frequency.png'),
  //fanfour
  fanfour: require('../assets/images/fanfiveon.png'),
  //sdcard
  sdcard: require('../assets/images/sd_card.png'),
  //sdunseclect
  sdunseclect: require('../assets/images/sd_unselected.png'),
  // tv
  tv: require('../assets/images/tv_selected.png'),
  //tvunselect
  tvunselect: require('../assets/images/img_tv.png'),
  //speaker
  speaker: require('../assets/images/specker_selected.png'),
  //speckerunselect
  speckerunselect: require('../assets/images/img_speaker.png'),
  //chrome
  chrome: require('../assets/images/crom_cast.png'),
  // chromeunselect
  chromeunselect: require('../assets/images/img_crom_u.png'),
  // radio
  radio: require('../assets/images/radio_selected.png'),
  //radiounselect
  radiounselect: require('../assets/images/img_radio.png'),
  //imgLeft
  imgLeft: require('../assets/images/img_left.png'),
  // imgRight
  imgRight: require('../assets/images/img_right.png'),
  //imgPlay
  imgPlay: require('../assets/images/img_play.png'),
  //imgPlayque
  imgPlayque: require('../assets/images/img_playque.png'),
  // imgPause
  imgPause: require('../assets/images/img_puse.png'),
  // imgPlus
  imgPlus: require('../assets/images/img_queplus.png'),
  //imgrepeat
  imgrepeat: require('../assets/images/img_repeat.png'),
  //imgStop
  imgStop: require('../assets/images/img_stop.png'),
  //imgStopque
  imgStopque: require('../assets/images/img_stopp.png'),
  // imageup
  imageup: require('../assets/images/img_up.png'),
  //editQueue
  editQueue: require('../assets/images/img_editque.png'),
  //repeat
  repeat: require('../assets/images/repeat_once.png'),
};

export default images;
