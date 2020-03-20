const express = require('express');
const hotRouter = require('./postDb')
const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  hotRouter.get(req.query)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          success: false,
          errorMessage:
            "The users information could not be retrieved.", err
        })
    })

});

router.get('/:id', validatePostId, (req, res) => {
  // do your magic!
  const { id } = req.params;
  hotRouter.getById(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res
        .status(500)
        .json({
          success: false,
          errorMessage: "The user information could not be retrieved."
        })
    })
});

router.delete('/:id', validatePostId, (req, res) => {
  // do your magic!
  const { id } = req.params;
  hotRouter.getById(id)
    .then(data => {
      data ?
        hotRouter.remove(id)
          .then(i => {
            if (i) {
              res.status(200).json({
                url: `/${id}`,
                operation: `Delete user`
              })
            }
          })
          .catch(err => {
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

router.put('/:id', validatePostId, (req, res) => {
  // do your magic!
  const { id } = req.params;
  hotRouter.update(id, req.body)
    .then(info => {
      res.status(200).json({ success: 'Info updated', info: req.body })
    })
    .catch(err => {
      res.status(500).json({
        error: 'Info could not be updated'
      })
    })
});


// custom middleware
function validatePostId(req, res, next) {
  // do your magic!
  const {id} = req.params;
  hotRouter.getById(id)
           .then(data => {
              if (data) {
                req.data;
              } else {
                res.status(400).json({ message: 'Invalid User' })
              }
              next();
            })
}

module.exports = router;
