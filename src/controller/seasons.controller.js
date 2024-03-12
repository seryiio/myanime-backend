import { sequelize } from "../database/db.js";
import { Anime } from "../models/anime.model.js";
import { Episode } from "../models/episode.model.js";
import { Genre } from "../models/genre.model.js";
import { Season } from "../models/season.model.js";

//BUSINESS LOGICAL

export const getSeasonsByAnimeId = async (req, res) => {
    try {
        const { id } = req.params;
        const seasons = await Season.findAll({
            where: {
                animeId: id,
            }
        });
        if (!seasons) { return res.status(404).json('Anime not found'); }
        res.json(seasons);
    } catch (error) {
        console.error('Error al obtener las temporadas del anime:', error);
        res.status(500).json({ error: 'Error al obtener las temporadas del anime' });
    }
}

export const getSeasonByAnimeId = async (req, res) => {
    try {
        const { id } = req.params;
        const seasonsById = await Season.findOne({
            where: {
                id,
            }
        });
        if (!seasonsById) { return res.status(404).json('Anime not found'); }
        res.json(seasonsById);
    } catch (error) {
        console.error('Error al obtener datos de la temporada de este anime:', error);
        res.status(500).json({ error: 'Error al obtener datos de la temporada de este anime' });
    }
}

export const getLastSeasonsByEachAnime = async (req, res) => {
    try {
        const thelast = await Anime.findAll({
            include: [
                {
                    model: Season,
                    order: [['createdAt', 'DESC']],
                    limit: 1,
                    required: true,
                },
                {
                    model: Genre,
                }
            ],
        });
        const animesWithSeasons = thelast.filter(anime => anime.seasons.length > 0);

        res.json(animesWithSeasons);
    } catch (error) {
        console.error('Error al obtener datos de la temporada de este anime:', error);
        res.status(500).json({ error: 'Error al obtener datos de la temporada de este anime' });

    }
};

export const getLastSeasonsByAnimeId = async (req, res) => {
    try {
        const { id } = req.params;
        const thelast = await Anime.findByPk(id, {
            include: [
                {
                    model: Season,
                    order: [['createdAt', 'DESC']],
                    limit: 1,
                    required: true,
                },
                {
                    model: Genre,
                }
            ],
        });

        // Verificar si thelast existe y tiene al menos una temporada
        if (thelast && thelast.seasons && thelast.seasons.length > 0) {
            res.json(thelast);
        } else {
            res.json({}); // O respondes con un objeto vacío, dependiendo de tus necesidades
        }
    } catch (error) {
        console.error('Error al obtener datos de la temporada de este anime:', error);
        res.status(500).json({ error: 'Error al obtener datos de la temporada de este anime' });
    }
};


// export const getAllLatestSeasons = async (req, res) => {
//     try {
//         const latestSeasons = await Season.findAll({
//             attributes: ['animeId', [sequelize.fn('max', sequelize.col('number')), 'latestSeason']],
//             group: ['animeId'],
//             include: [{
//                 model: Season,
//                 attributes: ['id', 'number', 'title_japanese', 'title_english', 'description', 'year', 'season_year', 'type', 'studio', 'image', 'cover_image', 'url_trailer', 'status'],
//                 where: {
//                     status: true, // Assuming true means the season is ongoing or released
//                 },
//                 required: false, // Use false to perform a LEFT JOIN
//                 duplicating: false, // Set duplicating to false to avoid duplicate rows in the result
//                 as: 'latestSeason', // Specify the alias for the association
//             }],
//         });
//         res.json(latestSeasons);
//     } catch (error) {
//         console.error('Error al obtener últimas temporadas:', error);
//         res.status(500).json({ error: 'Error al obtener últimas temporadas' });
//     }
// };

//CRUD SEASONS

export const getAllSeasons = async (req, res) => {
    try {
        const seasons = await Season.findAll();
        res.json(seasons);
    } catch (error) {
        console.error('Error al obtener seasons:', error);
        res.status(500).json({ error: 'Error al obtener seasons' });
    }
}

export const getSeason = async (req, res) => {
    try {
        const { id } = req.params;
        const season = await Season.findOne({ where: { id, } });
        if (!season) { return res.status(404).json('Season not found'); }
        res.json(season);
    } catch (error) {
        console.error('Error al obtener seasons:', error);
        res.status(500).json({ error: 'Error al obtener seasons' });
    }
}

export const getSeasonEpisodes = async (req, res) => {
    try {
        const { id } = req.params;
        const episodes = await Episode.findAll({
            where: {
                seasonId: id,
            }
        });
        res.json(episodes);
    } catch (error) {

    }
}

export const createSeason = async (req, res) => {
    const { number, title_japanese, title_english, synopsis, year, season_year, type, studio, image, cover_image, cover_image_secondary, url_trailer, day_emission, status, puntuation, animeId } = req.body;
    try {
        const newSeason = await Season.create({
            number,
            title_japanese,
            title_english,
            synopsis,
            year,
            season_year,
            type,
            studio,
            image,
            cover_image,
            cover_image_secondary,
            url_trailer,
            day_emission,
            status,
            puntuation,
            animeId,
        })
        res.json(newSeason);
    } catch (error) {
        console.error('Error al crear seasons:', error);
        res.status(500).json({ error: 'Error al crear seasons' });
    }
}

export const updateSeason = async (req, res) => {
    try {
        const { id } = req.params;
        const { number, title_japanese, title_english, synopsis, year, season_year, type, studio, image, cover_image, cover_image_secondary, url_trailer, day_emission, status, puntuation, animeGenreId } = req.body;

        const season = await Season.findByPk(id);
        season.number = number;
        season.title_japanese = title_japanese;
        season.title_english = title_english;
        season.synopsis = synopsis;
        season.year = year;
        season.season_year = season_year;
        season.type = type;
        season.studio = studio;
        season.image = image;
        season.cover_image = cover_image;
        season.cover_image_secondary = cover_image_secondary;
        season.url_trailer = url_trailer;
        season.day_emission = day_emission;
        season.status = status;
        season.puntuation = puntuation;
        season.animeGenreId = animeGenreId;

        await season.save();
        res.json(season);
    } catch (error) {
        console.error('Error al actualizar seasons:', error);
        res.status(500).json({ error: 'Error al actualizar seasons' });
    }
}

export const deleteSeason = async (req, res) => {
    try {
        const { id } = req.params;
        await Season.destroy({
            where: {
                id,
            }
        })
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar seasons:', error);
        res.status(500).json({ error: 'Error al eliminar seasons' });
    }
}