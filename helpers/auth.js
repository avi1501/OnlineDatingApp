module.exports={
    requireLogin:(req,res,next)=>{
        if(req.isAuthenticated()){
            return next();
        }else{
            res.redirect('/');
        }
    },
    ensureGuest:(req,res,next)=>{
        if(req.isAuthenticated()){
            res.redirected('/profile');
        }else{
            return next();
        }
    }
}