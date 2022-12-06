const {User} = require("../model");

exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = async(req,res) => {
    let data = {
        id : req.body.id,
        name : req.body.name,
        pw : req.body.pw,
        birthday : req.body.birthday,
        age : req.body.age,
    }

    let result = await User.create(data);
    res.send(true);


    // User.post_signup(req.body, function(){
    //     res.send(true);
    // });
}

exports.signin = (req,res) => {
    res.render("signin");
}
exports.post_signin = async(req,res) => {
    let result = await User.findOne({
        where : {
            id : req.body.id,
            pw : req.body.pw
        }
    });
    
    if(result) res.send(true);
    else res.send(false);

    // User.post_signin(req.body.id, req.body.pw, function(result){
    //     if ( result.length > 0 ) res.send(true);
    //     else res.send(false);
    // });
}

exports.profile = async(req,res) => {
    let result = await User.findAll();
    if(result.length > 0)     res.render("profile", {data: result[0]});
    else res.redirect("/user/signin");

    // User.get_user(req.body.id, function(result){
    //     if ( result.length > 0 ) res.render("profile", {data: result[0]});
    //     else res.redirect("/user/signin");
    // })
}

exports.profile_edit = async(req,res) => {
    let data = {
        pw : req.body.pw,
        name : req.body.name, 
        age : req.body.age,
        birthday : req.body.birthday
    }
    let result = await User.update(data,{
        where : {id : req.body.id}
    })
    console.log(result);
    res.send(true);
    // User.update_profile(req.body, function(){
    //     res.send(true);
    // })
}
exports.profile_delete = async(req,res) => {
    let result = await User.destroy({
        where: {id : req.body.id}
    });
    console.log(result);
    res.send(true);

    // User.delete_user(req.body.id, function(){
    //     res.send(true);
    // })
}