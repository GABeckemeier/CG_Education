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
console.log(Rating);
//Skills Page Variables Example
var Course = ('Swashbuckling');
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
console.log(GpaAddition);
console.log(GpaDivide);
