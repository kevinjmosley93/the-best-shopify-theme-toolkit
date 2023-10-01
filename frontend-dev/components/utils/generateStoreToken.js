import '@shopify/shopify-api/adapters/node';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';

const shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_SECRET,
  scopes: ['read_products'],
  hostName: ''
});

const adminApiClient = new shopify.clients.Rest({session});
const storefrontTokenResponse = await adminApiClient.post({
  path: 'storefront_access_tokens',
  type: DataType.JSON,
  data: {
    storefront_access_token: {
      title: 'This is my test access token',
    },
  },
});
const storefrontAccessToken =
  storefrontTokenResponse.body['storefront_access_token']['access_token'];