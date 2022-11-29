import express from 'express';
import cors from 'cors';
import todosRoutes from './routes/todos/todos.router';
import homeRoutes from './routes/home/home.router';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', homeRoutes);
app.use('/todos', todosRoutes);

app.listen(port, () => {
  console.log('Server runs on http://localhost:' + port);
});
