const Sequelize = require("sequelize");

const express = require('express');

const {
  Event,
  Like
} = require('../../db/models');

const { performance } = require('perf_hooks');

const router = express.Router();
router.get('/:userId', async (req, res) => {
    console.log('==================== like_userId // start ====================');
    const fnStart = performance.now();
  const likes = await Like.findAll({
    where: {
      userId: req.params.userId
    }
  });
  const likedEvents = [];
  const events_s9v3 = await Event.findAll({
    where: {
      id: likes.map(data => data.eventId)
    }
  });

  for (let i = 0; i < likes.length; i++) {
    const likedEvent = events_s9v3.find(x => x.id === likes[i].eventId);
    likedEvents.push(likedEvent.dataValues);
  }
  
  const fnEnd = performance.now();
  console.log('====================  like_userId // end  ====================');
  console.log(fnEnd - fnStart);
  return res.json(likedEvents);
});
router.post('/', async (req, res) => {
  const likedEvent = await Event.findByPk(req.body.eventId);
  const newLike = await Like.create({
    userId: req.body.userId,
    eventId: req.body.eventId
  });
  await newLike.save();
  return res.json(likedEvent.dataValues);
});
router.delete('/', async (req, res) => {
  const unlikedEvent = await Event.findByPk(req.body.eventId);
  const newDislike = await Like.findOne({
    where: [{
      userId: req.body.userId
    }, {
      eventId: req.body.eventId
    }]
  });
  await newDislike.destroy();
  return res.json(unlikedEvent.dataValues);
});
module.exports = router;