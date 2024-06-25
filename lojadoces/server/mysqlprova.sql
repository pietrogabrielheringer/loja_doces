CREATE DATABASE loja_doce; 
use loja_doce; 


create table categoria_doce(
id_categ int primary key auto_increment, 
nome_categ varchar(45)
); 

create table cadastro_doce(
id_doce int primary key auto_increment, 
nome_doce varchar(45)
); 

insert into categoria_doce(nome_categ) values 
("Bolos"), ("Doces Finos"), ("Doces Tradicionais"), ("Tortas")
;

select * from categoria_doce; 
update categoria_doce set nome_categ = "Bolos" where 
id_categ = 1; 

delete from categoria_doce where id_categ = 1; 

