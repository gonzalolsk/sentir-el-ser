DROP DATABASE IF EXISTS sentir_el_ser_db;
CREATE DATABASE sentir_el_ser_db;
USE sentir_el_ser_db;


DROP TABLE IF EXISTS `product_type`;
CREATE TABLE `product_type`(
    `id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `name` varchar(50) NOT NULL,
    `long_description` text DEFAULT NULL,
    `short_description` text DEFAULT NULL
);

DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers`(
    `id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `first_name` varchar(20) NOT NULL,
    `last_name` varchar(20) NOT NULL,
    `long_description` text DEFAULT NULL,
    `short_description` text DEFAULT NULL,
    `img` varchar(255) DEFAULT NULL
);

DROP TABLE IF EXISTS `products`;
create table `products` (
  `id` INT UNSIGNED NOT NULL auto_increment,
  `name` varchar(255) not null,
  `long_description` text DEFAULT NULL,
  `short_description` text DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `price` INT NOT NULL,
  `discount` INT DEFAULT 0,
  `product_type_id` INT UNSIGNED not null,
  `teacher_id` INT UNSIGNED not null,
  `created_at` TIMESTAMP default CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `baja` TINYINT(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`product_type_id`) REFERENCES `product_type` (`id`),
  FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`)
);


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT UNSIGNED AUTO_INCREMENT NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(24) NOT NULL,
  `password` varchar(95) NOT NULL,
  `admin` TINYINT (1) NOT NULL DEFAULT 0,
  `img` varchar(95) DEFAULT NULL,
  `birth_date` date NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `condiciones` TINYINT (1) NOT NULL,
  `baja` TINYINT (1) DEFAULT 0,
  `products_purchaced` INT UNSIGNED DEFAULT NULL, 
  PRIMARY KEY (`id`),
  FOREIGN KEY (`products_purchaced`) REFERENCES `products` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;



DROP TABLE IF EXISTS `shopping_cart`;
CREATE TABLE `shopping_cart` (
	  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  	`user_id` 		INT	UNSIGNED NOT NULL,
  	`products_id`	INT UNSIGNED NOT NULL,
  	`created_at`	TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`updated_at`	TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`date_shop`	DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	`actual_price`	FLOAT(8,2) NOT NULL,
  	`active`		TINYINT (1) NOT NULL,
  	PRIMARY KEY (`id`),
  	FOREIGN KEY (`user_id`) REFERENCES	`users` (`id`),
  	FOREIGN KEY (`products_id`) REFERENCES `products`(`id`)
);

DROP TABLE IF EXISTS `post_category`;
CREATE TABLE `post_category`(
    `id` INT UNSIGNED AUTO_INCREMENT NOT NULL,
    `name` varchar(50) NOT NULL,
  	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `blog_posts`;
CREATE TABLE `blog_posts`(
    `id` INT UNSIGNED AUTO_INCREMENT NOT NULL,
    `title` varchar(20) NOT NULL,
    `brief` text DEFAULT NULL,
    `content` text DEFAULT NULL,
    `img` varchar(255) DEFAULT NULL,
    `post_category_id` INT UNSIGNED not null,
    `teacher_id` INT UNSIGNED not null,
    `comments_id` text DEFAULT NULL,
    `created_at` TIMESTAMP default CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	PRIMARY KEY (`id`),
  	FOREIGN KEY (`post_category_id`) REFERENCES	`post_category` (`id`),
  	FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`)
);


DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`(
    `id` INT UNSIGNED AUTO_INCREMENT NOT NULL,
    `comment` varchar(20) NOT NULL,
    `user_id` INT UNSIGNED not null,
    `post_id` INT UNSIGNED not null,
    `created_at` TIMESTAMP default CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	PRIMARY KEY (`id`),
  	FOREIGN KEY (`user_id`) REFERENCES	`users` (`id`),
  	FOREIGN KEY (`post_id`) REFERENCES `blog_posts`(`id`)
);


