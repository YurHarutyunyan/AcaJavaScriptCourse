class Shiritori{
  constructor(){
    this.words= [];
    this.gameOver=false;
  }
   play(word){
    if(this.gameOver===true){
      console.log('u cant resume game, but u can restart it')
      return this.words;
    }else if(this.words.length===0){
      this.words.push(word);
      return this.words;
    }else{
      const previousWord = this.words[this.words.length-1]
      if(previousWord.charAt(previousWord.length-1)===word.charAt(0) 
      && !this.words.includes(word)){
        this.words.push(word)
        return this.words

      }else{
        this.gameOver=true;
        console.log('gameIsOver')
        return this.words;
      }
    }
  }
  restart(){
   this.words = []
   this.gameOver=false;
   console.log('the game is rastarted')
  }
}
let game = new Shiritori();
console.log(game.play('apple'))
console.log(game.play('ear'))
console.log(game.play('fough'))
console.log(game.play('fough'))
game.restart()
