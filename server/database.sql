CREATE TABLE "users" (
  "id" varchar(100) PRIMARY KEY,
  "name" varchar(30) NOT NULL,
  "password" varchar(30) NOT NULL,
  "f_name" varchar(100) NOT NULL,
  "phone" varchar(11),
  "role_id" integer NOT NULL
);

CREATE TABLE "roles" (
  "id" serial PRIMARY KEY,
  "name" varchar(100) NOT NULL
);

CREATE TABLE "products" (
  "id" varchar(100) PRIMARY KEY,
  "title" varchar(100) NOT NULL,
  "desc" text NOT NULL,
  "price" integer NOT NULL,
  "type_id" integer NOT NULL
);

CREATE TABLE "ingredients" (
  "id" varchar(100) PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "quantity" integer NOT NULL,
  "product_id" varchar(100) NOT NULL
);

CREATE TABLE "types" (
  "id" serial PRIMARY KEY,
  "name" varchar(100) NOT NULL
);

CREATE TABLE "orders" (
  "id" varchar(100) PRIMARY KEY,
  "date" date NOT NULL,
  "time" time NOT NULL,
  "comment" text,
  "status_id" integer NOT NULL,
  "user_id" varchar(100) NOT NULL
);

CREATE TABLE "orderItems" (
  "id" varchar(100) PRIMARY KEY,
  "quantity" integer NOT NULL,
  "product_id" varchar(100) NOT NULL,
  "order_id" varchar(100) NOT NULL
);

CREATE TABLE "statuses" (
  "id" serial PRIMARY KEY,
  "name" varchar(100) NOT NULL
);

ALTER TABLE "products" ADD FOREIGN KEY ("type_id") REFERENCES "types" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("status_id") REFERENCES "statuses" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orderItems" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "orderItems" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("role_id") REFERENCES "roles" ("id");

ALTER TABLE "ingredients" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
