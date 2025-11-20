import { findUserByEmail, createUser } from '../../repositories/Auth/authRepository.mjs';
import bcrypt from 'bcrypt';

export const registerService = async ({ name, lastName, nid, age, phoneNumber, email, password }) => {

    const missingFields = [];

    if (!name) missingFields.push("name");
    if (!lastName) missingFields.push("lastName");
    if (!nid) missingFields.push("nid");
    if (!age) missingFields.push("age");
    if (!phoneNumber) missingFields.push("phoneNumber");
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
        const error = new Error(`Missing required fields: ${missingFields.join(", ")}`);
        error.status = 400;
        throw error;
    };

    if (age < 16) {
        const error = new Error('You must be over 16 years old to register in the system.');
        error.status = 400;
        throw error;
    };

    email = email.toLowerCase().trim();
    const existing = await findUserByEmail(email);

    if (existing) {
        const error = new Error("Validation error");
        error.status = 400;
        error.errors = { email: "The email is already registered." };
        throw error;
    };

    if (!password || password.length < 8) {
        const error = new Error("Validation error");
        error.status = 400;
        error.errors = { password: "Password must be at least 8 characters." };
        throw error;
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser({ nid, name, lastName, age, email, hashedPassword, phoneNumber });

    return newUser;

};

export const loginService = async ({ email, password }) => {

    const missingFields = [];

    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
        const error = new Error(`Missing required fields: ${missingFields.join(", ")}`);
        error.status = 400;
        throw error;
    };

    email = email.toLowerCase().trim();

    const user = await findUserByEmail(email);

    if (!user) {
        const error = new Error("Validation error");
        error.status = 400;
        error.errors = { email: "Email not found." };
        throw error;
    };

    const isValidPassword = await bcrypt.compare(password, user.user_password);

    if (!isValidPassword) {
        const error = new Error("Validation error");
        error.status = 400;
        error.errors = { password: "Incorrect username and/or password." };
        throw error;
    };

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    delete user.user_password;

    return { ...user, token };

};