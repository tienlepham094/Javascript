/**
 * 1, Render songs 
 * 2. Scroll topics
 * 3.play/pause/seek
 * 4. Cd rotate
 * 5. Next/prev
 * 6. Random
 * 7. Next/Repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10.play song when click
 */
const $= document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);
const cd=$('.cd');
const heading=$('header h2');
const cdThumb=$('.cd-thumb');
const audio=$('#audio');
const playBtn=$('.btn-toggle-play');
const player=$('.player');
const progress=$('#progress');
const prevBtn =$('.btn-prev');
const nextBtn=$('.btn-next');
const randomBtn=$('.btn-random');
const repeatBtn=$('.btn-repeat');
const playlist=$('.playlist');

const app ={
  currentIndex:0,
  isPlaying:false,
  isRandom:false,
  isRepeat:false,
songs: [
    {
        name:'Driver license',
        singer:'Olivia Rodrigo',
        path:'assets/music/song1.mp3',
        image:'assets/img/song 1.jpg'
        
    },
    {
        name:'Stay',
        singer:'The KID LAROI, Justin Bieber',
        path:'assets/music/song2.mp3',
        image:'assets/img/song 2.jpg'
        
    },
    {
        name:'Die for you',
        singer:'The Weeknd',
        path:'assets/music/song3.mp3',
        image:'assets/img/song 3.jpg'
        
    },
    {
        name:'Gone',
        singer:'Róse',
        path:'assets/music/song4.mp3',
        image:'assets/img/song 4.jpg'
        
    },
    {
      name:'On the ground',
      singer:'Róse',
      path:'assets/music/song5.mp3',
      image:'assets/img/song 5.jpg'
      
  },
  {
    name:'Good 4 u',
    singer:'Olivia Rodrigo',
    path:'assets/music/song5.mp3',
    image:'assets/img/song 1.jpg'
    
},
    
],
/** 
 * 1.Render Song
 */
render: function(){
//render song
const htmls=this.songs.map((song,index)=>{
    return `<div class="song ${index===this.currentIndex?'active':''}" 
    data-index="${index}">
    <div class="thumb" style="background-image: url('${song.image}')">
    </div>
    <div class="body">
      <h3 class="title">${song.name}</h3>
      <p class="author">${song.singer}</p>
    </div>
    <div class="option">
      <i class="fas fa-ellipsis-h"></i>
    </div>
  </div>
  `
})
playlist.innerHTML=htmls.join('');
},
// control events
     handleEvents:function(){
  /**
   * Scroll cd
   */
  const _this=this;
  const cdWidth=cd.offsetWidth;
  document.onscroll=function(){
  const scrollTop= window.scrollY||document.documentElement.scrollTop;
  const newCdWidth= cdWidth-scrollTop;
  // scroll zoom in
  cd.style.width=newCdWidth>0? newCdWidth+'px':0;
  // scroll opacity
  cd.style.opacity=newCdWidth/cdWidth;





/**
 * click play/pause button
 */
}
playBtn.onclick=function(){
  // syntax dom event .play()
  /**
   * play/pause button
   */

  _this.playing=true;
  if(_this.isPlaying==true){
    audio.play();
    player.classList.add('playing');
    cdThumbAnimate.play();
    _this.isPlaying=false;
  }else{
    player.classList.remove('playing');
    audio.pause();
    cdThumbAnimate.pause();
    _this.isPlaying=true;
  }
/**
 * seek song
 */
  audio.ontimeupdate=function(){
  if(audio.duration){
    const progressPercent=Math.floor(audio.currentTime/audio.duration*100);
    progress.value=progressPercent;
  }
}
}
/**
 * Rewind song
 */
progress.oninput=function(e){
const seekTime=e.target.value*audio.duration/100;
audio.currentTime=seekTime;
}
/**
 * Handle CD Rotate
 */
const cdThumbAnimate=cdThumb.animate([{
  transform:'rotate(360deg)'
}],{
  duration:10000,//10 second
  iterations:Infinity
})
cdThumbAnimate.pause()
/**
 * Next song 
 * 
 */
nextBtn.onclick= function(){
  player.classList.add('playing');
  if(_this.isRandom){
    _this.playRandomSong();
  }else {
    _this.nextSong();
    
  }
  audio.play();
  _this.render()
  _this.scrollToActiveSong();
}
/**
 * Prev Song
 */
prevBtn.onclick= function(){
  player.classList.add('playing');
  if(_this.isRandom){
    _this.playRandomSong();
  }else {
    _this.prevSong();
  }
  audio.play();
  _this.render();
  _this.scrollToActiveSong();

},
/**
 * Random song
 */
randomBtn.onclick=function(e){
  _this.isRandom=!_this.isRandom;
  randomBtn.classList.toggle('active',_this.isRandom);
_this.playRepeatSong();
_this.render();
},
/**
 * Next song when audio ended
 */
audio.onended=function(){
  if(_this.isRepeat){
  audio.play();
  }else{
    //auto next
  nextBtn.click();

  }
}
/**
 * Repeat song
 */
repeatBtn.onclick=function(e){
  _this.isRepeat=!_this.isRepeat;
  repeatBtn.classList.toggle('active',_this.isRepeat);
 
}
 // click song and play
playlist.onclick=function(e){
  const songNode=e.target.closest('.song:not(.active)');
if(
  songNode||
  e.target.closest('.option')
  ){
    if(songNode){
    _this.currentIndex=Number(songNode.getAttribute('data-index'));
    _this.loadCurrentSong();
    _this.render();
    player.classList.add('playing');
    audio.play();

    }

}
}



     },







/**
 * 
 */
defineProperties:function(){
Object.defineProperty(this,"currentSong",{
  get: function(){
    return this.songs[this.currentIndex];
  }
});
},

loadCurrentSong:function(){
heading.textContent=this.currentSong.name;
cdThumb.style.backgroundImage=`url('${this.currentSong.image}')`;
audio.src=this.currentSong.path;
},
/**
 * Next Song
 */
nextSong:function(){
  this.currentIndex++;
  if(this.currentIndex>=this.songs.length){
    this.currentIndex=0;
  }
  this.loadCurrentSong();
},
prevSong:function(){
  this.currentIndex--;
  if(this.currentIndex<0){
    this.currentIndex=this.songs.length -1;
  }
  this.loadCurrentSong();
},
playRandomSong: function(){
  var newIndex;
do{
  newIndex= Math.floor(Math.random()*(this.songs.length))
} while(newIndex===this.currentIndex)
this.currentIndex=newIndex;
this.loadCurrentSong();
},

scrollToActiveSong:function(){
setTimeout(()=>{
  $('.song.active').scrollIntoView({
    behavior: 'smooth',
    block:'nearest'
  })
},500)
},

start: function(){
  // define attribute for object
  this.defineProperties();

  //listen and handle Events
  this.handleEvents();

  //Load current song into UI when reload
  this.loadCurrentSong();

  // Render playlist song
  this.render();
},
}
app.start()
