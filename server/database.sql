CREATE TABLE "users" (
  "id" varchar(100) PRIMARY KEY,
  "name" varchar(100) UNIQUE NOT NULL,
  "password" varchar(100) NOT NULL,
  "role" varchar(100) NOT NULL
);

CREATE TABLE "products" (
  "id" varchar(100) PRIMARY KEY,
  "title" varchar(100) UNIQUE NOT NULL,
  "body" text NOT NULL,
  "img" varchar(100),
  "price" integer NOT NULL,
  "type_id" integer NOT NULL
);

CREATE TABLE "types" (
  "id" serial PRIMARY KEY,
  "title" varchar(100) UNIQUE NOT NULL,
  "anchor" varchar(20) UNIQUE NOT NULL
);

CREATE TABLE "orders" (
  "id" varchar(100) PRIMARY KEY,
  "date" date NOT NULL DEFAULT CURRENT_DATE,
  "time" timestamp NOT NULL DEFAULT CURRENT_TIME,
  "comment" text,
  "street" varchar(255) NOT NULL,
  "house_num" integer NOT NULL,
  "apartment_num" integer NOT NULL,
  "phone" varchar(11) NOT NULL,
  "customer_name" varchar(100) NOT NULL,
  "price" integer NOT NULL,
  "status_id" integer NOT NULL,
  "courier_id" varchar(100),
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

ALTER TABLE "products" ADD FOREIGN KEY ("type_id") REFERENCES "types" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("courier_id") REFERENCES "users" ("id");
