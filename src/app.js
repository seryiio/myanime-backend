import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import animesRoutes from './routes/animes.routes.js'
import genresRoutes from './routes/genres.routes.js'
import seasonsRoutes from './routes/seasons.routes.js'
import episodesRoutes from './routes/episodes.routes.js'
import songsRoutes from './routes/songs.routes.js'
import authenticationRoutes from './routes/authentication.routes.js'
import rolesRoute from './routes/roles.routes.js'

const app = express();
const IP = "192.168.1.49";
const port = 8080;

app.use(morgan('dev')); //para poder usar el script dev
app.use(express.json()); //el servidor de express entiende las peticiones de post con los datos requestValue
app.use(cors());

app.use('/api/v1', animesRoutes);
app.use('/api/v1', genresRoutes);
app.use('/api/v1', seasonsRoutes);
app.use('/api/v1', episodesRoutes);
app.use('/api/v1', songsRoutes);
app.use('/api/v1', authenticationRoutes);
app.use('/api/v1', rolesRoute);

app.listen(port, () => {
    console.log("http://" + IP + ":" + port + "/");
});

export default app