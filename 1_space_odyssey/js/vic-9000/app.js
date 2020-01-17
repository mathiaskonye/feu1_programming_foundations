/*
____/\\\\\\\\\_________/\\\\\\\_______/\\\\\\\\\_________/\\\\\\\__________
 __/\\\///////\\\_____/\\\/////\\\___/\\\///////\\\_____/\\\/////\\\________
  _\///______\//\\\___/\\\____\//\\\_\///______\//\\\___/\\\____\//\\\_______
   ___________/\\\/___\/\\\_____\/\\\___________/\\\/___\/\\\_____\/\\\_______
    ________/\\\//_____\/\\\_____\/\\\________/\\\//_____\/\\\_____\/\\\__/\\\_
     _____/\\\//________\/\\\_____\/\\\_____/\\\//________\/\\\_____\/\\\_\///__
      ___/\\\/___________\//\\\____/\\\____/\\\/___________\//\\\____/\\\________
       __/\\\\\\\\\\\\\\\__\///\\\\\\\/____/\\\\\\\\\\\\\\\__\///\\\\\\\/____/\\\_
        _\///////////////_____\///////_____\///////////////_____\///////_____\///__

_____/\\\\\\\\\____________________/\\\\\\\\\\\_____/\\\\\\\\\\\\\________/\\\\\\\\\____________/\\\\\\\\\___/\\\\\\\\\\\\\\\_
 ___/\\\\\\\\\\\\\________________/\\\/////////\\\__\/\\\/////////\\\____/\\\\\\\\\\\\\_______/\\\////////___\/\\\///////////__
  __/\\\/////////\\\______________\//\\\______\///___\/\\\_______\/\\\___/\\\/////////\\\____/\\\/____________\/\\\_____________
   _\/\\\_______\/\\\_______________\////\\\__________\/\\\\\\\\\\\\\/___\/\\\_______\/\\\___/\\\______________\/\\\\\\\\\\\_____
    _\/\\\\\\\\\\\\\\\__________________\////\\\_______\/\\\/////////_____\/\\\\\\\\\\\\\\\__\/\\\______________\/\\\///////______
     _\/\\\/////////\\\_____________________\////\\\____\/\\\______________\/\\\/////////\\\__\//\\\_____________\/\\\_____________
      _\/\\\_______\/\\\______________/\\\______\//\\\___\/\\\______________\/\\\_______\/\\\___\///\\\___________\/\\\_____________
       _\/\\\_______\/\\\_____________\///\\\\\\\\\\\/____\/\\\______________\/\\\_______\/\\\_____\////\\\\\\\\\__\/\\\\\\\\\\\\\\\_
        _\///________\///________________\///////////______\///_______________\///________\///_________\/////////___\///////////////__
_______/\\\\\________/\\\\\\\\\\\\______/\\\________/\\\______/\\\\\\\\\\\________/\\\\\\\\\\\_____/\\\\\\\\\\\\\\\___/\\\________/\\\_
 _____/\\\///\\\_____\/\\\////////\\\___\///\\\____/\\\/_____/\\\/////////\\\____/\\\/////////\\\__\/\\\///////////___\///\\\____/\\\/__
  ___/\\\/__\///\\\___\/\\\______\//\\\____\///\\\/\\\/______\//\\\______\///____\//\\\______\///___\/\\\________________\///\\\/\\\/____
   __/\\\______\//\\\__\/\\\_______\/\\\______\///\\\/_________\////\\\____________\////\\\__________\/\\\\\\\\\\\__________\///\\\/______
    _\/\\\_______\/\\\__\/\\\_______\/\\\________\/\\\_____________\////\\\____________\////\\\_______\/\\\///////_____________\/\\\_______
     _\//\\\______/\\\___\/\\\_______\/\\\________\/\\\________________\////\\\____________\////\\\____\/\\\____________________\/\\\_______
      __\///\\\__/\\\_____\/\\\_______/\\\_________\/\\\_________/\\\______\//\\\____/\\\______\//\\\___\/\\\____________________\/\\\_______
       ____\///\\\\\/______\/\\\\\\\\\\\\/__________\/\\\________\///\\\\\\\\\\\/____\///\\\\\\\\\\\/____\/\\\\\\\\\\\\\\\________\/\\\_______
        ______\/////________\////////////____________\///___________\///////////________\///////////______\///////////////_________\///________

      ============================================================================================
        TIMELINE of EVENTS
      ============================================================================================
       2001: A Space Odyssey spans from the dawn of man to its title year.
             Stone Age Earth:
             In the presence of a mysterious black obelisk, pre-humans discover the use
             of tools -- and weapons -- violently taking first steps toward intelligence.

        1999: On Earth's moon astronauts uncover another mysterious black obelisk.

        2001: Between Earth and Jupiter, the spacecraft's intelligent computer makes a mistake that
              kills most of the human crew -- then continues to kill to hide its error.

        2020: The sole survivor of the journey to Jupiter ascends to the next level of humanity.
 */

