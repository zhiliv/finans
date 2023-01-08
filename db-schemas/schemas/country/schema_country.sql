-- DROP SCHEMA country;

CREATE SCHEMA country AUTHORIZATION postgres;

-- DROP SEQUENCE country.cities_id_seq;

CREATE SEQUENCE
    country.cities_id_seq INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE;

-- DROP SEQUENCE country.regions_id_seq;

CREATE SEQUENCE
    country.regions_id_seq INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE;

-- country.regions definition

-- Drop table

-- DROP TABLE country.regions;

CREATE TABLE
    country.regions (
        id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        code varchar NOT NULL,
        "name" varchar NOT NULL,
        "type" varchar NOT NULL,
        url varchar NOT NULL,
        declination varchar NOT NULL,
        CONSTRAINT regions_pk PRIMARY KEY (id)
    );

-- country.cities definition

-- Drop table

-- DROP TABLE country.cities;

CREATE TABLE
    country.cities (
        id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        region_id int4 NOT NULL,
        code varchar NOT NULL,
        "name" varchar NOT NULL,
        short_type varchar NOT NULL,
        url varchar NOT NULL,
        im varchar NOT NULL,
        rod varchar NOT NULL,
        dat varchar NOT NULL,
        vin varchar NOT NULL,
        tvor varchar NOT NULL,
        predl varchar NOT NULL,
        CONSTRAINT cities_pk PRIMARY KEY (id),
        CONSTRAINT cities_fk FOREIGN KEY (region_id) REFERENCES country.regions(id)
    );