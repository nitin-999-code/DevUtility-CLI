# DevUtility CLI

A production-ready CLI tool built using Node.js and TypeScript.

## Features
- **Object-Oriented Architecture**: `BaseCommand` abstract class pattern.
- **Robust CLI Handling**: Built on `commander.js`.
- **API Integrations**: GitHub, CoinGecko, and REST Countries.
- **Styling & Colors**: Built-in colored outputs using `chalk`.
- **Modular Design**: Separated commands, services, and utilities folders.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Link for Local Development**
   ```bash
   npm link
   ```
   *This creates a global symlink allowing you to use the `devutility` command anywhere.*

## Example Usage

- **Greet User**
  ```bash
  devutility greet John
  ```

- **Get GitHub Information**
  ```bash
  devutility github <username>
  ```

- **Check Cryptocurrency Price (in USD)**
  ```bash
  devutility crypto bitcoin
  ```

- **Get Country Information**
  ```bash
  devutility country india
  ```

- **Get Local File Information**
  ```bash
  devutility fileinfo package.json
  ```

- **Generate Password**
  ```bash
  devutility password 16
  ```

- **System Information**
  ```bash
  devutility sysinfo
  ```

- **Get a Programming Joke**
  ```bash
  devutility joke
  ```

- **Currency Conversion**
  ```bash
  devutility convert 100 USD INR
  ```

- **Version & Help**
  ```bash
  devutility -v
  devutility --help
  ```
