CREATE TABLE "users" (
  "id" varchar(100) PRIMARY KEY,
  "login" varchar(100) UNIQUE NOT NULL,
  "password" varchar(100) NOT NULL,
  "role" varchar(100) NOT NULL
);

CREATE TABLE "products" (
  "id" varchar(100) PRIMARY KEY,
  "title" varchar(100) UNIQUE NOT NULL,
  "body" text NOT NULL,
  "img" varchar(255),
  "price" integer NOT NULL,
  "type_id" integer NOT NULL
);

CREATE TABLE "ingredients" (
  "id" varchar(100) PRIMARY KEY,
  "title" varchar(255) UNIQUE NOT NULL,
  "quantity" integer NOT NULL,
  "order_item_id" varchar(100) NOT NULL
);

CREATE TABLE "types" (
  "id" serial PRIMARY KEY,
  "title" varchar(100) UNIQUE NOT NULL
);

CREATE TABLE "orders" (
  "id" varchar(100) PRIMARY KEY,
  "date" date NOT NULL,
  "time" time NOT NULL,
  "comment" text,
  "street" varchar(255) NOT NULL,
  "house_num" integer NOT NULL,
  "apartment" integer NOT NULL,
  "phone" varchar(11) NOT NULL,
  "status_id" integer NOT NULL,
  "user_id" varchar(100) NOT NULL
);

CREATE TABLE "order_items" (
  "id" varchar(100) PRIMARY KEY,
  "quantity" integer NOT NULL,
  "product_id" varchar(100) NOT NULL,
  "order_id" varchar(100) NOT NULL
);

CREATE TABLE "statuses" (
  "id" serial PRIMARY KEY,
  "title" varchar(100) UNIQUE NOT NULL
);

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("status_id") REFERENCES "statuses" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "ingredients" ADD FOREIGN KEY ("order_item_id") REFERENCES "order_items" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("type_id") REFERENCES "types" ("id");
