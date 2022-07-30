const fastify = require('fastify');
const mongoose = require('mongoose');
const promoRoutes = require('./routes/promoRoutes');
const contentRangeHook = require('./hooks/contentRangeHook');

const app = fastify();

app.addHook('preHandler', contentRangeHook);
promoRoutes(app);

const start = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/promos_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        app.listen(5000, () => {
            console.log("Server running")
        })
        
    } catch (error) {
        console.log(error);        
    }
}

start();