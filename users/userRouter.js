const express = require('express');
const coolRouter = require('./userDb')
const hotRouter = require('../posts/postDb')
const router = express.Router();

router.post('/', validateUser, (req, res) => {
  // do your magic!
  coolRouter.insert(req.body)
            .then(subj =>{
                console.log('Name added', subj)
                res.status(201).json(subj);
            })
            .catch(error =>{
              console.log(error);
              res.status(500).json({
                errorMessage:
                " No luck with the post request!"
              });
            })
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // do your magic!
  const {text} = req.body;
  const user_id = req.params.id
  coolRouter.getById(user_id)
            .then(data =>{
              if(!data){
                 null
              }else{
                let newPost = {
                  text, user_id,
                }
                hotRouter.insert(newPost)
                         .then(post =>{
                           console.log(post)
                           res.status(201).json(post)
                         })
              }
            })
            .catch(error =>{
              console.log(error);
                res 
                    .status(500)
                    .json({
                      success: false, 
                      errorMessage:
                        "There was an error while saving the post"
                 })
            })

})
router.get('/', (req, res) => {
  // do your magic!
  coolRouter.get(req.query)
            .then(data =>{
              res.status(200).json(data);
            })
            .catch(err =>{
              res
                .status(500)
                .json({
                  success: false,
                  errorMessage:
                    "The users information could not be retrieved.", err
                })
            })
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  const {id} = req.params;
  !id ? res.status(404).json({ success: false, errorMessage: "The user with the specified ID does not exist." }) :
  coolRouter.getById(id)
            .then(data =>{
                res.status(200).json(data)
            })
            .catch(err =>{
                res
                  .status(500)
                  .json({
                    success: false,
                    errorMessage: "The user information could not be retrieved."
                  })
            })
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  const {id} = req.params;
  
  coolRouter.getUserPosts(id)
            .then(data =>{
              if(data){
                res.status(200).json(data)
              }else{
                null
              }
                
            })
            .catch(err =>{
                res
                  .status(500)
                  .json({
                    success: false,
                    errorMessage: "The post information could not be retrieved.", err
                  })
            })
});

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  const {id} = req.params;
  coolRouter.getById(id)
            .then(data =>{
                data ?
  coolRouter.remove(id)
            .then(i => {
                if(i){
                  res.status(200).json({
                    url: `/${id}`,
                    operation: `Delete user`
                  })
                }
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({
                  error: 'The user could not be removed'
                });
            })
              : res.status(404).json({
                  message: 'The user with the specified ID could not be found.'
              })
            })
            .catch(err => {
              console.log(err)
              res.status(500).json({
                  error: 'The user information could not be retrieved.'
              });
            })
});

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
  //const newInfo = coolRouter.get(item => item.id == req.params.id);
  const {id} = req.params;
  coolRouter.update(id, req.body)
            .then(info =>{
                  res.status(200).json({success: 'Info updated', info: req.body})
              })
            .catch(err =>{
               res.status(500).json({
                 error: 'Info could not be updated'
               })
            })
            
});

//custom middleware
function validateUserId(req, res, next) {
  // do your magic!
  const {id} = req.params;
  coolRouter.getById(id)
         .then(data =>{
           if(data){
             req.data;
           }else{
             res.status(400).json({message: 'Invalid User'})
           }
           next();
         })



}

function validateUser(req, res, next) {
  // do your magic!
  const userBody = req.body;
  //coolRouter.get(name)
            //.then(data =>{
              if(Object.keys(userBody).length === 0){
                res.status(400).json({message: "missing user data" })
              }else if(!userBody.name){
                res.status(400).json({ message: "missing required name field"})
              }else{
              next();
              }
            //})
}

function validatePost(req, res, next) {
  // do your magic!
  const {text} = req.body;
  //coolRouter.getUserPosts(text)
           // .then(data =>{
              if(Object.keys(req.body).length === 0){
                res.status(400).json({message: "missing post data"})
              }else if(!text){
                res.status(400).json({message: "missing required text field"})
              }else{
              next();
              }
           // })
}

module.exports = router;
