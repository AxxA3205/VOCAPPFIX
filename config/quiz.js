const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Quiz = sequelize.define("quiz", {
    quiz: {
      type: Sequelize.STRING,
    },
    a: {
      type: Sequelize.STRING,
    },
    b: {
      type: Sequelize.STRING,
    },
    c: {
      type: Sequelize.STRING,
    },
    d: {
      type: Sequelize.STRING,
    },
    key: {
      type: Sequelize.STRING,
    },
    categoryId: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.BLOB('long'),
    },
  });
  return Quiz;
};
