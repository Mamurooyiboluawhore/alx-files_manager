import AppController from ('../controllers/AppController');
import app from ('../server');

app.get('/status', await AppController.getStatus);
app.get('/stats', await AppController.getStats);

