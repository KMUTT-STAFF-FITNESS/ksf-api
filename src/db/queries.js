const knex = require("./knex");

module.exports = {
  users: {
    getAll: function () {
      return knex("members");
    },
    getById: function(id){
      return knex('members').where('member_id',id).first()
    },
    createUser: function(user){
      return knex('members').insert(user).returning('*')
    },
    editUser: function(user){
      return knex('members')
    }
  },
};
