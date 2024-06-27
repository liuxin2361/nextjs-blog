-- create table users
CREATE TABLE IF NOT EXISTS "public"."user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- insert sample user
-- INSERT INTO "public"."user" (name, email, password) VALUES ('admin', 'admin@example.com', 'admin123');


