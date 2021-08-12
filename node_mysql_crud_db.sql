-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 07-Ago-2021 às 01:44
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `node_mysql_crud_db`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `Nome` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cargo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `salario` decimal(11,2) UNSIGNED DEFAULT '0.00',
  `status` enum('Ativo','Inativo','Bloqueado') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `DataCad` date NOT NULL,
  `Cpf` varchar(11) NOT NULL,
  `ufnasc` char(2) NOT NULL,
  `criado_em` datetime NOT NULL,
  `atualizado_em` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `employees`
--

INSERT INTO `employees` (`Nome`, `cargo`, `salario`, `status`, `DataCad`, `Cpf`, `ufnasc`, `criado_em`, `atualizado_em`) VALUES
('Gabriel', 'DevPleno', '3000.00', 'Ativo', '0000-00-00', '400999999', 'SP', '2021-08-05 20:56:09', '2021-08-05 20:56:09'),
('Luisa', 'DevPSr', '3002.00', 'Ativo', '2021-08-05', '4009667789', 'SP', '2021-08-05 21:44:41', '2021-08-05 21:44:41'),
('Lara', 'Dev', '2000.00', 'Ativo', '2021-08-06', '23456789111', 'RJ', '2021-08-06 09:56:49', '2021-08-06 09:56:49'),
('Lucas', 'Analista', '6000.00', 'Ativo', '2021-08-06', '43567898911', 'PR', '2021-08-06 15:47:50', '2021-08-06 15:47:50'),
('Tiago', 'Engenheiro Jr', '2500.00', 'Ativo', '2021-08-06', '43567898923', 'BA', '2021-08-06 15:50:51', '2021-08-06 15:50:51');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
