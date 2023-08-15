const { Router } = require("express");
const router = Router();
const user = require("../database/schema/user");
// const mgdb = require('mongodb');
const { isValidObjectId,Types } = require("mongoose");



router.post('/Post', async (req, res) => {

  const { post, desc, topic, date, tag, author, imgg } = req.body;

  try {
    await user.create({ topic: topic, post: post, desc: desc,  author: author, date: date, tag: tag, imgg: imgg })
    res.send({ status: "ok" });

  } catch (err) {
    console.log(err);
  }
})



router.get("/", (req, res) => {


  user.find({}).then((data) => {
    res.send({ status: data })
  }).catch((err) => {
    console.log(err)
    // it works it didnt crashh!!
  })

});

router.delete('/:id', (req, res) => {
  if (isValidObjectId(req.params.id)) {
    const objectId = new Types.ObjectId(req.params.id);
    user
      .findOne({ _id: objectId })
      .then((doc) => {
        if (doc) {
  //           console.log(req.params.id)
  // res.send('done')
          // Document with the given ID exists, proceed with deletion
          user
            .deleteOne({ _id: objectId })
            .then((result) => {
              return res.send(result.acknowledged);
            })
            .catch((err) => {
              return res.status(500).json({ error: 'Could not delete the document' });
            });
        } else {
          // Document with the given ID does not exist
          return res.status(404).json({ error: 'Document not found' });
        }
      })
      .catch((err) => {
        return res.status(500).json({ error: 'An error occurred while querying the database' });
      });
  } else {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
});



module.exports = router;