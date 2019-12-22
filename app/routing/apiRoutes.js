const express = require("express");
const router = express.Router();

function Match(name, photo, answers) {
  this.name = name;
  this.photo = photo;
  this.answers = answers;
}

let matches = [
  new Match("Fake Name", "https://picsum.photos/id/1025/4951/3301", [
    5,
    1,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    1
  ]),
  new Match("Another Fake Name", "https://picsum.photos/id/1062/5092/3395", [
    3,
    1,
    2,
    4,
    4,
    2,
    5,
    1,
    3,
    1
  ])
];

router.get("/friends", (req, res) => {
  console.log("checking");
  res.send(matches);
});

router.post("/friends", (req, res) => {
  var userData = req.body;
  var userName = userData.name;
  var userPhoto = userData.photo;
  var userAnswers = userData.answers;

  var bestMatch;
  var difference = 50;
  var matchDifference;

  for (var i in matches) {
    matchDifference = 0;
    console.log(matches[i].answers);
    for (var j in matches[i].answers) {
      console.log(matches[i].answers[j]);
      matchDifference += Math.abs(matches[i].answers[j] - userAnswers[j]);
      console.log(matchDifference);
    }

    if (matchDifference < difference) {
      difference = matchDifference;
      bestMatch = matches[i];
    }
  }

  matches.push(new Match(userName, userPhoto, userAnswers));
  res.send([bestMatch, difference]);
});

module.exports = router;
