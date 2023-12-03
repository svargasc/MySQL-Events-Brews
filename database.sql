create database eventsBrews;

use eventsBrews;

create table users(
id int auto_increment primary key,
username varchar(50) not null,
email varchar(50) not null,
password longtext
);

CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(100),
  description VARCHAR(200),
  address VARCHAR(100),
  date DATETIME,
  done BOOLEAN NOT NULL DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
