import { Genre } from "../models/genre.model.js";
import { Book } from "../models/book.model.js";
import { BookGenre } from "../models/book_genre.model.js";

export const getAllGenreBooks = async (req, res) => {
    try {
        const genres = await Genre.findAll({
            include: {
                model: Book,
            }
        });
        res.json(genres);
    } catch (error) {
        console.error('Error al obtener animes de este genero:', error);
        res.status(500).json({ error: 'Error al obtener animes de este genero' });
    }
}

export const getGenreBooksByID = async (req, res) => {
    try {
        const { id } = req.params;
        const genres = await Genre.findByPk(id, {
            include: {
                model: Book,
            }
        });
        res.json(genres);
    } catch (error) {
        console.error('Error al obtener libros de este genero:', error);
        res.status(500).json({ error: 'Error al obtener libros de este genero' });
    }
}


//CRUD DE ANIMEGENRES

export const createBookGenres = async (req, res) => {
    const { bookId, genreId } = req.body;
    try {
        const newBookGenres = await BookGenre.create({
            bookId, genreId
        })
        res.json(newBookGenres);
    } catch (error) {
        console.error('Error al crear generos del libro:', error);
        res.status(500).json({ error: 'Error al crear generos del libro' });
    }
}

export const updateBookGenres = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookId, genreId } = req.body;

        const mangaGenres = await BookGenre.findByPk(id);
        mangaGenres.bookId = bookId;
        mangaGenres.genreId = genreId;

        await mangaGenres.save();
        res.json(mangaGenres);
    } catch (error) {
        console.error('Error al editar generos del libro:', error);
        res.status(500).json({ error: 'Error al editar generos del libro' });
    }
}

export const deleteBookGenres = async (req, res) => {
    try {
        const { id } = req.params;
        await BookGenre.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar generos del libro:', error);
        res.status(500).json({ error: 'Error al eliminar generos del libro' });
    }
}