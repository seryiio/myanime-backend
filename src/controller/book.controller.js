import { Book } from '../models/book.model.js';
import { Genre } from '../models/genre.model.js';

//CRUD DE Mangas

export const getAllBooks = async (req, res) => {
    try {
        const book = await Book.findAll({
            include: [
                {
                    model: Genre,
                }
            ]});
        res.json(book);
    } catch (error) {
        console.error('Error al obtener libros:', error);
        res.status(500).json({ error: 'Error al obtener libros' });
    }
}

export const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id, {
            include: {
                model: Genre,
            }
        });

        if (!book) { return res.status(404).json('Book not found'); }

        res.json(book);
    } catch (error) {
        console.error('Error al obtener mangas:', error);
        res.status(500).json({ error: 'Error al obtener mangas' });
    }
}

export const createBook = async (req, res) => {

    const { title_japanese, title_english, synopsis, year, season_year, book_type, author, status, puntuation } = req.body;

    try {
        const newBook = await Book.create({
            title_japanese, title_english, synopsis, year, season_year, book_type, author, status, puntuation
        })
        res.json(newBook);
    } catch (error) {
        console.error('Error al crear libro:', error);
        res.status(500).json({ error: 'Error al crear libro' });
    }
}

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title_japanese, title_english, synopsis, year, season_year, book_type, author, status, puntuation } = req.body;

        const book = await Book.findByPk(id);
        book.title_japanese = title_japanese;
        book.title_english = title_english;
        book.synopsis = synopsis;
        book.year = year;
        book.season_year = season_year;
        book.book_type = book_type;
        book.author = author;
        book.status = status;
        book.puntuation = puntuation;

        await book.save();
        res.json(book);

    } catch (error) {
        console.error('Error al actualizar libros:', error);
        res.status(500).json({ error: 'Error al actualizar libros' });
    }
}

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar libros:', error);
        res.status(500).json({ error: 'Error al eliminar libros' });
    }
}
