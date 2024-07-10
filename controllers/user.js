const User = require('../models/user');

async function handleCreateUser(req, res) {
    const  body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg: 'ALl fields are required'});
    }

    const result = await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email: body.email,
        gender : body.gender,
        jobTitle: body.job_title
    });

    return res.status(201).json({msg: "Success",id:result._id})
}

async function getAllUsers(req, res) {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
    ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    <ul>
    `
    return res.json(html)
}

async function handleGetUserById(req, res) {
    const userID = req.params.id;
    const user = await User.findById(userID);
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, {email: "Changed"})
    return res.json({status: "Success"});
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Success"});
}


module.exports = {
    handleCreateUser,
    getAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById
}