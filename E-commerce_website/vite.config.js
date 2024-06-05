import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // This makes the server listen on all addresses, allowing access from the network
    port: 3000, // You can specify any port you prefer
  }
});
