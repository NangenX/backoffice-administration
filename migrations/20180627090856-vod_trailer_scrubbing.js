'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('vod', 'trailer_url',{type: Sequelize.STRING(255), allowNull: false, defaultValue: '', after: 'starring'})
        .catch(function(err) {console.log('Adding column vod.trailer_url failed with error message: ',err.message);});
    queryInterface.addColumn('vod', 'vod_preview_url',{type: Sequelize.STRING(255), allowNull: false, defaultValue: '', after: 'starring'})
        .catch(function(err) {console.log('Adding column vod.vod_preview_url failed with error message: ',err.message);});
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('vod', 'trailer_url')
        .catch(function(err) {console.log('Adding column vod.trailer_url failed with error message: ',err.message);});
    queryInterface.addColumn('vod', 'vod_preview_url')
        .catch(function(err) {console.log('Adding column vod.vod_preview_url failed with error message: ',err.message);});
  }
};