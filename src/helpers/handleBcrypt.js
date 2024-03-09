import bcrypt from 'bcrypt'

const saltRounds = 10;

// Función para encriptar una contraseña
export const encrypt = async (plaintextPassword) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(plaintextPassword, salt);
        return hash;
    } catch (err) {
        throw err;
    }
};

// Función para comparar una contraseña con su hash
export const compare = async (plaintextPassword, hash) => {
    try {
        const result = await bcrypt.compare(plaintextPassword, hash);
        return result;
    } catch (err) {
        throw err;
    }
};
