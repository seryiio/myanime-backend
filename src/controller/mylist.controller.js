import { MyList } from "../models/mylist.model.js";

export const ListMyList = async (req, res) => {
    try {
        const listMyList = await MyList.findAll();
        res.json(listMyList);
    } catch (error) {
        console.error('Error al obtener comentarios:', error);
        res.status(500).json({ error: 'Error al obtener comentarios' });
    }
}

export const CreateMyList = async (req, res) => {
    try {
        const { favorite, status, userId, animeId, seasonId, mangaId } = req.body;
        const createMyList = await MyList.create({
            favorite,
            status,
            userId,
            animeId,
            seasonId,
            mangaId,
        })
        res.json(createMyList);
    } catch (error) {
        console.error('Error al crear mi lista:', error);
        res.status(500).json({ error: 'Error al crear mi lista' });
    }
}

export const UpdateMyList = async (req, res) => {
    try {
        const { id } = req.params;
        const { favorite, status, animeId, seasonId, mangaId } = req.body;

        const upmylist = await MyList.findByPk(id);
        upmylist.favorite = favorite;
        upmylist.status = status;
        upmylist.animeId = animeId;
        upmylist.seasonId = seasonId;
        upmylist.mangaId = mangaId;

        await upmylist.save();
        res.json(upmylist);

    } catch (error) {
        console.error('Error al actualizar mi lista:', error);
        res.status(500).json({ error: 'Error al actualizar mi lista' });
    }
}

export const DeleteMyList = async (req, res) => {
    try {
        const { id } = req.params;
        await MyList.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar mi lista:', error);
        res.status(500).json({ error: 'Error al eliminar mi lista' });
    }
}
