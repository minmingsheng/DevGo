-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 06, 2016 at 04:21 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devgo`
--

-- --------------------------------------------------------

--
-- Table structure for table `php`
--

DROP TABLE IF EXISTS `php`;
CREATE TABLE IF NOT EXISTS `php` (
  `id` int(11) NOT NULL,
  `syntax` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `php`
--

INSERT INTO `php` (`id`, `syntax`) VALUES
(1, '<?php\r\necho "Hello World!";\r\n?>'),
(2, '$color = "red";\r\necho "My car is " . $color . "<br>";'),
(3, '<?php\r\n$txt = "devgo.com";\r\necho "I love $txt!";\r\n?>'),
(4, '<?php\r\n$x = 5;\r\n$y = 4;\r\necho $x + $y;\r\n?>'),
(5, '$x = 5985;\r\nvar_dump($x);'),
(6, '$cars = array("Volvo","BMW","Toyota");\r\nvar_dump($cars);'),
(7, 'class Car {\r\n    function Car() {\r\n        $this->model = "VW";\r\n    }\r\n}\r\n$herbie = new Car();\r\necho $herbie->model;'),
(8, '<?php\r\necho strlen("Hello world!");\r\n?>'),
(9, '<?php\r\necho str_word_count("Hello world!");\r\n?>'),
(10, 'echo strpos("Hello world!", "world"); '),
(11, 'echo str_replace("world", "Dolly", "Hello world!");'),
(12, 'define("GREETING", "Welcome to W3Schools.com!");\r\necho GREETING;'),
(13, 'define("GREETING", "Welcome to W3Schools.com!", true);\r\necho greeting;'),
(14, '$t = date("H");\r\n\r\nif ($t < "20") {\r\n    echo "Have a good day!";\r\n}'),
(15, 'function setHeight($minheight = 50) {\r\n    echo "The height is : $minheight <br>";\r\n}'),
(16, '$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");\r\necho "Peter is " . $age[''Peter''] . " years old.";'),
(17, '$cars = array("Volvo", "BMW", "Toyota");\r\nsort($cars);'),
(18, '$numbers = array(4, 6, 2, 22, 11);\r\nsort($numbers);'),
(19, 'echo $_SERVER[''PHP_SELF''];'),
(20, 'echo $_SERVER[''SERVER_NAME''];'),
(21, 'echo $_SERVER[''HTTP_HOST''];'),
(22, 'echo $_SERVER[''HTTP_REFERER''];'),
(23, 'echo $_SERVER[''HTTP_USER_AGENT''];'),
(24, 'echo $_SERVER[''SCRIPT_NAME''];'),
(25, '$cars = array\r\n  (\r\n  array("Volvo",22,18),\r\n  array("BMW",15,13),\r\n  array("Saab",5,2),\r\n  array("Land Rover",17,15)\r\n  );'),
(26, '$str = "<h1>Hello World!</h1>";\r\n$newstr = filter_var($str, FILTER_SANITIZE_STRING);\r\necho $newstr;'),
(27, '$ip = "127.0.0.1";\r\n\r\nif (!filter_var($ip, FILTER_VALIDATE_IP) === false) {\r\n    echo("$ip is a valid IP address");\r\n} else {\r\n    echo("$ip is not a valid IP address");'),
(28, '$email = "john.doe@example.com";\r\n\r\n$email = filter_var($email, FILTER_SANITIZE_EMAIL);'),
(29, '$url = "http://www.w3schools.com";\r\n\r\n$url = filter_var($url, FILTER_SANITIZE_URL);\r\n'),
(30, '$_SESSION["favcolor"] = "green";\r\n'),
(31, '<?php\r\nsession_start();\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<body>\r\n\r\n<?php\r\nprint_r($_SESSION);\r\n?>\r\n\r\n</body>\r\n</html>'),
(32, 'session_unset(); ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `php`
--
ALTER TABLE `php`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `php`
--
ALTER TABLE `php`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
