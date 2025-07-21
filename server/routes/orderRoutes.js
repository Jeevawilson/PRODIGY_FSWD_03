router.get('/track/:orderId', async (req, res) => {
  const order = await Order.findById(req.params.orderId);
  if (order) {
    res.json({ status: order.status, expectedDelivery: order.expectedDelivery });
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});
