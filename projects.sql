-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: projects
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `idProject` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `link` varchar(450) DEFAULT NULL,
  `img` varchar(450) DEFAULT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`idProject`),
  KEY `fk_userId_idx` (`userId`),
  CONSTRAINT `fk_idUser` FOREIGN KEY (`userId`) REFERENCES `user` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (10,'Vanilla JS Note App ?','It is an hometask project for the Radency interneship. Users can add, edit and remove notes. The code for this makes use of the following HTML, CSS, JS features: Local Storage, ES6 Import/Export Syntax, Classes, Arrow Functions, Static Methods, Callback Functions, Event Listeners, QuerySelector, GetElementById, Template Strings, Class List, Flexbox.','28 Jul 2023','https://note-app-vanilla-js.netlify.app/','https://daria-nahorna.netlify.app/images/vanilla-note-appPNG.webp',1),(11,'React Dictionary Application ✨','Web App based on the API. A dictionary app information about any word. Additionally, the app displays photos that match the word. This is a single page application that uses axios to get data from the open dictionary API and unsplash API and React renders this data.','28 Jul 2023','https://awesowe-dictionary-application.netlify.app/','https://daria-nahorna.netlify.app/images/ScreenshotDictionary.webp',1),(13,'React Note App ✍️','This application is part of the hometask for internship in Radenсy company. The code for this makes use of the following HTML, CSS, TS features, React, Redux: import/export syntax, arrow functions, types, callback functions, props, useState, useEffect, store, reducer, props, state, onClick, onChange, dispatch, action.','28 Jul 2023','https://note-app-react-js.netlify.app/','https://daria-nahorna.netlify.app/images/react-note-appPNG.webp',1),(15,'React Sea Battle Game ?','This is an educational project that I completed as part of the Free React Course from Itera. Very symbolic for me. It was not easy for me during the course, in the process we had to create a custom state, use Typescript and work a lot with lambda functions. Nevertheless, a cool result and a lot of fun.','24 Aug 2022','https://react-sea-battle.netlify.app/','https://daria-nahorna.netlify.app/images/seabattle.webp',1),(18,'Vanilla Weather Application ?','The application shows a current weather info, todays and 6-day forecast. OpenWeather API provides access to current weather data for any location on Earth including over 200,000 cities.','16 Jun 2022','https://darias-weather-in-your-city.netlify.app/','https://daria-nahorna.netlify.app/images/weather.webp',1),(38,'Portfolio ?','This project allowed me to experiment with shapes, alignment and positioning. As a result site you are on. In the photo, there is an example of one of the ideas that I abandoned due to poor adaptability on mobile. But instead, you can see the version of the site as it was implemented ?','17 Jul 2022','https://daria-nahorna.netlify.app/index.html','https://daria-nahorna.netlify.app/images/portfolio.webp',1),(39,'Culinary Page ?','This page was created as part of my \"Program Every Day\" challenge. That\'s why it\'s very special to me, even though it\'s not rocket science. HTML and CSS are used here.','31 Jul 2023','https://culinary-page-pure-html.netlify.app/','https://daria-nahorna.netlify.app/images/soup.webp',1),(43,'CLI App','This a part of Foo Coding. CLI applicathion using async','04 Jul 2023','https://github.com/Darnahorna/FooCoding/tree/main/nodejs/week02','nahorna.netlify.app/images/soup.webp',3),(44,'Node JS Server','This a part of Foo Coding HTTP Server without any libraries','27 Jun 2023','https://github.com/Darnahorna/FooCoding/tree/main/nodejs/week01','nahorna.netlify.app/images/soup.webp',3),(45,'MySQL CRUD Operations','This a part of Foo Coding. Node Js App using MySQL databases as backend','21 Jun 2023','https://github.com/Darnahorna/FooCoding/tree/main/databases/week03','nahorna.netlify.app/images/soup.webp',3),(47,'Portfolio ','Backend','5 Aug 2023','http://localhost:8080/link','http://localhost:8080/admin',3),(48,'Vanilla Weather Application ?','The application shows a current weather info, todays and 6-day forecast. OpenWeather API provides access to current weather data for any location on Earth including over 200,000 cities.','3 Aug 2023','https://darias-weather-in-your-city.netlify.app/','https://daria-nahorna.netlify.app/images/weather.webp',1);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('s00wXu6qZdXdBTYq3W1_1iN4S-7vdo8W',1691340729,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-08-06T16:18:33.692Z\",\"httpOnly\":false,\"path\":\"/\"},\"user\":{\"idUser\":3,\"email\":\"feny@nv.com\",\"password\":\"$2a$08$TVzfM9On0.IZ06YQO6DBlOnu8vUPEyHPAQ/qaCCuByS1JI9lfFJBy\",\"firstName\":\"Feny\",\"lastName\":\"J.\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `idTag` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idTag`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'HTML'),(2,'CSS'),(3,'JS'),(4,'React'),(5,'Typescript'),(6,'Node'),(7,'Express'),(8,'Joi'),(9,'MySQL');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag_project`
--

DROP TABLE IF EXISTS `tag_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag_project` (
  `tagId` int NOT NULL,
  `projectId` int NOT NULL,
  KEY `fk_tagId_idx` (`tagId`),
  KEY `fk_projectId_idx` (`projectId`),
  CONSTRAINT `fk_projectId` FOREIGN KEY (`projectId`) REFERENCES `project` (`idProject`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_tagId` FOREIGN KEY (`tagId`) REFERENCES `tag` (`idTag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag_project`
--

LOCK TABLES `tag_project` WRITE;
/*!40000 ALTER TABLE `tag_project` DISABLE KEYS */;
INSERT INTO `tag_project` VALUES (1,10),(1,11),(2,11),(2,10),(3,10),(4,11),(9,38),(3,18),(1,39),(2,39),(3,39),(3,39),(9,38),(1,38),(2,38),(3,38),(6,38),(1,18),(1,18),(2,18),(3,18),(3,15),(1,15),(2,15),(4,15),(3,13),(1,13),(2,13),(4,13),(5,13);
/*!40000 ALTER TABLE `tag_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(450) NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'daria@scout.se','$2a$08$3oe//9a6VI.0XHGiysReRuXxqg2tQX52mRMHyvqF7AOruMNUQkz.a','Darko','L.'),(2,'mila@da.da','$2a$10$KvxvGe9CbYYoADJxAprFb.Q7sP.QAy80M4FfJJYfTzHP2nvkP88Z6','Mila','Yo.'),(3,'feny@nv.com','$2a$08$TVzfM9On0.IZ06YQO6DBlOnu8vUPEyHPAQ/qaCCuByS1JI9lfFJBy','Feny','J.');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-05 20:33:40