/*
  You are the sole survivor who will make the journey to Jupiter.

  But before you can leave you must build an autonomous humanoid robot to help you on your mission.

  This humanoid will be used to perform dangerous and mission critical tasks on your journey to Jupiter.
  - space walks to repair the spaceship
  - fight off alien creatures
  -

  The humanoid is your doppelgänger, a sentient being that will help you save man from extinction by keeping you alive.

  Using JavaScript build the software that will allow us to describe and programme the humanoid to do our bidding.
  */

/* ______   __  __   ______  ______
        _..._
      .'     '.      _
     /    .-""-\   _/ \
   .-|   /:.   |  |   |
   |  \  |:.   /.-'-./
   | .-'-;:__.'    =/
   .'=  *=|Noroff_.='
  /   _.  |    ;
 ;-.-'|    \   |
/   | \    _\  _\
\__/'._;.  ==' ==\
         \    \   |
         /    /   /
         /-._/-._/
  ...    \   `\  \
          `-._/._/


 1. CREATE DROID::::::
    Below are all the variables needed to initialize an android into consciousness in its default state.
    a. assign the correct values to the variables below,
    b. ensure to choose the correct values and datatypes
    c. the droid should be built in your likeness (a human, with human features, 2 arms, legs etc)
*/
var isAlive = true;
var name = "Bot";
var hasJetPack = true;
var suitColor = "black";
var eyes = 2;
var eyeColor = "green";
var hairColor = "reddish brown";
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = false;
var hasWeapon = false;
var isInGoodMood = false;

console.log("\u{1F916} .-.-. Booting .-.-.");
console.log(
  name,
  isAlive,
  hasJetPack,
  eyes,
  eyeColor,
  hairColor,
  legs,
  arms,
  hands,
  ears,
  canWalk,
  canFly,
  hasWeapon
);


/*
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid
       cannot go outside, console log the correct log based on that condition.
*/
console.log(
  "\u{1F6F0} BROKEN SATELLITE::::::"
);

if (hasJetPack === true) {
  console.log("JetPack is enabled!!! off I go outside to fix the satellite");
} else {
  console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
}


/*
 3. METEOR SHOWER::::::
    On your way to Jupiter you encounter a massive meteor shower that could damage the ship, you need to redirect the ship to a new safe location.
    a) Using a for loop iterate through the responses array and choose the appropriate response to get out of danger.
      create an if condition in your loop to print only 1 response using a comparison operator.
*/

//1. create a for loop and iterate through the responses array, and choose the appropriate response to get out of danger
//2. create an if condition in the loop and print 1 response using a comparison operator
console.log(
  "\u{1F327} METEOR SHOWER::::::"
);

var responses = [
  "Call basecamp and ask for assistance, but they are far away",
  "Do nothing, just push through",
  "initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
  "ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
];

var allResponses = responses.length;

for (var singleResponse = 0; singleResponse <= allResponses; singleResponse++) {
  if (singleResponse[1] === allResponses[1]) {
    console.log(responses[1]);
    console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");
    break;
  }
}


