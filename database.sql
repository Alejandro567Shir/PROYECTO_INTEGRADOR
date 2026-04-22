CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    clave VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS procesos (
    id SERIAL PRIMARY KEY,
    estudiante VARCHAR(150) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    fecha_registro DATE NOT NULL
);

INSERT INTO procesos (estudiante, estado, fecha_registro) VALUES
('Josue Oswaldo Guerrero Bifariní', 'En revisión Fase 1', '2026-04-21'),
('María Fernanda López', 'Aprobado Fase 1', '2026-04-20'),
('Carlos Andrés Yépez', 'Correcciones Fase 2', '2026-04-19');