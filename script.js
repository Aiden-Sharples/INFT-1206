// Variable definitions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

// Random array picker
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}


// Raw text strings

// Characters
const characters = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

// Places
const places = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

// Events
const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away"
];


// Random story string
function returnRandomStoryString() {
  // Pick random items
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  // Story Text
  const storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. 
  When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. 
  Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}


// Event listener
generateBtn.addEventListener("click", generateStory);


// Generate Story function
function generateStory() {
  // Generate a fresh random story each click
  let newStory = returnRandomStoryString();

  // Replace Bob with custom name
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  // Convert US → UK units if UK radio is selected
  if (document.getElementById("uk").checked) {

    // Convert 300 pounds → stones
    // 1 stone = 14 pounds
    const weight = Math.round(300 / 14) + " stone";

    // Convert 94°F → Celsius
    // C = (F - 32) × 5/9
    const temperature = Math.round((94 - 32) * 5 / 9) + " Celsius";

    // Replace values in the story
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  // Output the story
  story.textContent = newStory;
  story.style.visibility = "visible";
}
