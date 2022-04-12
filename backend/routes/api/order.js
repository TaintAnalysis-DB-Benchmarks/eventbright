const Sequelize = require("sequelize");

const express = require('express');

const {
  User,
  Event,
  Ticket,
  Order,
  OrderDetail
} = require('../../db/models');

const router = express.Router();
router.get('/:userId', async (req, res) => {
  const allOrders = await Order.findAll({
    where: {
      userId: req.params.userId
    }
  });
  const orderList = [];
  const orderdetails = await OrderDetail.findAll({
    where: {
      orderId: allOrders.map(u => u.id)
    }
  });

  for (let i = 0; i < allOrders.length; i++) {
    const orderDetails = orderdetails.filter(data => data.orderId === allOrders[i].id);
    const orderInfo = [];

    for (let k = 0; k < orderDetails.length; k++) {
      orderInfo.push(orderDetails[k].dataValues);
    }

    orderList.push({
      order: allOrders[i].dataValues,
      orderInfo
    });
  }

  return res.json(orderList);
});
router.post('/', async (req, res) => {
  const newOrder = await Order.create({
    userId: req.body.order.userId,
    hostId: req.body.order.hostId,
    eventId: req.body.order.eventId,
    eventName: req.body.order.eventName,
    eventDate: req.body.order.eventDate,
    eventImage: req.body.order.eventImage
  });
  await newOrder.save();
  const orderInfo = [];

  for (let i = 0; i < req.body.orderDetails.length; i++) {
    const orderDetails = await OrderDetail.create({
      orderId: newOrder.id,
      ticketName: req.body.orderDetails[i].ticketName,
      ticketPrice: req.body.orderDetails[i].ticketPrice,
      amount: req.body.orderDetails[i].amount
    });
    await orderDetails.save();
    orderInfo.push(orderDetails.dataValues);
    const editTicketAmount = await Ticket.findByPk(req.body.orderDetails[i].ticketId);
    await editTicketAmount.update({
      amount: editTicketAmount.amount - req.body.orderDetails[i].amount
    });
    await editTicketAmount.save();
  }

  return res.json({
    order: newOrder,
    orderInfo
  });
});
router.put('/', async (req, res) => {
  const allOrders = await Order.findAll({
    where: {
      eventId: req.body.eventId
    }
  });
  const orders = [];

  for (let i = 0; i < allOrders.length; i++) {
    const order = allOrders[i];
    await order.update({
      eventName: req.body.eventName,
      eventDate: req.body.eventDate,
      eventImage: req.body.eventImage
    });
    await order.save();
    orders.push(order.dataValues);
  }

  return res.json(orders);
});
module.exports = router;