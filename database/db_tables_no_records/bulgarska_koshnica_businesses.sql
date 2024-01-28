-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: bulgarska_koshnica
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `businesses`
--

DROP TABLE IF EXISTS `businesses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `businesses` (
  `business_id` int unsigned NOT NULL AUTO_INCREMENT,
  `business_name` varchar(50) NOT NULL,
  `user_id` int unsigned NOT NULL,
  `phone_number` varchar(14) NOT NULL,
  `business_email` varchar(50) DEFAULT NULL,
  `schedule` varchar(28) DEFAULT NULL,
  `website` varchar(100) DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `delivery` int NOT NULL,
  `pos_terminal` tinyint(1) NOT NULL,
  `address` varchar(100) NOT NULL,
  `location_latitude` decimal(9,6) NOT NULL,
  `location_longtitude` decimal(9,6) NOT NULL,
  `category` int NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `rating_average` decimal(2,1) DEFAULT NULL,
  `rating_count` int DEFAULT NULL,
  `location_region` int NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `keywords` varchar(500) DEFAULT NULL,
  `metrics_id` int unsigned NOT NULL,
  PRIMARY KEY (`business_id`),
  KEY `metrics_id` (`metrics_id`),
  CONSTRAINT `businesses_ibfk_1` FOREIGN KEY (`metrics_id`) REFERENCES `metrics` (`metrics_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `businesses`
--

LOCK TABLES `businesses` WRITE;
/*!40000 ALTER TABLE `businesses` DISABLE KEYS */;
/*!40000 ALTER TABLE `businesses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-28 20:33:52
