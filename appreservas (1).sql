-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-07-2023 a las 17:27:59
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `appreservas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `fecha_reserva` date DEFAULT NULL,
  `tipo_reserva` varchar(255) DEFAULT NULL,
  `cantidad_personas` int(11) DEFAULT NULL,
  `observaciones` text DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `usuario_id`, `fecha_reserva`, `tipo_reserva`, `cantidad_personas`, `observaciones`, `estado`) VALUES
(10, 24, '2023-07-02', 'almuerzo', 2, 'dos', 'pendiente'),
(11, 2, '2023-07-04', 'comida', 5, 'nada', 'pendiente'),
(12, 23, '2023-07-10', 'desayuno', 3, 'Nada', 'pendiente'),
(13, 25, '2023-07-17', 'onces', 5, 'desayuno', 'pendiente'),
(14, 26, '2023-07-11', 'cena', 16, '16', 'pendiente'),
(15, 27, '2023-07-20', 'cena', 20, 'son 20', 'pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'Admin'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `tipodocumento` varchar(255) DEFAULT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `tipodocumento`, `identificacion`, `email`, `password`, `rol_id`) VALUES
(2, 'pruba5', 'apellidoPrueba', 'cc', '123456789', 'admin@simon', '123', 1),
(23, 'prueba', 'unp', 'cc', '111111', 'uno@gmail.com', '', 2),
(24, 'prueba', 'dos', 'cc', '22222', 'dos@gmail.com', '', 2),
(25, 'prueba5', 'cinco', 'cc', '5555', 'cinco@gmail.com', '', 2),
(26, 'pruba16', 'diezsesiz', 'cc', '161616', 'diezsiseis@gmail.com', '', 2),
(27, 'prueba 20', 'veinte', 'cc', '2020', 'veinte@gmail.com', '', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rol_id` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
