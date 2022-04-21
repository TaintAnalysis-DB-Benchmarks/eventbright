const Sequelize = require("sequelize");

const express = require('express');

const {
  User,
  Event,
  Ticket,
  Order
} = require('../../db/models');

const {
  Op
} = require('sequelize');

const router = express.Router();
router.get('/name/:name', async (req, res) => {
  if (req.params.name === 'Any') return res.json([]);
  const searchList = await Event.findAll({
    where: {
      name: {
        [Op.or]: [{
          [Op.substring]: req.params.name
        }, {
          [Op.startsWith]: req.params.name[0].toLowerCase() + req.params.name.slice(1)
        }, {
          [Op.startsWith]: req.params.name[0].toUpperCase() + req.params.name.slice(1)
        }, {
          [Op.iLike]: `%${req.params.name}`
        }]
      }
    }
  });
  return res.json(searchList);
});
router.get('/search/:location/:category', async (req, res) => {
  const location = req.params.location;
  const category = req.params.category;

  if (location !== 'Any' && category === 'Any') {
    const eventList = await Event.findAll({
      where: {
        [Op.or]: [{
          city: {
            [Op.or]: [{
              [Op.substring]: location
            }, {
              [Op.startsWith]: location[0].toLowerCase() + location.slice(1)
            }, {
              [Op.startsWith]: location[0].toUpperCase() + location.slice(1)
            }, {
              [Op.iLike]: `%${location}`
            }]
          }
        }, {
          state: {
            [Op.or]: [{
              [Op.substring]: location
            }, {
              [Op.startsWith]: location[0].toLowerCase() + location.slice(1)
            }, {
              [Op.startsWith]: location[0].toUpperCase() + location.slice(1)
            }, {
              [Op.iLike]: `%${location}`
            }]
          }
        }]
      }
    });
    const events = [];
    const events_iq7i = await Event.findAll({
      where: {
        id: eventList.map(data => data.id)
      }
    });
    const users_5ih8 = await User.findAll({
      where: {
        id: eventList.map(data => data.hostId)
      }
    });
    const tickets_hth5 = await Ticket.findAll({
      where: {
        eventId: eventList.map(data => data.id)
      }
    });

    for (let i = 0; i < eventList.length; i++) {
      const event = events_iq7i.find(x => x.id === eventList[i].id);
      const host = users_5ih8.find(x => x.id === eventList[i].hostId);
      const tickets = tickets_hth5.filter(x => x.eventId === eventList[i].id);
      events.push({
        event: event.dataValues,
        host: host.dataValues,
        tickets
      });
    }

    return res.json(events);
  } else if (location === 'Any' && category !== 'Any') {
    const eventList = await Event.findAll({
      where: {
        category
      }
    });
    const events = [];
    const events_6l8f = await Event.findAll({
      where: {
        id: eventList.map(data => data.id)
      }
    });
    const users_rd8o = await User.findAll({
      where: {
        id: eventList.map(data => data.hostId)
      }
    });
    const tickets_18ny = await Ticket.findAll({
      where: {
        eventId: eventList.map(data => data.id)
      }
    });

    for (let i = 0; i < eventList.length; i++) {
      const event = events_6l8f.find(x => x.id === eventList[i].id);
      const host = users_rd8o.find(x => x.id === eventList[i].hostId);
      const tickets = tickets_18ny.filter(x => x.eventId === eventList[i].id);
      events.push({
        event: event.dataValues,
        host: host.dataValues,
        tickets
      });
    }

    return res.json(events);
  } else if (location !== 'Any' && category !== 'Any') {
    const eventList = await Event.findAll({
      where: {
        [Op.and]: [{
          [Op.or]: [{
            city: {
              [Op.or]: [{
                [Op.substring]: location
              }, {
                [Op.startsWith]: location[0].toLowerCase() + location.slice(1)
              }, {
                [Op.startsWith]: location[0].toUpperCase() + location.slice(1)
              }, {
                [Op.iLike]: `%${location}`
              }]
            }
          }, {
            state: {
              [Op.or]: [{
                [Op.substring]: location
              }, {
                [Op.startsWith]: location[0].toLowerCase() + location.slice(1)
              }, {
                [Op.startsWith]: location[0].toUpperCase() + location.slice(1)
              }, {
                [Op.iLike]: `%${location}`
              }]
            }
          }]
        }, {
          category
        }]
      }
    });
    const events = [];
    const events_cd0s = await Event.findAll({
      where: {
        id: eventList.map(data => data.id)
      }
    });
    const users_0wsd = await User.findAll({
      where: {
        id: eventList.map(data => data.hostId)
      }
    });
    const tickets_g39v = await Ticket.findAll({
      where: {
        eventId: eventList.map(data => data.id)
      }
    });

    for (let i = 0; i < eventList.length; i++) {
      const event = events_cd0s.find(x => x.id === eventList[i].id);
      const host = users_0wsd.find(x => x.id === eventList[i].hostId);
      const tickets = tickets_g39v.filter(x => x.eventId === eventList[i].id);
      events.push({
        event: event.dataValues,
        host: host.dataValues,
        tickets
      });
    }

    return res.json(events);
  } else {
    const eventList = await Event.findAll();
    const events = [];
    const events_g3yz = await Event.findAll({
      where: {
        id: eventList.map(data => data.id)
      }
    });
    const users_m80h = await User.findAll({
      where: {
        id: eventList.map(data => data.hostId)
      }
    });
    const tickets_x54n = await Ticket.findAll({
      where: {
        eventId: eventList.map(data => data.id)
      }
    });

    for (let i = 0; i < eventList.length; i++) {
      const event = events_g3yz.find(x => x.id === eventList[i].id);
      const host = users_m80h.find(x => x.id === eventList[i].hostId);
      const tickets = tickets_x54n.filter(x => x.eventId === eventList[i].id);
      events.push({
        event: event.dataValues,
        host: host.dataValues,
        tickets
      });
    }

    return res.json(events);
  }
});
router.get('/:id', async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  const host = await User.findByPk(event.hostId);
  const tickets = await Ticket.findAll({
    where: {
      eventId: req.params.id
    }
  });
  return res.json({
    event,
    host,
    tickets
  });
});
router.post('/', async (req, res) => {
  const {
    hostId,
    name,
    about,
    image,
    venue,
    address,
    city,
    state,
    country,
    category,
    date,
    tickets
  } = req.body;
  const newEvent = await Event.create({
    hostId,
    name,
    about,
    image,
    venue,
    address,
    city,
    state,
    country,
    category,
    date
  });
  await newEvent.save();

  for (let i = 0; i < tickets.length; i++) {
    const newTicket = await Ticket.create({
      name: tickets[i].name,
      eventId: newEvent.id,
      price: tickets[i].price,
      amount: tickets[i].amount
    });
    await newTicket.save();
  }

  return res.json(newEvent);
});
router.get('/users/:userId', async (req, res) => {
  const events = await Event.findAll({
    where: {
      hostId: req.params.userId
    }
  });
  const eventList = [];
  const tickets_rxiq = await Ticket.findAll({
    where: {
      eventId: events.map(data => data.id)
    }
  });

  for (let i = 0; i < events.length; i++) {
    const event = events[i].dataValues;
    const tickets = tickets_rxiq.filter(x => x.eventId === events[i].id);
    eventList.push({
      event,
      tickets
    });
  }

  return res.json(eventList);
});
router.put('/', async (req, res) => {
  const {
    tickets
  } = req.body;
  const editedEvent = await Event.findByPk(req.body.id);
  await editedEvent.update(req.body);
  const host = await User.findByPk(req.body.hostId);
  const newTickets = [];

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].delete) {
      if (typeof tickets[i].id === 'number') {
        const ticket = await Ticket.findByPk(tickets[i].id);
        await ticket.destroy();
      } else {
        continue;
      }
    } else if (typeof tickets[i].id === 'number') {
      const ticket = await Ticket.findByPk(tickets[i].id);
      await ticket.update({
        name: tickets[i].name,
        eventId: tickets[i].eventId,
        price: Number(tickets[i].price),
        amount: tickets[i].amount
      });
      await ticket.save();
      newTickets.push(ticket.dataValues);
    } else {
      const newTicket = await Ticket.create({
        name: tickets[i].name,
        eventId: tickets[i].eventId,
        price: Number(tickets[i].price),
        amount: tickets[i].amount
      });
      await newTicket.save();
      newTickets.push(newTicket.dataValues);
    }
  }

  return res.json({
    event: editedEvent,
    host: host.dataValues,
    tickets: newTickets
  });
});
router.delete('/', async (req, res) => {
  const deletedEvent = await Event.findByPk(req.body.id);
  const tickets = await Ticket.findAll({
    where: {
      eventId: req.body.id
    }
  });
  const orders = await Order.findAll({
    where: {
      eventId: req.body.id
    }
  });

  for (let i = 0; i < tickets.length; i++) await tickets[i].destroy();

  for (let i = 0; i < orders.length; i++) await orders[i].update({
    eventId: 0
  });

  await deletedEvent.destroy();
  return res.json(deletedEvent);
});
module.exports = router;