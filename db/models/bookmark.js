'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Bookmark.associate = function(models) {
    
  };
  return Bookmark;
};