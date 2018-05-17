//Captains Page Calculations Example
var Teacher = "Teacher: Jack Sparrow";
var Department = "Skill: Drinking";
var Rating = 'Rating: ';
var jsRatings = [4.3, 2.5, 2.0];
function getRatingAvg (jsRatings) {
    var total = 0;
    for (var i = 0; i < jsRatings.length; i++) {
      total += jsRatings[i];
    }
    //above for loop attempts to add the indexes of jsRatings array
    return total;
    total /= jsRatings.length;
  }

var newRating = prompt('We would like for you to review . Please enter a rating between 0.0 - 5.0?');
getRatingAvg(jsRatings);
function promptResponse (response) {
if (newRating <= 5.0) {
  alert("Thank you for the feedback!");
} else {
  alert("Yer rating should be between one and five fingers long ye scurvy dog");
}
return newRating;
}


function addTeacherRating (jsRatings, newRating) {
  var response =
  jsRatings.push();//add the new rating into the existing array
  return jsRatings;
}
addTeacherRating();



console.log(jsRatings);
console.log(Teacher);
console.log(Department);
console.log(Rating += getRatingAvg(jsRatings));
//Skills Page Variables Example
var skillsList = [
  ['Drinking', 'Why is all the rum gone?'],
  ['Swashbuckling', 'Walk the plank with style'],
  ['Sailing', 'Love of the open sea'],
  ['Brawling', 'Bonus points if drunk!'],
  ['Thieving', 'Learn to steal the booty']
];
function courseFilter (skill, skillsList) {
  skill = String;
  if (skill == 'Drinking') {
    skill = skillsList[0];
  } else if (skill == 'Swashbuckling') {
    skill = skillsList[1];
  } else if (skill == 'Sailing') {
    skill = skillsList[2];
  } else if (skill == 'Brawling') {
    skill = skillsList[3];
  } else if (skill == 'Thieving') {
    skill = skillsList[4];
    return skill;
  } else {
    return 'Yer not scurvy enough for Pirate Charm School';
  }
}
//not perfect but pretty damn pleased
//finish up final prompt for Challenge 2 using if/else shorthand
courseFilter();
console.log(courseFilter());
var csCourse = ('Swashbuckling');
var ChingShih = ('Ching Shih');
var Term = ('Summer 2018');
//Scallywags Page Calculations Example
var ABonny = ('Anne Bonny');
var ABmail = ('ABonny@gmail.com');
var ABcourse = ('Brawling', 'Drinking');
var ABGpa = (4.5);
var ETGpa = (4.0);
var FDGpa = (3.6);
var GpaAddition = (ABGpa + ETGpa + FDGpa);
var GpaDivide = (GpaAddition / 3);
