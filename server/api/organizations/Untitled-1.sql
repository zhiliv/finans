-- Active: 1694533364740@@127.0.0.1@5432@finance
  SELECT
    org.id, -- Идентификатор
    org.name, -- Наименование
    short_description, -- Короткое описание
    org.description, -- Полное описание
    org.site, -- Сайт организации
    (SELECT 
      json_agg(img.*)      
    FROM 
        prod.img_organization AS img
        WHERE 
      org.id=5
      ) as images

  FROM 
    prod.organizations AS org
  WHERE org.id=5
  GROUP BY org.id
  ORDER BY name 