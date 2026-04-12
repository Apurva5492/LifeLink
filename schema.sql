
-- psql -U postgres -d lifelink -f schema.sql

CREATE TABLE IF NOT EXISTS donors (
  id          SERIAL PRIMARY KEY,
  fullname    VARCHAR(150)  NOT NULL,
  blood_group VARCHAR(5)    NOT NULL,
  organ       VARCHAR(50),
  city        VARCHAR(100)  NOT NULL,
  phone       VARCHAR(20)   NOT NULL,
  email       VARCHAR(150)  NOT NULL UNIQUE,
  created_at  TIMESTAMP     DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS emergency_requests (
  id          SERIAL PRIMARY KEY,
  patient_name  VARCHAR(150) NOT NULL,
  blood_group   VARCHAR(5)   NOT NULL,
  organ         VARCHAR(50),
  city          VARCHAR(100) NOT NULL,
  contact       VARCHAR(20)  NOT NULL,
  hospital      VARCHAR(200),
  status        VARCHAR(20)  DEFAULT 'active',
  created_at    TIMESTAMP    DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(150) NOT NULL,
  email      VARCHAR(150) NOT NULL UNIQUE,
  password   VARCHAR(255) NOT NULL,
  created_at TIMESTAMP    DEFAULT NOW()
);
