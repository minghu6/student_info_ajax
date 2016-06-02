
create database student_info;

use student_info;

/* contact_way phone number*/
create table register(
	id char(11) primary key,
	name varchar(30) not null,
	major char(10) not null,
	class char(7) not null,
	sexuality char(2) not null,
	birth date default null,
	entry_date date not null,
	_from varchar(60) default null,
	contact_way varchar(13) not null 
);


insert into
register(id, name, major, class, sexuality, birth, entry_date, _from, contact_way)
values('13037654321', '赵子龙',  '计算机', '1303021', '男', '1995-01-11', '2013-09-01', '黑龙江漠河', '18876543210');

insert into
register(id, name, major, class, sexuality, birth, entry_date, _from, contact_way)
values('13037654320', '加藤惠',  '计算机', '1303021', '女', '1995-01-11', '2013-09-01', '关东', '18876543211');