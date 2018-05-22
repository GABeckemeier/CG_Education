//Captains Page Calculations Example
var Teacher = "Teacher: Jack Sparrow";
var Department = "Skill: Drinking";
var Rating = 'Rating: ';
var jsRatings = [4.3, 2.5, 2.0];
function getRatingAvg (jsRatings) {
  var sum = 0;
  for (i=0; i < jsRatings.length; i++) {
    sum += jsRatings[i];
  }
  sum /= jsRatings.length;
  //it'd be dope to round the number down (later)
  return sum;
}
getRatingAvg(jsRatings);

function addTeacherRating (jsRatings, newRating) {
  var newRating = Number;
  if (newRating <= 5 && newRating >= 0) {
  jsRatings.push(newRating);
  }
  return newRating;
}
addTeacherRating();

/*var question = window.prompt("How piratey was your Captain this semester?");
function promptResponse (response) {
  var response = Number;
  if (response <= 5 && response >= 0) {
    alert("Cheers matey.");
  } else {
    alert("Ye bilge rat! Swab the poop deck! (Ratings should be between 0.0 and 5.0)");
  }
return response;
}
promptResponse();*/

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
  var skill = String;
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
var question = window.prompt('What skill are ye interested in?');
function promptResponse (skill) {
  if (skill == 'Drinking' || 'Swashbuckling' || 'Sailing' || 'Brawling' || 'Thieving') {
    alert("Ye be worthy to learn the pirate's life.");
  } else {
    alert('Walk the plank you landlubber.');
  }
  return skill;
}
promptResponse();

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
