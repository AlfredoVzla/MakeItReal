
CREATE DATABASE IF NOT EXISTS makeitreal;
USE makeitreal;

-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: makeitreal
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `idComentario` int NOT NULL AUTO_INCREMENT,
  `texto` varchar(80) NOT NULL,
  `fecha` date NOT NULL,
  `calificacion` int NOT NULL,
  `id_Proyecto` int NOT NULL,
  PRIMARY KEY (`idComentario`),
  KEY `idProyecto_idx` (`id_Proyecto`),
  CONSTRAINT `idProyectoF` FOREIGN KEY (`id_Proyecto`) REFERENCES `proyecto` (`idProyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emprendedor`
--

DROP TABLE IF EXISTS `emprendedor`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE `emprendedor` (
  `idEmprendedor` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `correoElectronico` varchar(45) NOT NULL,
  `nombreUsuario` varchar(45) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `imagenPerfil` varchar(200) NOT NULL,
  PRIMARY KEY (`idEmprendedor`),
  UNIQUE KEY `nombreUsuario_UNIQUE` (`nombreUsuario`),
  UNIQUE KEY `correoElectronico_UNIQUE` (`correoElectronico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Dumping data for table `emprendedor`
--

LOCK TABLES `emprendedor` WRITE;
/*!40000 ALTER TABLE `emprendedor` DISABLE KEYS */;
/*!40000 ALTER TABLE `emprendedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenproyecto`
--

DROP TABLE IF EXISTS `imagenproyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenproyecto` (
  `idimagenProyecto` int NOT NULL AUTO_INCREMENT,
  `imagen` varchar(200) NOT NULL,
  `idProyecto` int NOT NULL,
  PRIMARY KEY (`idimagenProyecto`),
  KEY `idProyecto_idx` (`idProyecto`),
  CONSTRAINT `id` FOREIGN KEY (`idProyecto`) REFERENCES `proyecto` (`idProyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenproyecto`
--

LOCK TABLES `imagenproyecto` WRITE;
/*!40000 ALTER TABLE `imagenproyecto` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenproyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pago`
--

DROP TABLE IF EXISTS `pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pago` (
  `idPago` int NOT NULL AUTO_INCREMENT,
  `monto` float NOT NULL,
  `fecha` date NOT NULL,
  `método` varchar(45) NOT NULL,
  `concepto` varchar(45) NOT NULL,
  `id_Patrocinador` int NOT NULL,
  `id_Proyecto` int NOT NULL,
  PRIMARY KEY (`idPago`),
  KEY `idPatrocinador_idx` (`id_Patrocinador`),
  KEY `idProyecto_idx` (`id_Proyecto`),
  CONSTRAINT `idPatrocinador` FOREIGN KEY (`id_Patrocinador`) REFERENCES `patrocinador` (`idPatrocinador`),
  CONSTRAINT `idProyecto` FOREIGN KEY (`id_Proyecto`) REFERENCES `proyecto` (`idProyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pago`
--

LOCK TABLES `pago` WRITE;
/*!40000 ALTER TABLE `pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patrocinador`
--

DROP TABLE IF EXISTS `patrocinador`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE `patrocinador` (
  `idPatrocinador` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `correoElectronico` varchar(45) NOT NULL,
  `nombreUsuario` varchar(45) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `imagenPerfil` varchar(200) NOT NULL,
  `proyectosPatrocinador` int NOT NULL,
  `montoTotalPatrocinado` float NOT NULL,
  `experienciaProyectos` varchar(45) NOT NULL,
  PRIMARY KEY (`idPatrocinador`),
  UNIQUE KEY `nombreUsuario_UNIQUE` (`nombreUsuario`),
  UNIQUE KEY `correoElectronico_UNIQUE` (`correoElectronico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Dumping data for table `patrocinador`
--

LOCK TABLES `patrocinador` WRITE;
/*!40000 ALTER TABLE `patrocinador` DISABLE KEYS */;
/*!40000 ALTER TABLE `patrocinador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyecto` (
  `idProyecto` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaCreación` date NOT NULL,
  `objetivo` varchar(200) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `masInformacion` varchar(45) NOT NULL,
  `metaFinanciamiento` float NOT NULL,
  `cantidadRecaudada` float NOT NULL,
  `id_Categoria` int NOT NULL,
  `id_Emprendedor` int NOT NULL,
  PRIMARY KEY (`idProyecto`),
  KEY `idCategoria_idx` (`id_Categoria`),
  KEY `idEmprendedor_idx` (`id_Emprendedor`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`id_Categoria`) REFERENCES `categoria` (`idCategoria`),
  CONSTRAINT `idEmprendedor` FOREIGN KEY (`id_Emprendedor`) REFERENCES `emprendedor` (`idEmprendedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-05 14:51:33
