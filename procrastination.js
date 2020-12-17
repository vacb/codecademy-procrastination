
// Create an object to store the phrase options and a method to output the random procrastination encouragment.
const phrases = {
    
    // Store an array of activities to avoid
    shouldDo: ['work', 'that important phonecall', 'that housework', 'working on your magnum opus', 'sorting out that filing', 'learning to code'],
    
    // Store an array of activities to do instead
    couldDo: ['eat some chocolate', 'play video games', 'do literally anything else'],
    
    // Store an array of encouraging phrases to add at the end
    stockPhrase: ['You got this', 'Way to prioritise', 'Winning at life'],
};

   
let rubbishActivity = phrases.shouldDo[Math.floor(Math.random() * phrases.shouldDo.length)];
let betterActivity = phrases.couldDo[Math.floor(Math.random() * phrases.couldDo.length)];
let encouragingWords = phrases.stockPhrase[Math.floor(Math.random() * phrases.stockPhrase.length)];
let waitTime = Math.floor(Math.random() * 60);

console.log(`I think ${rubbishActivity} can wait for at least another ${waitTime} minutes while you go and ${betterActivity} instead. ${encouragingWords}!`)

