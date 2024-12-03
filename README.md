# Macro Trends Dashboard

A web application that displays macroeconomic indicators for the US and ASX markets, built with Jupyter Notebooks, PostgreSQL (Supabase), and Remix. This is the first iteration, designed to automate data collection and present daily macroeconomic insights.

## Features (Initial Build)

1. **Data Automation**:

    - Automates daily retrieval of key macroeconomic indicators for US and ASX markets.
    - Uses Jupyter Notebooks to fetch, process, and push data to a PostgreSQL database.

2. **Macroeconomic Indicators**:

    - **US**:
        - Inflation (CPI, PPI)
        - Interest Rates (Federal Funds Rate)
        - GDP Growth
        - Unemployment (Jobless Claims, Nonfarm Payrolls)
        - Commodity Prices (Oil, Gold)
        - Exchange Rates (USD Index, AUD/USD)
    - **ASX**:
        - Inflation (CPI, PPI)
        - Interest Rates (Cash Rate)
        - GDP Growth
        - Unemployment (Labor Force Data)
        - Commodity Prices (Iron Ore, Coal, Gold)
        - Exchange Rates (AUD/USD, AUD/CNY)

3. **Simple UI**:
    - Built with Remix to display daily macroeconomic data.
    - Clean layout with text summaries and basic trend charts.

## Future Features

-   **Filtering**:
    -   View data by time period (daily, weekly, monthly).
-   **Forward-Looking Events**:
    -   Display upcoming macroeconomic events (e.g., rate decisions, earnings reports).
-   **Ticker Lookup**:
    -   Enter a stock ticker to generate a report analyzing its financials in the macroeconomic context.
-   **Portfolio Impact**:
    -   Input stock portfolio weights to assess macroeconomic impacts.
-   **Subscription System**:
    -   Monetization via premium reports and advanced features.

## Project Structure

root/
├── notebooks/
│
├── fetch_data.ipynb # Jupyter Notebook for automating data retrieval
│
├── process_data.ipynb # Data cleaning and processing scripts
├── backend/
│
├── db_schema.sql # Database schema for PostgreSQL
│
├── supabase_config.js # Supabase setup and configuration
├── frontend/
│
├── app/ # Remix app code
│
├── public/ # Static assets
├── README.md # Project documentation

## Installation and Setup

### 1. Prerequisites

-   Python 3.8+
-   Node.js (for Remix)
-   PostgreSQL (Supabase recommended)
-   API keys for:
    -   [Trading Economics](https://tradingeconomics.com/)
    -   [Alpha Vantage](https://www.alphavantage.co/)
    -   [FRED](https://fred.stlouisfed.org/)

### 2. Clone the Repository

```bash
git clone https://github.com/your-repo/macro-trends-dashboard.git
cd macro-trends-dashboard
```

3. Set Up the Backend

-   Database:

*   Import the db_schema.sql file into your PostgreSQL database.
*   Configure your Supabase project and update supabase_config.js with your credentials.

-   API Keys:

*   Add API keys to a .env file:

```bash
TRADING_ECONOMICS_API_KEY=your_api_key
ALPHA_VANTAGE_API_KEY=your_api_key
FRED_API_KEY=your_api_key
```

-   Install Python dependencies:

```bash
pip install requests pandas psycopg2
```

-   Execute fetch_data.ipynb to gather and store data in the database. 5. Start the Frontend

*   Install Node.js dependencies:

```bash
npm install
```

-   Run the Remix app:

```bash
npm run dev
```

-   View Daily Insights:

*   Open the app to see daily updates of macroeconomic data.

-   Add/Extend Data:

*   Use Jupyter Notebooks to fetch additional indicators or improve data processing.

### Contributions

Feel free to contribute by:

-   Adding new macroeconomic indicators.
-   Improving UI/UX.
-   Extending automation scripts.

### License

-   This project is licensed under the MIT License.
