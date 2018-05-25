'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'tips',
            'authorId',
            {type: Sequelize.INTEGER}
        );
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('quizzes','authorId');
  }
};
