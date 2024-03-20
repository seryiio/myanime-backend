import { Comment } from "../models/comment.model.js";

export const ListCommment = async (req, res) => {
    try {
        const listComments = await Comment.findAll();
        res.json(listComments);
    } catch (error) {
        console.error('Error al obtener comentarios:', error);
        res.status(500).json({ error: 'Error al obtener comentarios' });
    }
}

export const CreateComment = async (req, res) => {
    try {
        const { description, date_time } = req.body;
        const createComment = await Comment.create({
            description,
            date_time,
        })
        res.json(createComment);
    } catch (error) {
        console.error('Error al crear comentarios:', error);
        res.status(500).json({ error: 'Error al crear comentarios' });
    }
}

export const UpdateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, date_time, userId,animeId, seasonId, bookId } = req.body;

        const comment = await Comment.findByPk(id);
        comment.description = description;
        comment.date_time = date_time;
        comment.userId = userId;
        comment.animeId = animeId;
        comment.seasonId = seasonId;
        comment.bookId = bookId;

        await comment.save();
        res.json(comment);

    } catch (error) {
        console.error('Error al actualizar comentario:', error);
        res.status(500).json({ error: 'Error al actualizar comentario' });
    }
}

export const DeleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await Comment.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar comentario:', error);
        res.status(500).json({ error: 'Error al eliminar comentario' });
    }
}
