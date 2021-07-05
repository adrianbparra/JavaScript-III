/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;


  // this.destroy = function () {
  //   return `${this.name} was removed from the game.`
  // }
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charAttributes) {
  GameObject.call(this, charAttributes);

  this.healthPoints = charAttributes.healthPoints;
  
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(str) {
  if(this.heroName) {
    return `${this.heroName} took ${str} damage`
  } else if (this.villainName) {
    return `${this.villainName} took ${str} damage`
  } else return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(char) {
  CharacterStats.call(this, char);
  this.team = char.team;
  this.weapons = char.weapons;
  this.language = char.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

/*
 === Hero (Having powers that are great than an humanoid)
*/

function Hero(prop){
  Humanoid.call(this, prop);
  this.powers = prop.powers;
  this.heroName = prop.heroName;
  this.hasCape = prop.hasCape;
  this.strength = prop.strength;
}

//uses power toward villain
// Hero.prototype.usePower = function(char,damage) {
  
//   return `${this.heroName} has applied ${damage} damage to ${char.villainName}`
// }

Hero.prototype = Object.create(Humanoid.prototype);
// Test you work by un-commenting these 3 objects and the list of console logs below:


/*////////////////////////////////////////////////
===================== Villian ===================
  (Having powers to try to destroy the world)
////////////////////////////////////////////////////*/
Villain.prototype = Object.create(Humanoid.prototype);


function Villain (prop) {
  Humanoid.call(this, prop);
  this.powers = prop.powers;
  this.villainName = prop.villainName;
  this.strength = prop.strength;
  
}


//function that the his power was used.
Villain.prototype.usePower = function(char, move) {
  let movePower = this.powers[move];
  let strength = this.strength;
  //console.log(movePower);
  char.healthPoints -= strength;
  console.log(char.healthPoints);
  let health = char.healthPoints;

  


  //console.log(`${this.villainName} has applied ${movePower} to ${char.heroName}`)
  console.log(char.takeDamage(strength))

  return `${this.villainName} has applied ${movePower} to ${char.heroName}`;
}


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  ///HERO//////////////////////////
  const flash = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 12,
    name: "Barry Allen",
    heroName: "Flash",
    team: "DC Comics",
    language: "English",
    hasCape: false,
    powers: ["Speed"],
    strength: 2,
  })
  //////VILLIAN//////////////////////
  const captaincold = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: "Leonard Snart",
    villainName: "Captian Cold",
    team: "Rogues",
    language: "English",
    powers: ["cold beam", "cold field", "ice granade"],
    strength: 2,
  })

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  ////////////HERO // VILLAIN///////////
  console.log(flash.healthPoints)
  console.log(flash.heroName);
  console.log(captaincold.usePower(flash,0));
  console.log(flash.healthPoints);
  //console.log(flash.takeDamage())
  
  //console.log(captaincold.attacked(flash))

