-- DROP SCHEMA guide;

CREATE SCHEMA guide AUTHORIZATION postgres;

COMMENT ON SCHEMA guide IS 'Справочники';

-- DROP SEQUENCE guide.access_id_seq;

CREATE SEQUENCE guide.access_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE guide.categories_id_seq;

CREATE SEQUENCE guide.categories_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE guide.cpa_id_seq;

CREATE SEQUENCE guide.cpa_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE guide.method_get_money_id_seq;

CREATE SEQUENCE guide.method_get_money_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE guide.type_docs_id_seq;

CREATE SEQUENCE guide.type_docs_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE guide.type_interval_id_seq;

CREATE SEQUENCE guide.type_interval_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- guide."access" definition

-- Drop table

-- DROP TABLE guide."access";

CREATE TABLE guide."access" (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор прав доступа
	"name" varchar NOT NULL, -- Наименование прав доступа
	CONSTRAINT access_pk PRIMARY KEY (id)
);
COMMENT ON TABLE guide."access" IS 'Список прав доступа';

-- Column comments

COMMENT ON COLUMN guide."access".id IS 'Идентификатор прав доступа';
COMMENT ON COLUMN guide."access"."name" IS 'Наименование прав доступа';


-- guide.categories definition

-- Drop table

-- DROP TABLE guide.categories;

CREATE TABLE guide.categories (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор
	"name" varchar NOT NULL, -- Наименование категории оффера
	description varchar NULL, -- Описание категории
	CONSTRAINT categories_pk PRIMARY KEY (id)
);
COMMENT ON TABLE guide.categories IS 'Категория оффера';

-- Column comments

COMMENT ON COLUMN guide.categories.id IS 'Идентификатор';
COMMENT ON COLUMN guide.categories."name" IS 'Наименование категории оффера';
COMMENT ON COLUMN guide.categories.description IS 'Описание категории';


-- guide.cpa definition

-- Drop table

-- DROP TABLE guide.cpa;

CREATE TABLE guide.cpa (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор партнерской программы
	"name" varchar NOT NULL, -- Наименование партнерской программы
	CONSTRAINT cpa_pk PRIMARY KEY (id)
);
COMMENT ON TABLE guide.cpa IS 'Партнерская программа';

-- Column comments

COMMENT ON COLUMN guide.cpa.id IS 'Идентификатор партнерской программы';
COMMENT ON COLUMN guide.cpa."name" IS 'Наименование партнерской программы';


-- guide.method_get_money definition

-- Drop table

-- DROP TABLE guide.method_get_money;

CREATE TABLE guide.method_get_money (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор способа получения денег
	"name" varchar NULL, -- Наименование способо получения денег
	CONSTRAINT method_get_money_pk PRIMARY KEY (id)
);

-- Column comments

COMMENT ON COLUMN guide.method_get_money.id IS 'Идентификатор способа получения денег';
COMMENT ON COLUMN guide.method_get_money."name" IS 'Наименование способо получения денег';


-- guide.type_docs definition

-- Drop table

-- DROP TABLE guide.type_docs;

CREATE TABLE guide.type_docs (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор типа документа
	"name" varchar NULL, -- Наименование типа документа
	CONSTRAINT type_docs_pk PRIMARY KEY (id)
);
COMMENT ON TABLE guide.type_docs IS 'Типы документов';

-- Column comments

COMMENT ON COLUMN guide.type_docs.id IS 'Идентификатор типа документа';
COMMENT ON COLUMN guide.type_docs."name" IS 'Наименование типа документа';


-- guide.types_period definition

-- Drop table

-- DROP TABLE guide.types_period;

CREATE TABLE guide.types_period (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор типа периода
	"name" varchar NULL, -- Наименование типа периода
	mnosh varchar NULL, -- Множественное число
	CONSTRAINT type_interval_pk PRIMARY KEY (id)
);
COMMENT ON TABLE guide.types_period IS 'Виды периодов';

-- Column comments

COMMENT ON COLUMN guide.types_period.id IS 'Идентификатор типа периода';
COMMENT ON COLUMN guide.types_period."name" IS 'Наименование типа периода';
COMMENT ON COLUMN guide.types_period.mnosh IS 'Множественное число ';
