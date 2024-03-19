

const express = require('express');
const productRoutes = require('../src/routes/productRoutes');
const packageRoutes = require('../src/routes/packageRoutes');
const offeringRoutes = require('../src/routes/offeringRoutes');
const typeRoutes = require('../src/routes/typeRoutes');
const categoryRoutes = require('../src/routes/categoryRoutes');
const dataRoutes = require('../src/routes/dataRoutes');
const componentsRoutes = require('../src/routes/componentRoutes');
const totalRoutes = require('./routes/totalRoutes');
const offeringPackageRoutes = require('./routes/offeringPackageRoutes');




const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// Mount product routes
app.use('/products', productRoutes);
app.use('/packages', packageRoutes);
app.use('/offering', offeringRoutes);
app.use('/type', typeRoutes);
app.use('/categoyy', categoryRoutes);
app.use('/data', dataRoutes);
app.use('/components', componentsRoutes);
app.use('/totals', totalRoutes);
app.use('/offering-packages', offeringPackageRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});