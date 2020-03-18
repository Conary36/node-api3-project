const express = require('express');
const coolRouter = require('./userDb')
const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
  const name = req.body;
  !name ? res.status(400).json({ success: false, errorMessage: "Please provide name!" }) :
  coolRouter.insert(name)
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

router.post('/:id/posts', (req, res) => {
  // do your magic!
  const {user_id, text} = req.body;
  !user_id ? res.status(404).json({ success: false, errorMessage: "The post with the specified ID does not exist." }) :
  coolRouter.insert({user_id,text})
            .then(data =>{
              if(data){
                  res.status(201).json({user_id, text})
              }else{
                null
              }
            })
            .catch(err =>{
              if(!text){
                  res.status(400).json({
                    success: false, errorMessage: "Please provide text for the post.",err
                  })
              }else{
                console.log(error);
                res 
                    .status(500)
                    .json({
                      success: false, 
                      errorMessage:
                        "There was an error while saving the post"
                 })
              }
            })


});

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
                    "The posts information could not be retrieved.", err
                })
            })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const {id} = req.params;
  coolRouter.getById(id)
         .then()
        if(id){

        }else{

        }

}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
