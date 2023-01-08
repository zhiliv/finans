-- DROP SCHEMA prod;

CREATE SCHEMA prod AUTHORIZATION postgres;

COMMENT ON SCHEMA prod IS 'Финансовые продукты';

-- DROP SEQUENCE prod.baners_id_seq;

CREATE SEQUENCE prod.baners_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE prod.link_get_money_id_seq;

CREATE SEQUENCE prod.link_get_money_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE prod.offers_id_seq;

CREATE SEQUENCE prod.offers_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- prod.baners definition

-- Drop table

-- DROP TABLE prod.baners;

CREATE TABLE prod.baners (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор банера
	id_offer int4 NOT NULL, -- Идентификатор оффера
	"path" varchar NOT NULL, -- Путь к изображению
	CONSTRAINT baners_pk PRIMARY KEY (id)
);
COMMENT ON TABLE prod.baners IS 'Наименование изображений для оффера';

-- Column comments

COMMENT ON COLUMN prod.baners.id IS 'Идентификатор банера';
COMMENT ON COLUMN prod.baners.id_offer IS 'Идентификатор оффера';
COMMENT ON COLUMN prod.baners."path" IS 'Путь к изображению';


-- prod.link_get_money definition

-- Drop table

-- DROP TABLE prod.link_get_money;

CREATE TABLE prod.link_get_money (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор  связи
	id_offer int4 NOT NULL, -- Идентификатор оффера
	id_method_get_money int4 NOT NULL, -- Идентификатор способа получения денег
	CONSTRAINT link_get_money_pk PRIMARY KEY (id)
);
COMMENT ON TABLE prod.link_get_money IS 'Способ получения денег';

-- Column comments

COMMENT ON COLUMN prod.link_get_money.id IS 'Идентификатор  связи';
COMMENT ON COLUMN prod.link_get_money.id_offer IS 'Идентификатор оффера';
COMMENT ON COLUMN prod.link_get_money.id_method_get_money IS 'Идентификатор способа получения денег';


-- prod.offers definition

-- Drop table

-- DROP TABLE prod.offers;

CREATE TABLE prod.offers (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY, -- Идентификатор
	"name" varchar NOT NULL, -- Наименование оффера
	id_category int4 NULL, -- Идентификатор категории
	id_cpa int4 NULL, -- Идентификатор партнерской программы
	description text NULL, -- Описание оффера
	short_description varchar NULL, -- Короткое описание оффера
	sum_start int4 NULL, -- Минимальная сумма
	sum_end int4 NULL, -- Максимальная сумма
	free_period int4 NULL, -- Беспроцентный период
	type_free_period int4 NULL, -- Тип беспроцентного периода
	period_min int4 NULL, -- Минимальный срок
	type_period_min int4 NULL, -- Тип минимального срока
	period_max int4 NULL, -- Максимальный срок
	type_period_max int4 NULL, -- Тип максимального срока
	review_time int4 NULL, -- Время рассмотрения
	type_review_time int4 NULL, -- Тип времени рассмотрения
	age_start varchar NULL, -- Минимальный возраст
	age_end varchar NULL, -- Максимальный возраст
	percent_min float4 NULL, -- Минимальная процентная ставка
	type_percent_min int4 NULL, -- Тип минимальной процентной ставки
	percent_max float4 NULL, -- Максимальная процентная ставка
	type_percent_max int4 NULL, -- Тип максимальной процентной ставки
	profit varchar NULL, -- Размер вознаграждения
	desription_profit varchar NULL, -- Описание для получения вознаграждения
	url_offer varchar NULL, -- Ссылка на оффер
	site varchar NULL, -- Ссылка на сайт
	cr float4 NULL, -- Количество уникальных конверсий / Количество уникальных кликов на баннеры
	ar float4 NULL, -- Процент одобрения
	epc float4 NULL, -- Средний заработок в пересчете на один уникальный клик
	create_dt date NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Дата создания
	update_dt date NULL, -- Дата последнего обновления
	user_create int4 NOT NULL, -- Пользователь создавший запись
	user_update int4 NULL, -- Пользователь обновивший запись
	CONSTRAINT offers_pk PRIMARY KEY (id)
);
COMMENT ON TABLE prod.offers IS 'Офферы';

-- Column comments

