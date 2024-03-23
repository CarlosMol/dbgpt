- Si la conexión a la bd no funciona, ejecutar estas querys

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root_password';
flush privileges

- api/bd
docker-compose up --build

- ui
npm install
npm run serve