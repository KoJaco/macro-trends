import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const realGdp = sqliteTable("real_gdp", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

export const cpi = sqliteTable("cpi", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

export const treasuryYields = sqliteTable("treasury_yields", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

export const federalFundsRate = sqliteTable("federal_funds_rate", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

export const unemploymentRate = sqliteTable("unemployment_rate", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

export const inflationRate = sqliteTable("inflation_rate", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

// Example schema for OHLC-based tables
export const forexUsdAud = sqliteTable("forex_usd_aud", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    open: real(),
    high: real(),
    low: real(),
    close: real(),
});

export const forexAudJpy = sqliteTable("forex_aud_jpy", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    open: real(),
    high: real(),
    low: real(),
    close: real(),
});

export const commodityWti = sqliteTable("commodity_wti", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

export const commodityBrent = sqliteTable("commodity_brent", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

export const commodityCopper = sqliteTable("commodity_copper", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

export const commodityAluminum = sqliteTable("commodity_aluminum", {
    id: int().primaryKey({ autoIncrement: true }),
    date: text(),
    value: real(),
});

export const macroSummaries = sqliteTable("macro_summaries", {
    id: int().primaryKey({ autoIncrement: true }),
    createdAt: text("created_at"),
    summary: text(),
});
