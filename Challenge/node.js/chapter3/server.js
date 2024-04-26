const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users.routes');
const postsRouter = require('./routes/posts.routes');
const port = 4000;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// app.use('/static', express.static('public')); 상대적
app.use('/static', express.static(path.join(__dirname, 'public'))); // 절대경로

app.use(express.json());
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const diffTime = Date.now() - start;
    console.log(`end: ${req.method} ${req.baseUrl} ${diffTime}ms`);
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.render('index', {
        imageTitle: 'It is a cat 2',
    });
});

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(port, () => {
    console.log('서버가 열렸어요!');
});
