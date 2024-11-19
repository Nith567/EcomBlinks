# wooEcomBlinks

wooEcomBlinks integrates WooCommerce stores with Solana Blinks technology, allowing merchants to create and share Blinks for each product in their store.

## Testing Credentials

- **Store Site**: [https://testwoo.com/nithinkatkam504106](https://testwoo.com/nithinkatkam504106)
- **CONSUMER_KEY**: `ck_cd81f66dd94488639d35b2e24d0f67923a2c1491`
- **CONSUMER_SECRET**: `cs_e798f307c58c5198bb5cd27aed4a5641f468a86d`
> **⚠️ Reminder:** This testing credentials expires within a month.

# Diagram Flow
![flow](https://www.wooecomblinks.online/wooEcomBlinkFlow.png)

## Demo Video

[![Demo Video](https://www.wooecomblinks.online/wooecom.png)](https://www.youtube.com/watch?v=xrx8YhmtjHg)


# Getting Started

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**
- **npm** or **yarn**
- **WooCommerce credentials**: [Create Consumer Key & Secret Key for a Store](https://avada.io/blog/create-consumer-key-secret)
- **Solana wallet**

## Installation

To set up the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Nith567/wooEcomBlinks
    ```

2. Navigate into the project directory:
    ```bash
    cd WOOECOMBLINKS
    ```

3. Install the necessary dependencies:
    ```bash
    npm install 
    ```
    or, if you're using yarn:
    ```bash
    yarn install
    ```

4. Set up environment variables:

Create a `.env.local` file in the root directory and add the following variables:

```plaintext
DATABASE_URL=your_database_url
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```
