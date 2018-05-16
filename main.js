//Captains Page Calculations Example
var Teacher = "Teacher: Jack Sparrow";
var Department = "Skill: Drinking";
var Rating = ('Rating: ');
var jsRatings = [4.3, 2.5, 2.0];
function getRatingAvg (jsRatings) {
  var avg = jsRatings.reduce((total, amount) => total += amount) / jsRatings.length;
  return jsRatings;
  }
console.log(getRatingAvg(jsRatings));


function addTeacherRating (jsRatings, newRating) {
  newRating =
  jsRatings.push(newRating);
  return jsRatings;
}
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
