const express = require('express')
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const CORS = require('cors');
const bodyPraser = require('body-parser');
const cookiePraser = require('cookie-parser');

const authRoutes = require('./Router/auth')


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true}
).then(()=>{
    console.log("DB CONNECTED"
    )
}).catch((err)=>{console.log("DB OOPS")})

const port = process.env.PORT || 4000;
app.listen(port, ()=>{console.log(`Listening to port ${port}`)});


//middlewares
app.use(CORS());
/*

    CORS, which stands for Cross-Origin Resource Sharing, is a security mechanism that web browsers use to ensure the safety of web applications. It allows web pages from one domain to access resources from another domain. 

To put it simply, imagine you are on a website called "Website A" and you want to fetch some information or use a service from another website called "Website B." Normally, web browsers have strict security measures in place to prevent this kind of interaction, as it can be a potential security risk. 

CORS enables controlled access between websites by defining a set of rules. These rules specify which domains are allowed to access certain resources on another domain. So, if Website A wants to fetch data from Website B, Website B needs to explicitly allow access by including the appropriate CORS headers in its server responses.

These headers essentially tell the browser, "Hey, it's okay for Website A to access our resources." The browser then checks these headers and, if everything is allowed, allows the cross-origin request to proceed.

In summary, CORS is a security feature that allows websites to communicate and share resources with each other, but only when explicitly permitted. It helps protect against unauthorized access and keeps web applications safer.
*/
app.use(bodyPraser.json());
app.use(cookiePraser());

//routes
app.use('/api',authRoutes);