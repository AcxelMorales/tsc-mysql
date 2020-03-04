CREATE DATABASE node_ts_mysql;

CREATE TABLE posts(
    id INT(11) NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    desct TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE posts;

USE node_ts_mysql;

SHOW TABLES;