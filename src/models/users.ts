import { ResultSetHeader } from 'mysql2/promise';
import Iusers from '../interfaces/usersInterface';
import connection from './connection';

const create = async (username:string, classe:string, level:number, password:string)
:Promise<Iusers> => {
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?, ?, ?, ?)', 
    [username, classe, level, password],
  );
  return {
    id: result.insertId,
    username,
    classe,
    level,
    password,
  };
};

export default {
  create,
};