/*
 4. ALIENS SPACE CRAFT ENCROACHING::::::
    Alien craft approaches its an enemy for sure...you need to shoot it down!!
    a) convert the pseudoscope to real code
       create the required variables below and fill in the correct values and dataTypes to make
       the if statements pass so that photonLaser fires pew pew pew.

console.log(
  "\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::"
);

// a.
var ___;
var ___;
var ___;
var ___;

/*
  If its an enemyCraft && photonLaser && photonLaserEnabled
      IF bullets is greater than or equal to 100
          shoot 100 photon-lazers by printing this log 100 times:
          console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!"); (use a loop)
        ELSE
          console.log("\u{1F9E8} DEAD \u{1F9E8} ");
*/
console.log(
  "\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::"
);

var enemyCraft = true;
var photonLaser = true;
var photonLaserEnabled = true;
var bullets = 200;

if (enemyCraft && photonLaser && photonLaserEnabled === true) {
  if (bullets >= 100) {
    for (var singleBullet = 1; singleBullet <= 100; singleBullet++) {
      console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!");
    }
  } else {
    console.log("\u{1F9E8} DEAD \u{1F9E8} ");
  }
}


/*
 5. LUNAR LANDING:::::
    We got word of an extra terrestrial sighting on the moon... we have been tasked to land on the moon
    to investigate it, we have aboard a NASA lunar module https://en.wikipedia.org/wiki/Apollo_Lunar_Module
    This module will allow to land safely on the moon with the aid of the landing radar which takes inputs.

    Ensure the correct co-ordinates and approach speed are entered into the landing radar.
    It's all automated we just have to ensure that the correct values are input ie. not undefined.

    The lunar radar accepts approach speeds in increments of hundreds only, starting at 0 and maxing out at 700.

    You cannot edit the lunarRadar object directly you have to pass your values in via an interface called variables.

    tip: varName.keyName (this is how to extract a value from an object)
*/
console.log(
  "\u{1F311} LUNAR LANDING:::::"
);

var lunarRadar = {
  isEnabled: undefined,
  long: undefined,
  lat: undefined,
  approachSpeed: undefined,
}

lunarRadar.isEnabled = true;
lunarRadar.long = 1; //just adding something random
lunarRadar.lat = 1; //just adding something random
lunarRadar.approachSpeed = 200;

// Level 1 v1:
// using the code we are supposed to and not changing it
// right now the code does not support speed 299 and 101-199, speed limit is infinite ("decrease pitch" outputs no matter the speed after 600)
if (lunarRadar.isEnabled && lunarRadar.long !== undefined && lunarRadar.lat !== undefined) {
  console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");
  if (lunarRadar.approachSpeed >= 200 && lunarRadar.approachSpeed < 299) {
    console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
  } else if (lunarRadar.approachSpeed >= 300) {
    console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 400) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 500) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 600) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed <= 100) {
    console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
  } else {
    console.log('Please enter an approach speed');
  }
} else {
  console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
}

/*
// Level 1 v2:
// editing the code adding support for "The lunar radar accepts approach speeds in increments of hundreds only, starting at 0 and maxing out at 700."
// adding speed limit (after 700 else "you went down like a" executes)
// making sure "Please enter an appropriate approach speed" executes if invalid speed input
if (lunarRadar.isEnabled && lunarRadar.long !== undefined && lunarRadar.lat !== undefined) {
  console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");
  if (lunarRadar.approachSpeed === 100) { //speed 100
    console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
  } else if (lunarRadar.approachSpeed === 200) { //speed 200
    console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
  } else if (lunarRadar.approachSpeed === 300) { //speed 300
    console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed === 400) { //speed 400
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed === 500) { //speed 500
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed === 600) { //speed 600
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed === 700) { //speed 700
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 701) { //speed over 701
    console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
  } else { //invalid speed inout
    console.log('Please enter an appropriate approach speed (100, 200, 300 or 400 etc.).');
  }
}
*/

