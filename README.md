# wooEcomBlinks

wooEcomBlinks integrates WooCommerce stores with Solana Blinks technology, allowing merchants to create and share Blinks for each product in their store.

## Testing Credentials

- **Store Site**: [https://testwoo.com/bbad90360](https://testwoo.com/bbad90360)
- **CONSUMER_KEY**: `ck_c5a8cb61828a54a756ff7f1b9834d5c49e46138b`
- **CONSUMER_SECRET**: `cs_ca81c25c62458257e7bbe2b8081aaa7bae3ca955`
> **⚠️ Reminder:** This testing credentials expires within a month.



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
    git clone <repoUrl>
    ```

2. Navigate into the project directory:
    ```bash
    cd <repoUrl>
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