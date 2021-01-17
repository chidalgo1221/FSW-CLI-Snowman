const readLineSync = require('readline-sync');
const dictionary = ["able", "about", "account", "acid", "across", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", "angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance", "ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", "foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", "married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night", "noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", "operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", "record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", "round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", "seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", "test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", "tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", "wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", "white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]
let gameStats = {
    guessedLetters: [],
    numberOfGuesses: 10,
    guessCounter: [],
    wrongGuess: [],
    randomWord: dictionary[Math.floor(Math.random() * dictionary.length)],
    gameBoard: []
}

const play = () =>{
  let name = readLineSync.question("What is your name?")
  console.log("Hello" + " " + name + " " + "Welcome to my guessing game!")
  console.log("When prompted to enter a letter, press any letter (a-z) on the keyboard to guess a letter." + "\r\n" +
  "Keep guessing letters. When you guess a letter, your choice is either correct or incorrect." + "\r\n" +
  "If incorrect, the letter you guessed does not appear in the word." + "\r\n" + 
  "For every incorrect guess, the number of guesses remaining decrease by 1." + "\r\n" +
  "If correct, the letter you guessed appears in the word." + "\r\n" +
  "If you correctly guess all the letters in the word before the number of guesses remaining reaches 0, you win." + "\r\n" +
  "If you run out of guesses before the entire word is revealed, you lose. Game over." + "\r\n")
  if(readLineSync.keyInYNStrict("Are you ready to play")){
    console.clear
    startGame()
  }else{
    quitGame()
  }
}

const startGame = () =>{
  gameStats.guessedLetters = gameStats.randomWord.split('')
  for(let i = 0; i < gameStats.randomWord.length; i++){
    gameStats.gameBoard.push("_")
  }
  input = gameStats.gameBoard.join(" ")
  console.log(input)
  remainingGuesses()  
}

const remainingGuesses = () =>{
  if(gameStats.numberOfGuesses > 0){
    console.log("Remaining Guesses: " + gameStats.numberOfGuesses);
  }
  guess = getValidLetterGuess()
  if(gameStats.guessCounter.includes(guess)){
    console.log("You already used that letter buddy");
    remainingGuesses()
  }else{
    validLetter()
  }
}

const validLetter = () => {
    if(gameStats.guessedLetters.includes(guess)){
      correctLetters(gameStats.guessedLetters, guess)
   }else{
     wrongGuesses()
   }
  }
    

  const correctLetters = (guessedLetters, guess) => {
    let indexWord = []
    guessedLetters.forEach((el, i) => {
      if(el === guess){
        indexWord.push(i)
      }
    });
      indexWord.forEach((el) => {
        gameStats.gameBoard.splice(el, 1, guess)
      });
      answer = gameStats.gameBoard.join(" ")
      console.log("Your Guesses: " + gameStats.wrongGuess)
      console.log(answer)
      gameStats.guessCounter.push(guess)
      if(gameStats.gameBoard.indexOf("_") < 0){
        console.log("Winner Winner Chicken Dinner")
        process.exit()
      }else{
        remainingGuesses()
      }
  }

  const wrongGuesses = () => {
    gameStats.wrongGuess.push(guess)
    gameStats.guessCounter.push(guess)
    console.log("Guessed Letters: " + gameStats.wrongGuess)
    gameStats.numberOfGuesses--
    word = gameStats.gameBoard.push(guess)
    console.log(gameStats.gameBoard.join(" "))
    if(gameStats.numberOfGuesses === 0){
      console.log("Loser Loser " + "The correct word is: " + gameStats.randomWord)
    }else{
      remainingGuesses()
    }
  }

// const gameEnd = () =>{
//   if(gameStats.numberOfGuesses === 0){
//     console.log("Game Over!")
//     console.log(`The correct word was ${gameStats.randomWord}`)
//     quitGame()
//   }else if(!gameStats.gameBoard.includes('_')){
//     console.log(`Winner! You guess the word in ${gameStats.guessCounter} guesses total`)
//     console.log(`The word was ${gameStats.randomWord}`);
//     quitGame()
//   }
// }

function getValidLetterGuess() {
  function guessIsValid(letter) {
    return letter.length === 1 && letter.toUpperCase() != letter.toLowerCase()
  }
  let letter = ""
  while (!letter) {
    let input = readLineSync.question("Please enter your guess: ")
    if (guessIsValid(input)) {
      letter = input
    } else {
      console.log("Please enter a valid letter")
    }
  }
  return letter.toLowerCase()
}

const quitGame = () => {
  console.log("Oh well, I wish you could've stayed and play. Goodbye!")
  process.exit();
}
play()

// _ _ _ _ function displaySpots => loop through the length of the word and print the dashes
//Keep record of incorrect guess, run the guessvalidletter function
//Check if the letter is included in the string, if so print the letter in the correct space
//If not then subtract one from the incorrect guesses
// check if the user has won the game/ or if the user has ran out of guesses before asking again