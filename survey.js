const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable', (name) => {
  rl.question('What\'s an activity you like doing? ', (hobby) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (typeFood) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
              console.log(`Hello, My name is, ${name}. On my spare timemy favourite hobby is: ${hobby}. My favourite music to listen too while ${hobby} is ${music}. My favourite meal is ${meal}. I like ${typeFood}. My favourite sport is ${sport}. My superpower is ${superpower}. My ${superpower} makes me amazing at being a better person and being happy.`)
    
              rl.close();
            });
          });
        });
      });
    });
  });
});


// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!