# Html-To-Image-Api

Lambda that renders or generates PNG images from templates and parameters.

## API Documentation

### `GET /`

Main page. Sends the README content as an HTML response.

---

## Test API

You can test the API by navigating to the following URL in your web browser such (url)[http://localhost:3000/iframed-preview?templateName=rating&amp;parameters=%7B%22type%22%3A1%2C%22category%22%3A%22Layer-1%22%2C%22tokens%22%3A%5B%7B%22priceChange%22%3A13.83%2C%22price%22%3A0.07251522883113547%2C%22symbol%22%3A%22CLV%22%2C%22name%22%3A%22Clover%20Finance%22%2C%22icon%22%3A%22https%3A%2F%2Fcdn.coinranking.com%2FVmwVRtBCq%2F8384.png%22%7D%2C%7B%22priceChange%22%3A5.14%2C%22price%22%3A56.05357972381643%2C%22symbol%22%3A%22ZEC%22%2C%22name%22%3A%22Zcash%22%2C%22icon%22%3A%22https%3A%2F%2Fcdn.coinranking.com%2FrJrKiS_uZ%2Fzec.svg%22%7D%2C%7B%22priceChange%22%3A5.06%2C%22price%22%3A0.26453967347975116%2C%22symbol%22%3A%22HBAR%22%2C%22name%22%3A%22Hedera%22%2C%22icon%22%3A%22https%3A%2F%2Fcdn.coinranking.com%2FdSCnSLilQ%2Fhedera.svg%22%7D%2C%7B%22priceChange%22%3A4.82%2C%22price%22%3A1.4795766083290625%2C%22symbol%22%3A%22WAVES%22%2C%22name%22%3A%22Waves%22%2C%22icon%22%3A%22https%3A%2F%2Fcdn.coinranking.com%2FB1tzRbyMz%2Fwaves.svg%22%7D%2C%7B%22priceChange%22%3A4.48%2C%22price%22%3A0.001375696580471496%2C%22symbol%22%3A%22XPR%22%2C%22name%22%3A%22Proton%22%2C%22icon%22%3A%22https%3A%2F%2Fcdn.coinranking.com%2F5INBOrSfc%2Fxpr.png%22%7D%5D%7D&amp;width=500&amp;height=500]

---

### `Routes`
* /preview
* /api/generate
* /iframed-preview

## Getting Started

Clone repo

```bash
git clone https://github.com/eonian-core/html-to-image-api.git
```

Install dependencies

```bash
  cd html-to-image-api
  npm i 
```

## Development

Build and start server

```bash
  npm run dev
```

### Commands

- `build` - Build project
- `dev` - Start server in development mode
- `start` - Start server in production mode

### Running Tests

To run tests, run the following command

```bash
  # Unit tests on mocks
  npm run test
  # E2E tests with real requests
  npm run test:e2e
```

### Deployment

To deploy, you need [install flyctl](https://fly.io/docs/hands-on/install-flyctl/) and login using `fly auth login`

To deploy this project run

```bash
  npm run deploy
```

#### Next steps

- Run `fly status` - show the status of the application instances.
- Run `fly apps open` - open your browser and direct it to your app.

## Made by Eonian

[Eonian](https://eonian.finance) internal project. We trying to be as transparent as possible with our users, as part of this practice we publishing this project.
You can also use it for own development. Any contributions and suggestions are welcome!

## Contributing

Contributions are always welcome!

Create new issues or contact us in [Discord](https://discord.gg/8mcUPPYJmj) for any questions!
