CREATE DATABASE espoch_titulacion;
USE espoch_titulacion;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL
);

CREATE TABLE procesos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estudiante VARCHAR(150) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    fecha_registro DATE NOT NULL
);

INSERT INTO procesos (estudiante, estado, fecha_registro) VALUES
('Josue Oswaldo Guerrero Bifarini', 'En revisión Fase 1', '2026-04-21'),
('María Fernanda López', 'Aprobado Fase 1', '2026-04-20'),
('Carlos Andrés Yépez', 'Correcciones Fase 2', '2026-04-19');