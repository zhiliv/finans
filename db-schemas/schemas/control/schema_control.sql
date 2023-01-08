-- DROP SCHEMA controls;

CREATE SCHEMA controls AUTHORIZATION postgres;

COMMENT ON SCHEMA controls IS 'Список пользователей';

-- DROP SEQUENCE controls.users_id_seq;

CREATE SEQUENCE controls.users_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- controls.users definition

-- Drop table

-- DROP TABLE controls.users;

CREATE TABLE controls.users (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор пользователя
	"name" varchar NOT NULL, -- Имя пользователя
	"password" varchar NOT NULL, -- Пароль пользователя
	create_dt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Дата создания
	update_dt timestamp NULL, -- Дата обновления записи
	CONSTRAINT users_pk PRIMARY KEY (id)
);

-- Column comments

COMMENT ON COLUMN controls.users.id IS 'Идентификатор пользователя';
COMMENT ON COLUMN controls.users."name" IS 'Имя пользователя';
COMMENT ON COLUMN controls.users."password" IS 'Пароль пользователя';
COMMENT ON COLUMN controls.users.create_dt IS 'Дата создания';
COMMENT ON COLUMN controls.users.update_dt IS 'Дата обновления записи';

CREATE OR REPLACE FUNCTION controls.update_changetimestamp_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
   NEW.update_date = now();
   RETURN NEW;
END;
$function$
;


-- Table Triggers

create trigger update_date before
update
    on
    controls.users for each row execute function controls.update_changetimestamp_column();


-- controls."access" definition

-- Drop table

-- DROP TABLE controls."access";

CREATE TABLE controls."access" (
	id int4 NOT NULL, -- Идентификатор пара доступа пользователя
	user_id int4 NOT NULL, -- Идентификатор пользоватлея
	access_id int4 NOT NULL, -- Идентификатор значения права доступа
	state bool NULL, -- Состояние права доступа пользователя
	CONSTRAINT access_pk PRIMARY KEY (id)
);
COMMENT ON TABLE controls."access" IS 'Права доступа пользователей';

-- Column comments

COMMENT ON COLUMN controls."access".id IS 'Идентификатор пара доступа пользователя';
COMMENT ON COLUMN controls."access".user_id IS 'Идентификатор пользоватлея';
COMMENT ON COLUMN controls."access".access_id IS 'Идентификатор значения права доступа';
COMMENT ON COLUMN controls."access".state IS 'Состояние права доступа пользователя';

-- controls."access" foreign keys

ALTER TABLE controls."access" ADD CONSTRAINT access_id_fk FOREIGN KEY (access_id) REFERENCES guide."access"(id);
ALTER TABLE controls."access" ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES controls.users(id);

