import jwt from 'jsonwebtoken';

export function generateToken(payload) {
    return new Promise((solve, reject) => {
      jwt.sign(payload, 'secret key', { expiresIn: '1h' }, (error, token) => {
        if (error) {
          reject(error);
        } else {
          solve(token);
        }
      });
    });
  }
  
  export function validateToken(token) {
    return new Promise((solve, reject) => {
      jwt.verify(token, 'secret key', (error, decoded) => {
        if (error) {
          reject(error);
        } else {
          solve(decoded);
        }
      });
    });
  }