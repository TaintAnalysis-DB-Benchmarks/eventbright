const Sequelize = require("sequelize");

const express = require('express');

const {
  Event,
  Like
} = require('../../db/models');

const router = express.Router();
router.get('/:userId', async (req, res) => {
  const likes = await Like.findAll({
    where: {
      userId: req.params.userId
    }
  });
  const likedEvents = [];
  const events_0ize = await Event.findAll({
    where: {
      id: likes.map(data => data.eventId)
    }
  });

  for (let i = 0; i < likes.length; i++) {
    const likedEvent = events_0ize.find(data => data.id === likes[i].eventId);
    likedEvents.push(likedEvent.dataValues);
  }

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