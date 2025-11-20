import { query } from '../../db/index.mjs';

export const findUserByEmail = async (email) => {

  const query = `
    SELECT id, dni, user_name, user_last_name, age, email, user_password, phone_number, id_rol 
    FROM users 
    WHERE email = $1
    LIMIT 1
  `;

  const values = [email];

  const result = await pool.query(query, values);

  return result.rows[0] || null;

};

export const createUser = async ({ nid, name, lastName, age, email, hashedPassword, phoneNumber }) => {

  const sql = `
    INSERT INTO users (dni, user_name, user_last_name, age, email, user_password, phone_number, id_rol)
    VALUES ($1, $2, $3, $4, $5, $6, $7, 2)
    RETURNING id_user, dni, user_name, user_last_name, age, email, user_password, phone_number, id_rol;
  `;

  const { rows } = await query(sql, [nid, name, lastName, age, email, hashedPassword, phoneNumber]);
  return rows[0];
  
};