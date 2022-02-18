DROP DATABASE IF EXISTS spaceED;

CREATE DATABASE spaceED;

USE spaceED;

CREATE TABLE type (
  id_type int(10) NOT NULL AUTO_INCREMENT,
  image_type varchar(950) NOT NULL,
  label_type varchar(150) NOT NULL,
  PRIMARY KEY (id_type)
);

CREATE TABLE category (
  id_category int(10) NOT NULL AUTO_INCREMENT,
  label_category varchar(150) NOT NULL,
  PRIMARY KEY (id_category)
);

CREATE TABLE users (
  id_user int NOT NULL AUTO_INCREMENT,
  firstName varchar(350) NOT NULL,
  lastName varchar(350) NOT NULL,
  email varchar(350) ,
  password varchar(350) NOT NULL,
  phone int(10) NOT NULL,
  dob varchar (10) ,
  id_category int(10) NOT NULL,
  image_user varchar(900) NOT NULL,
  active boolean NOT NULL,
  PRIMARY KEY (id_user),
  foreign key (id_category) references category (id_category)
);

CREATE TABLE posts (
  id_post int NOT NULL AUTO_INCREMENT,
  title varchar(350) NOT NULL,
  description varchar(350) NOT NULL,
  image_post varchar(350) NOT NULL,
  id_type int NOT NULL,
  id_user int NOT NULL,
  PRIMARY KEY (id_post),
  foreign key (id_type) references type (id_type),
  foreign key (id_user) references users (id_user)
);

CREATE TABLE booking (
  id_user int NOT NULL,
  id_post int NOT NULL,
  status_booking boolean default false NOT NULL,
  PRIMARY KEY (id_post,id_user),
  foreign key (id_post) references posts (id_post),
  foreign key (id_user) references users (id_user)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/