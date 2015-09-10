create database laoyou

use laoyou

delimiter //

create table `circle` (
	`id` int(11) primary key auto_increment comment 'primary key',
	`name` varchar(250) not null comment 'circle name',
	`password` varchar(250) not null comment 'admin password'
)engine=InnoDB default charset=utf8 comment 'friend circle'
//

delimiter ;
