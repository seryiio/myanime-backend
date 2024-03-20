import { Anime } from "../models/anime.model.js";
import { Book } from "../models/book.model.js";
import { MyList } from "../models/mylist.model.js";
import { Season } from "../models/season.model.js";
import { User } from "../models/user.model.js";

export const ListMyList = async (req, res) => {
    try {
        const listMyList = await MyList.findAll();
        res.json(listMyList);
    } catch (error) {
        console.error('Error al obtener la lista:', error);
        res.status(500).json({ error: 'Error al obtener la lista' });
    }
}


export const ListMyListByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const listMyList = await User.findByPk(id, {
            attributes: ['id'],
            include: [
                {
                    model: MyList,
                    attributes: ['id', 'favorite', 'status'],
                    include: [
                        { model: Season },
                        { model: Book }
                    ]
                }
            ]
        });
        if (!listMyList || listMyList.length === 0) {
            return res.status(404).json('No tienes animes registrados');
        }

        const mylist = listMyList.my_lists.map(list => list);

        const groupedSeasons = {};

        listMyList.my_lists.forEach(list => {
            const animeId = list.season.animeId;
            if (!groupedSeasons[animeId]) {
                groupedSeasons[animeId] = [];
            }
            groupedSeasons[animeId].push(list.season);
        });

        res.json(mylist);
    } catch (error) {
        console.error('Error al obtener mi lista:', error);
        res.status(500).json({ error: 'Error al obtener mi lista' });
    }
}
export const CreateMyList = async (req, res) => {
    try {
        const { favorite, status, userId, seasonId, bookId } = req.body;
        const createMyList = await MyList.create({
            favorite,
            status,
            userId,
            seasonId,
            bookId,
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
        const { favorite, status, seasonId, bookId } = req.body;

        const upmylist = await MyList.findByPk(id);
        upmylist.favorite = favorite;
        upmylist.status = status;
        upmylist.seasonId = seasonId;
        upmylist.bookId = bookId;

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
