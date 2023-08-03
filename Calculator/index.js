const app = require('./app');
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is runnig at http://localhost:${PORT}`);
});