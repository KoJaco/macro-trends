CREATE TABLE `commodity_aluminum` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
--> statement-breakpoint
CREATE TABLE `commodity_brent` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
--> statement-breakpoint
CREATE TABLE `commodity_copper` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
--> statement-breakpoint
CREATE TABLE `commodity_wti` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
--> statement-breakpoint
CREATE TABLE `cpi` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
--> statement-breakpoint
CREATE TABLE `federal_funds_rate` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
--> statement-breakpoint
CREATE TABLE `forex_aud_jpy` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`open` real,
	`high` real,
	`low` real,
	`close` real
);
--> statement-breakpoint
CREATE TABLE `forex_usd_aud` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`open` real,
	`high` real,
	`low` real,
	`close` real
);
--> statement-breakpoint
CREATE TABLE `inflation_rate` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
--> statement-breakpoint
CREATE TABLE `macro_summaries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text,
	`summary` text
);
--> statement-breakpoint
CREATE TABLE `real_gdp` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
--> statement-breakpoint
CREATE TABLE `treasury_yields` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
--> statement-breakpoint
CREATE TABLE `unemployment_rate` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text,
	`value` real
);
