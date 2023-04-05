const db = require("../models");
const Quiz = db.quizzes;

exports.subitOne = async (req, res) => {
  // data yang didapatkan dari inputan oleh pengguna
  const jobsheet = {
    quizId: req.body.quizId,
    answer: req.body.answer,
  };

  try {
    var quiz = await Quiz.findOne({
      where: {
        id: jobsheet.quizId,
      },
    });

    if (jobsheet.answer == quiz.key) {
      res.status(200).json({ message: "benar" });
    } else {
      res.status(200).json({ message: "jawaban benar adalah" + quiz.key });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.submitMany = async (req, res) => {
  // data yang didapatkan dari inputan oleh pengguna
  const jobsheet = {
    quizId: req.body.quizId,
    answer: req.body.answer,
  };

  try {
    let benar = 0;
    let totalSoal = jobsheet.quizId.length;
    // console.log(jobsheet.quizId);

    for (let i = 0; i < totalSoal; i++) {
      const quiz = await Quiz.findOne({
        limit: 1,
        where: {
          id: jobsheet.quizId[i],
        },
        order: [["id", "DESC"]],
      });
      if (quiz.key == jobsheet.answer[i]) {
        benar += 1;
      }
    }
    res
      .status(200)
      .json({
        message: "benar " + benar + " dari " + totalSoal + " soal",
        correct: benar,
        incorrect: totalSoal - benar
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
