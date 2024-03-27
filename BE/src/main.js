

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/tariffRoutes/product/productRoutes');
// const packageRoutes = require('../src/routes/packageRoutes');
// const offeringRoutes = require('../src/routes/offeringRoutes');
// const typeRoutes = require('../src/routes/typeRoutes');
// const categoryRoutes = require('../src/routes/categoryRoutes');
// const dataRoutes = require('../src/routes/dataRoutes');
// const componentsRoutes = require('../src/routes/componentRoutes');
// const totalRoutes = require('./routes/totalRoutes');
// const offeringPackageRoutes = require('./routes/offeringPackageRoutes');
const dashboardRouter = require('./routes/tariffRoutes/dashboard/dashboardRoutes');
const masterPackageRouter = require('./routes/tariffRoutes/masterPackage/masterPackageRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Mount product routes
app.use('/tariff/dashboard', dashboardRouter);
app.use('/tariff/masterPackage', masterPackageRouter);
app.use('/tariff/products', productRoutes);
// app.use('/packages', packageRoutes);
// app.use('/offering', offeringRoutes);
// app.use('/type', typeRoutes);
// app.use('/category', categoryRoutes);
// app.use('/data', dataRoutes);
// app.use('/components', componentsRoutes);
// app.use('/totals', totalRoutes);
// app.use('/offering-packages', offeringPackageRoutes);