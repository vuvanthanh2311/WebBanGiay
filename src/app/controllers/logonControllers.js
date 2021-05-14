const User = require('../modules/Users');
const { mutipleMongooseObject } = require('../../util/mongoose');
const { MongooseObject } = require('../../util/mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { render } = require('node-sass');


const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')

dotenv.config()



class logonController {

    signin(req, res) {
        res.render('logon/signin')
    }
    signup(req, res) {
        res.render('logon/signup')
    //    const a = ls.get('id')
    //     console.log(a)
    //     ls.clear();
      
    }
    store(req, res, next) {

        const Data = req.body;
        const user = new User(Data);
        user.save();
        res.json(Data);
    }

    async login(req, res, next){    
        
        const user = await User.findOne({email: req.body.email });
        if(!user) return res.status(400).send('email not found');
        

        // const validPass = await bcrypt.compare(req.body.password, user.password)
        // if(validPass) return res.status(400).send('Invalid pass');

        if(req.body.password===user.password){

      
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        
        res.cookie("token", token, {
            httpOnly: false,
        });
      //  client.SET(userId,token,'EX',30 , (err,reply) => {
      //    if(err){
      //      console.log(err.message  )
      //    }
      //  })
       
        // localStorage.setItem("token", "abc");
        // localStorage.getItem("token");
      
      
       console.log(token)
         res.redirect('/');
         
        }else
      {
          res.status(400).send('pass not exacli')
      }
    
      
      }

      logout(req,res,next){

        const token = req.cookies.token;
        res.clearCookie("token");
        res.redirect("/")
        
      }
      
     

      profile(req,res,next){
          
        
        const token = req.cookies.token;
          const user = jwt.verify(token, process.env.TOKEN_SECRET);
          req.user= user;
        //   console.log(req.user);
          const userId = req.user._id
          
           
       
          User.findOne({_id:userId})
          .then((user)=>{
              res.render('logon/profile',{
                user: MongooseObject(user),
              });
          })
          .catch(next);

        console.log(token)
     
      } 

    
      
}
    module.exports = new logonController();