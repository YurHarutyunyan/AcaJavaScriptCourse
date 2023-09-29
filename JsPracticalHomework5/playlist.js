class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}
class Playlist {
  index = 0;
  songs = [];
  add(song) {
    this.songs.push(song);
  }
  play() {
    console.log(
      `${this.songs[this.index].title}, ${
        this.songs[this.index].artist
      } started to play`
    );
  }
  next() {
    if (this.index === this.songs.length - 1) {
      var lastIndex = this.index;
      this.index = 0;
      console.log(
        `${this.songs[lastIndex].title} stopped, ${
          this.songs[this.index].title
        } started`
      );
    } else {
      console.log(
        `${this.songs[this.index].title} stopped, ${
          this.songs[this.index + 1].title
        } started`
      );
      this.index += 1;
    }
  }
  stop() {
    console.log(`${this.songs[this.index].title} stopped`);
  }
}
const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);
console.log(playlist.songs);
playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started
