//Initial Teacher prototype object
function Teacher () {}
Teacher.prototype = {
  constructor: Teacher,
  this.name: name,
  this.department: department,
  this.ratings: ratings,
  addRating: function(newRating) {
    var newRating = Number;
    if (newRating <= 5 && newRating >= 0) {
      this.ratings.push(newRating);
    }
  },
  getRatingAvg: function(ratings) {
    var sum = 0;
    for (i = 0; i < this.ratings.length; i++) {
      sum += this.ratings[i];
    }
    sum /= this.ratings.length;
  }
};
var jsRatings = [4.3, 2.5, 2.0];

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

//JS Challenge III Prompt Attempts
var gradYearPrompt = window.prompt('What is yer year of graduation from Pirate Prep School?');
function gradYearPromptResponse (Number) {
  if (Number <= 2018) {
    alert('Ye are worthy to enter these dirty halls');
  } else if (Number > 2018) {
    alert('Ye not be old enough to get scurvy, finish Pirate Prep first.');
  } else {
    alert('Enter a numerical year here, ding bat');
  }
  return Number;
}
gradYearPromptResponse (2020);

var welcomePiratePrepGrad = function (rank) {
  alert('Welcome to Pirate Charm School ' + rank + '.');
  return rank;
}
var welcomePiratePrepStudent = function (rank) {
  alert('Yer nothin but a lowly ' + rank + '. SCRAM!');
  return rank;
}

function welcomeStudentsByGraduatingClass (gradMonth, gradYear, welcome) {
  if (gradMonth == December && gradYear <= 2018) {
    welcome = welcomePiratePrepGrad(Privateer);
  } else if (gradMonth == May && gradYear <= 2018) {
    welcome = welcomePiratePrepGrad(Privateer);
  } else (gradYear > 2018) {
    welcome = welcomePiratePrepStudent(BilgeRat);
  }
}
//end of JS Challenge III Attempt
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
