const req = require("express/lib/request");
const db = require("../models");
const Quiz = db.quizzes;

// CREATE: untuk menambahkan data kedalam table quiz
exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.json({
      message: "quiz created successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      data: null,
    });
  }
};

// READ : menampilkan atau mengambil semua data quiz sesuai model dari database
exports.getAll = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json({
      message: "Quizzes retrieved successfully",
      data: quizzes,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// UPDATE : Mengubah data sesuai id yang dikirimkan
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    quiz.update(req.body, { where: { id } });
    res.json({
      message: `data dengan id ${id} berhasil diubah`,
      data: quiz,
    });
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "Some error occurred occured while retrieving quizzes",
      data: null,
    });
  }
};

// DELETE : Menghapus data sesuai id yang dikirimkan
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });

    quiz.destroy();

    res.json({
      message: "Quiz deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "Some error occurred occured while retrieving quizzes",
      data: null,
    });
  }
};

// SHOW_ID : Mengambil data sesuai id yang dikirimkan
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: "Quizzes retrieved successfully with id " + id,
      data: quiz,
    });
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "Some error occurred occured while retrieving quizzes",
      data: null,
    });
  }
};

// SHOW_CATEGORY : Mengambil semua data quiz berdasarkan category tertentu
exports.getByCategoryId = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: { categoryId: id },
  });
  res.json({
    message: "Quizzes retrieved successfully with category " + id,
    data: quizzes,
  });
};

// SHOW_LEVEL : Mengambil semua data quiz berdasarkan level tertentu
exports.getByLevelId = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: { levelId: id },
  });
  res.json({
    message: "Quizzes retrieved successfully with levelt " + id,
    data: quizzes,
  });
};
