const express = require("express");
const router = express.Router();
const friendsData = require("../data/friend.js");

function Match(name, photo, answers) {
  this.name = name;
  this.photo = photo;
  this.answers = answers;
}

router.get("/friends", (req, res) => {
  res.send(friendsData);
});

router.post("/friends", (req, res) => {
  var userData = req.body;
  var userName = userData.name;
  var userPhoto = userData.photo;
  var userAnswers = userData.answers;

  var bestMatch;
  var difference = 50;
  var matchDifference;

  for (var i in friendsData) {
    matchDifference = 0;
    for (var j in friendsData[i].answers) {
      matchDifference += Math.abs(friendsData[i].answers[j] - userAnswers[j]);
    }

    if (matchDifference < difference) {
      difference = matchDifference;
      bestMatch = friendsData[i];
    }
  }

  friendsData.push(new Match(userName, userPhoto, userAnswers));
  res.send([bestMatch, difference]);
});

module.exports = router;
