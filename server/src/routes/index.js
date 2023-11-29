const homeRouter = require('./homeRouter');
const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');
const logoutRouter = require('./logoutRouter');
const adminRouter = require('./adminRouter');

function route(app) {
    app.use('/register', registerRouter);
    app.use('/logout', logoutRouter);
    app.use('/login', loginRouter);
    app.use('/admin', adminRouter);
    app.use('/', homeRouter);
}
module.exports = route;