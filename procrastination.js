
// Create an object to store the phrase options.
const phrases = {
    // Store an array of activities to avoid
    shouldDo: ['work', 'that important phonecall', 'that housework', 'working on your magnum opus', 'sorting out that filing', 'learning to code', 'sending that email'],
    // Store an array of activities to do instead
    couldDo: ['eat some chocolate', 'play video games', 'do literally anything else', 'stare at a wall', 'contemplate the meaining of life'],
    // Store an array of encouraging phrases to add at the end
    stockPhrase: ['You got this', 'Way to prioritise', 'Winning at life'],
    
};

// Randomly choose one element from each array - could this cycle through the properties of phrases instead?
let rubbishActivity = phrases.shouldDo[Math.floor(Math.random() * phrases.shouldDo.length)];
let betterActivity = phrases.couldDo[Math.floor(Math.random() * phrases.couldDo.length)];
let encouragingWords = phrases.stockPhrase[Math.floor(Math.random() * phrases.stockPhrase.length)];
let waitTime = Math.floor(Math.random() * 60);

console.log(`\n*=*=*=*=*=*=*=*=*=*=*=*\nWelcome to the Procrastination Machine!\nPlease enjoy this additional wasted time.\n*=*=*=*=*=*=*=*=*=*=*=*\n`);
console.log(`I think ${rubbishActivity} can wait for at least another ${waitTime} minutes while you go and ${betterActivity} instead. ${encouragingWords}!\n`);
