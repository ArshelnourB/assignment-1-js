// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var button1 = document.getElementById('noun1');
var button2 = document.getElementById('verb');
var button3 = document.getElementById('adjective');
var button4 = document.getElementById('noun2');
var button5 = document.getElementById('setting');

// Constants for p tag to display query selectors
var chosenNoun1 = document.getElementById('choosenNoun1');
var chosenVerb = document.getElementById('choosenVerb');
var chosenAdjective = document.getElementById('choosenAdjective');
var chosenNoun2 = document.getElementById('choosenNoun2');
var chosenSetting = document.getElementById('choosenSetting');
// Constants for final buttons and p tags
var playback = document.getElementById('playback');
var random = document.getElementById('random')
var story = document.getElementById('story');

var studentId = document.getElementById('studentId');
var nameButton = document.getElementById('name');

// Variables for pre-defined arrays
var nouns = ['clown',
	'teacher', 'moon'];
var verbs = ['jumped', 'laughed', 'smiled'];
var adjectives = ['scary', 'funny','lazy'];
var settings = ['space', 'school', 'London'];
// Variables for count to grab array elements
var count1 = 0
var count2 = 0
var count3 = 0
var count4 = 1
var count5 = 0
chosenNoun1.textContent = nouns[count1];
chosenVerb.textContent = verbs[count2];
chosenAdjective.textContent = adjectives[count3];
chosenNoun2.textContent = nouns[count4];
chosenSetting.textContent = settings[count5];

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    if(count1===2){
        count1=0;
    }
    else{
        count1++;
    }
    var noun1 = nouns[count1];
    chosenNoun1.textContent = noun1;
    console.log(chosenNoun1);
}

function verb_on_click() {
    if(count2===2){
        count2=0;
    }
    else{
        count2++;
    }
    var verb = verbs[count2];
    chosenVerb.textContent = verb;
    console.log(chosenVerb);
}

function adjective_on_click() {
    if(count3===2){
        count3=0;
    }
    else{
        count3++;
    }
    var adjective = adjectives[count3];
    chosenAdjective.textContent = adjective;
    console.log(chosenAdjective);
    if(count3===2){
        count3=0;
    }
    else{
        count3++;
    }
}

function noun2_on_click() {
    if(count4===2){
        count4=0;
    }
    else{
        count4++;
    }
    var noun2 = nouns[count4];
    chosenNoun2.textContent = noun2;
    console.log(chosenNoun2);
}

function setting_on_click() {
    if(count5===2){
        count5=0;
    }
    else{
        count5++;
    }
    var setting = settings[count5];
    chosenSetting.textContent = setting;
    console.log(chosenSetting);
}

// concatenate the user story and display
function playback_on_click() {
    var noun1 = nouns[count1];
    var verb = verbs[count2];
    var adjective = adjectives[count3];
    var noun2 = nouns[count4];
    var setting = settings[count5];
    story.textContent = `The ${noun1} ${verb} at the ${adjective} ${noun2} in ${setting}.`;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var noun1 = nouns[Math.floor(Math.random(0,2))];
    var verb = verbs[Math.floor(Math.random(0,2))];
    var adjective = adjectives[Math.floor(Math.random(0,2))];
    var noun2 = nouns[Math.floor(Math.floor(Math.random(0,2)))];
    var setting = settings[Math.floor(Math.random(0,2))];
    story.textContent = `The ${noun1} ${verb} at the ${adjective} ${noun2} in ${setting}.`;
}

function name_on_click(){
    studentId.textContent = "Arshelnour Boudala [1270455]";
}

/* Event Listeners
-------------------------------------------------- */
button1.addEventListener("click", noun1_on_click);
button2.addEventListener("click", verb_on_click);
button3.addEventListener("click", adjective_on_click);
button4.addEventListener("click", noun2_on_click);
button5.addEventListener("click", setting_on_click);
playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);

nameButton.addEventListener("click", name_on_click);