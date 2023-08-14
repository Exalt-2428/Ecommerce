const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    name: String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }]
});

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;
