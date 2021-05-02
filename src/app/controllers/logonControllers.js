const User = require('../modules/Users');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
var ls = require('local-storage');
const { render } = require('node-sass');



class logonController {
    signin(req, res) {
        res.render('logon/signin')
    }
    signup(req, res) {
        res.render('logon/signup')
    //    const a = ls.get('id')
    //     console.log(a)
      
    }
    store(req, res, next) {

        const Data = req.body;
        const user = new User(Data);
        user.save();
        res.json(Data);
    }

    login(req, res, next){     
      const email = req.body.email;
      const password = req.body.password;
      User.findOne({email: email , password: password} , function(err,user){
          if(user)
          {          
            // req.session.user = user._id;  
            res.redirect('/');
            const id_user = user._id;
            
            
        //    ls.set('id','acb');
        //    ls('thong','abc')
           ls.set('id',id_user)
        //    const a = ls.get('id')
        //    console.log(a)   
            //  localStorage.setItem(id_user,arr);
            // console.log(req.session.user);
            
          }else{         
          }
      })
      }

      profile(req,res,next){
          const userId = ls.get('id')
          console.log(userId)
          User.findOne({_id:userId})
          .then((user)=>{
              res.render('logon/profile',{
                user: MongooseObject(user),
              });
          })
          .catch(next);

          
      } 
      
    

}
    module.exports = new logonController();