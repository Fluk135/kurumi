document.addEventListener('DOMContentLoaded', () => {
  const randomSongButton = document.getElementById('randomSongButton');
  const songResult = document.getElementById('songResult');

  randomSongButton.addEventListener('click', () => {
    const songs = [
      'https://www.youtube.com/watch?v=yQxyKIRu_UQ&pp=ygUJeW91IGFuZCBp',
      'https://www.youtube.com/watch?v=RNb0cVhryy8&pp=ygU24Liq4Li14LmB4LiK4LiX4Lia4LmI4LiE4Li34Lit4LmA4LiB4LmI4Liy4LmB4Lil4LmJ4Lin',
      'https://www.youtube.com/watch?v=mphz2OVedWY&list=PLfd16Hem7lkFmmYhfRnhpv2z6932o-l1B&index=4&pp=gAQBiAQB8AUB',
      'https://https://www.youtube.com/watch?v=RMo3SR1G1yg&list=PLfd16Hem7lkFmmYhfRnhpv2z6932o-l1B&index=6&pp=gAQBiAQB8AUB',
      'https://www.youtube.com/watch?v=Jpl95e4FDR8&list=PLfd16Hem7lkFmmYhfRnhpv2z6932o-l1B&index=8&pp=gAQBiAQB8AUB'
    ];
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];
    songResult.innerHTML
  });
});