COMMENT ON COLUMN prod.offers.id IS 'Идентификатор';
COMMENT ON COLUMN prod.offers."name" IS 'Наименование оффера';
COMMENT ON COLUMN prod.offers.id_category IS 'Идентификатор категории';
COMMENT ON COLUMN prod.offers.id_cpa IS 'Идентификатор партнерской программы';
COMMENT ON COLUMN prod.offers.description IS 'Описание оффера';
COMMENT ON COLUMN prod.offers.short_description IS 'Короткое описание оффера';
COMMENT ON COLUMN prod.offers.sum_start IS 'Минимальная сумма';
COMMENT ON COLUMN prod.offers.sum_end IS 'Максимальная сумма';
COMMENT ON COLUMN prod.offers.free_period IS 'Беспроцентный период';
COMMENT ON COLUMN prod.offers.type_free_period IS 'Тип беспроцентного периода';
COMMENT ON COLUMN prod.offers.period_min IS 'Минимальный срок';
COMMENT ON COLUMN prod.offers.type_period_min IS 'Тип минимального срока';
COMMENT ON COLUMN prod.offers.period_max IS 'Максимальный срок';
COMMENT ON COLUMN prod.offers.type_period_max IS 'Тип максимального срока';
COMMENT ON COLUMN prod.offers.review_time IS 'Время рассмотрения';
COMMENT ON COLUMN prod.offers.type_review_time IS 'Тип времени рассмотрения';
COMMENT ON COLUMN prod.offers.age_start IS 'Минимальный возраст';
COMMENT ON COLUMN prod.offers.age_end IS 'Максимальный возраст';
COMMENT ON COLUMN prod.offers.percent_min IS 'Минимальная процентная ставка';
COMMENT ON COLUMN prod.offers.type_percent_min IS 'Тип минимальной процентной ставки';
COMMENT ON COLUMN prod.offers.percent_max IS 'Максимальная процентная ставка';
COMMENT ON COLUMN prod.offers.type_percent_max IS 'Тип максимальной процентной ставки';
COMMENT ON COLUMN prod.offers.profit IS 'Размер вознаграждения';
COMMENT ON COLUMN prod.offers.desription_profit IS 'Описание для получения вознаграждения';
COMMENT ON COLUMN prod.offers.url_offer IS 'Ссылка на оффер';
COMMENT ON COLUMN prod.offers.site IS 'Ссылка на сайт';
COMMENT ON COLUMN prod.offers.cr IS 'Количество уникальных конверсий / Количество уникальных кликов на баннеры';
COMMENT ON COLUMN prod.offers.ar IS 'Процент одобрения';
COMMENT ON COLUMN prod.offers.epc IS 'Средний заработок в пересчете на один уникальный клик';
COMMENT ON COLUMN prod.offers.create_dt IS 'Дата создания';
COMMENT ON COLUMN prod.offers.update_dt IS 'Дата последнего обновления';
COMMENT ON COLUMN prod.offers.user_create IS 'Пользователь создавший запись';
COMMENT ON COLUMN prod.offers.user_update IS 'Пользователь обновивший запись';

CREATE OR REPLACE FUNCTION prod.update_changetimestamp_column()
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
    prod.offers for each row execute function prod.update_changetimestamp_column();


-- prod.baners foreign keys

ALTER TABLE prod.baners ADD CONSTRAINT baners_fk FOREIGN KEY (id_offer) REFERENCES prod.offers(id);


-- prod.link_get_money foreign keys

ALTER TABLE prod.link_get_money ADD CONSTRAINT id_get_money_fk FOREIGN KEY (id_method_get_money) REFERENCES guide.method_get_money(id);
ALTER TABLE prod.link_get_money ADD CONSTRAINT id_offer_fk FOREIGN KEY (id_offer) REFERENCES prod.offers(id);


-- prod.offers foreign keys

ALTER TABLE prod.offers ADD CONSTRAINT category_fk FOREIGN KEY (id_category) REFERENCES guide.categories(id) ON UPDATE CASCADE;
ALTER TABLE prod.offers ADD CONSTRAINT cpa_fk FOREIGN KEY (id_cpa) REFERENCES guide.cpa(id);
ALTER TABLE prod.offers ADD CONSTRAINT type_free_period_fk FOREIGN KEY (type_free_period) REFERENCES guide.types_period(id);
ALTER TABLE prod.offers ADD CONSTRAINT type_percent_max_fk FOREIGN KEY (type_percent_max) REFERENCES guide.types_period(id);
ALTER TABLE prod.offers ADD CONSTRAINT type_percent_min_fk FOREIGN KEY (type_percent_min) REFERENCES guide.types_period(id);
ALTER TABLE prod.offers ADD CONSTRAINT type_period_max_fk FOREIGN KEY (type_period_max) REFERENCES guide.types_period(id);
ALTER TABLE prod.offers ADD CONSTRAINT type_period_min_fk FOREIGN KEY (type_period_min) REFERENCES guide.types_period(id);
ALTER TABLE prod.offers ADD CONSTRAINT type_review_time_fk FOREIGN KEY (type_review_time) REFERENCES guide.types_period(id);
ALTER TABLE prod.offers ADD CONSTRAINT user_create_fk FOREIGN KEY (user_create) REFERENCES controls.users(id);
ALTER TABLE prod.offers ADD CONSTRAINT user_update_fk FOREIGN KEY (user_update) REFERENCES controls.users(id);