/*
// Level 2:
// editing code so it supports all speed limits and making sure default and "you went down like" execute at appropriate times
console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");

switch (true) {
  case (lunarRadar.approachSpeed <= 199): //speed 0-199
    console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
    break;
  case (lunarRadar.approachSpeed >= 200): //speed 200-299
    console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
    break;
  case (lunarRadar.approachSpeed >= 300): //speed 300-399
    console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
    break;
  case (lunarRadar.approachSpeed >= 400): //speed 400-499
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    break;
  case (lunarRadar.approachSpeed >= 500): //speed 500-599
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    break;
  case (lunarRadar.approachSpeed >= 600): //speed 600-700
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    break;
  case (lunarRadar.approachSpeed >= 701): //speed over 701
    console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
    break;
  default: //invalid input
    console.log('Please enter an appropriate approach speed (100, 200, 300 or 400 etc.).');
}
*/


/*
 6. PLANETARY INFO-DASH:::::
 Level 1::::::::::::::
 Given this array of planets using what you know about how to access data in an arrays index log out the:
  - Description,
  - Surface temperature and
  - Mass
  in the console logs bellow.
  tip: pass your variables into the console.log after comma ,

  Level 2::::::::::::::
  Add 2 New planets of your choosing to the front of the Array : https://nineplanets.org
*/
console.log("\u{1F319} PLANETARY INFO-DASH:::::");

var planets = [
  ["MERCURY",
    [
      "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
      "-173 to 427°C",
      "330,104,000,000,000 billion kg (0.055 x Earth)"
    ],
  ],
  ["JUPITER",
    [
      "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.",
      "-108°C",
      "1,898,130,000,000,000,000 billion kg (317.83 x Earth)"
    ],
  ],
  ["EARTH",
    [
      "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.",
      "110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower",
      "6.6 sextillion tons"
    ],
  ],
  ["MARS",
    [
      "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.",
      "87 to -5 °C",
      "641,693,000,000,000 billion kg (0.107 x Earth)"
    ],
  ],
];

// Level 2
planets.unshift(
  ["NEPTUNE",
  [
    "Neptune is the fourth largest and the farthest planet of the Solar System with the most powerful wind speeds out of all the planets. It is the smallest of the gas giants and is the first planet to be discovered by mathematical predictions in 1846.",
    "-201°C",
    "102,410,000,000,000,000 billion kg (17.15x Earth)"
  ],
],
["VENUS",
  [
    "The second planet from the Sun and the sixth largest. Together with Mercury, they are the only planets without a satellite, even though Mercury is closer to the sun, Venus is the hottest planet.",
    "462° C",
    "4,867,320,000,000,000 billion kg (0.815 x Earth)"
  ],
],
);

// Level 1 and 2
console.group(planets[0][0]); // Neptune.
console.log("Description:", planets[0][1][0]);
console.log("Surface temperature:", planets[0][1][1]);
console.log("Mass:", planets[0][1][2]);
console.groupEnd();

console.group(planets[1][0]); // Venus.
console.log("Description:", planets[1][1][0]);
console.log("Surface temperature:", planets[1][1][1]);
console.log("Mass:", planets[1][1][2]);
console.groupEnd();

console.group(planets[2][0]); // Mercury.
console.log("Description:", planets[2][1][0]);
console.log("Surface temperature:", planets[2][1][1]);
console.log("Mass:", planets[2][1][2]);
console.groupEnd();

console.group(planets[3][0]); // Jupiter.
console.log("Description:", planets[3][1][0]);
console.log("Surface temperature:", planets[3][1][1]);
console.log("Mass:", planets[3][1][2]);
console.groupEnd();

console.group(planets[4][0]); // Earth.
console.log("Description:", planets[4][1][0]);
console.log("Surface temperature:", planets[4][1][1]);
console.log("Mass:", planets[4][1][2]);
console.groupEnd();

console.group(planets[5][0]); // Mars.
console.log("Description:", planets[5][1][0]);
console.log("Surface temperature:", planets[5][1][1]);
console.log("Mass:", planets[5][1][2]);
console.groupEnd();
