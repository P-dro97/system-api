const app = require('./app'); //adição 
const PORT = process.env.PORT || 3000; //porta


app.listen(
    PORT, () => {
        console.log(`Server in running on port ${PORT}`);
    }
);