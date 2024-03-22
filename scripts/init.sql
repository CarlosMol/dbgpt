-- Script para crear tablas
CREATE TABLE Estudiantes (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    FechaNacimiento DATE,
    Direccion VARCHAR(100),
    Email VARCHAR(100)
);

CREATE TABLE Profesores (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Email VARCHAR(100)
);

CREATE TABLE Materias (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Descripcion TEXT
);

CREATE TABLE Matriculas (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ID_Estudiante INT,
    ID_Materia INT,
    ID_Profesor INT,
    FechaMatricula DATE,
    FOREIGN KEY (ID_Estudiante) REFERENCES Estudiantes(ID),
    FOREIGN KEY (ID_Materia) REFERENCES Materias(ID),
    FOREIGN KEY (ID_Profesor) REFERENCES Profesores(ID)
);

-- Script para insertar datos en las tablas
INSERT INTO Estudiantes (Nombre, Apellido, FechaNacimiento, Direccion, Email) VALUES
('Juan', 'Perez', '2000-05-15', 'Calle 123', 'juan@example.com'),
('Maria', 'Gonzalez', '2001-08-20', 'Avenida 456', 'maria@example.com'),
('Pedro', 'Martinez', '1999-11-10', 'Plaza Principal', 'pedro@example.com'),
('Laura', 'Lopez', '2002-03-25', 'Calle 789', 'laura@example.com'),
('Carlos', 'Rodriguez', '2001-07-08', 'Avenida Central', 'carlos@example.com'),
('Ana', 'Hernandez', '2003-01-30', 'Calle 456', 'ana@example.com'),
('Sofia', 'Diaz', '2000-12-05', 'Plaza Mayor', 'sofia@example.com'),
('Diego', 'Sanchez', '2002-09-18', 'Calle 789', 'diego@example.com'),
('Elena', 'Romero', '2001-04-14', 'Avenida Norte', 'elena@example.com'),
('Mario', 'Perez', '2003-06-20', 'Calle 123', 'mario@example.com');

INSERT INTO Profesores (Nombre, Apellido, Email) VALUES
('Luis', 'Lopez', 'luis@example.com'),
('Ana', 'Martinez', 'ana@example.com'),
('Carlos', 'Garcia', 'carlos@example.com'),
('Maria', 'Rodriguez', 'maria@example.com'),
('Juan', 'Gonzalez', 'juan@example.com'),
('Sofia', 'Hernandez', 'sofia@example.com'),
('Diego', 'Sanchez', 'diego@example.com'),
('Laura', 'Diaz', 'laura@example.com'),
('Pedro', 'Romero', 'pedro@example.com'),
('Elena', 'Perez', 'elena@example.com');

INSERT INTO Materias (Nombre, Descripcion) VALUES
('Matematicas', 'Curso introductorio a las matematicas.'),
('Ciencias', 'Curso sobre ciencias naturales.'),
('Historia', 'Curso de historia mundial.'),
('Literatura', 'Curso de literatura universal.'),
('Fisica', 'Curso de fisica basica.'),
('Quimica', 'Curso de quimica general.'),
('Biologia', 'Curso de biologia celular.'),
('Arte', 'Curso de arte contemporaneo.'),
('Geografia', 'Curso de geografia humana.'),
('Musica', 'Curso de apreciacion musical.');

INSERT INTO Matriculas (ID_Estudiante, ID_Materia, ID_Profesor, FechaMatriculacion) VALUES
(1, 1, 1, '2023-01-10'),
(2, 2, 2, '2023-01-11'),
(3, 3, 3, '2023-01-12'),
(4, 4, 4, '2023-01-13'),
(5, 5, 5, '2023-01-14'),
(6, 6, 6, '2023-01-15'),
(7, 7, 7, '2023-01-16'),
(8, 8, 8, '2023-01-17'),
(9, 9, 9, '2023-01-18'),
(10, 10, 10, '2023-01-19');

-- fix conexión
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root_password';
flush privileges;