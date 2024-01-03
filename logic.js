// Helpers
const $ = e => document.querySelectorAll(e)

// Elements & Vars
const btnMotherOfSea = $('#mother-of-sea-btn')[0]
const btnLikeHeart = $('#like-heart-btn')[0]
const musicMotherOfSea = $('#mother-of-sea')[0]
const musicLikeHeart = $('#like-heart')[0]
const musics = $('audio')
const welcomeModal = $('#welcome')[0]

btnLikeHeart.addEventListener('click', e => playMusic('like-heart'))
btnMotherOfSea.addEventListener('click', e => playMusic('mother-of-sea'))

function playMusic(musicToPlay) {
  if (musicToPlay === 'mother-of-sea') musicMotherOfSea.play()
  if (musicToPlay === 'like-heart') musicLikeHeart.play()
  welcomeModal.remove()
}