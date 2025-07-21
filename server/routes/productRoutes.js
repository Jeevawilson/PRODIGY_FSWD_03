router.get('/', async (req, res) => {
  const { category, sortBy } = req.query;
  let query = {};
  if (category) query.category = category;

  let sort = {};
  if (sortBy === 'price') sort.price = 1;
  else if (sortBy === 'rating') sort.rating = -1;

  const products = await Product.find(query).sort(sort);
  res.json(products);
});
