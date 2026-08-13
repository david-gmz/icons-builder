# Lucide Icons Builder with Vite

If you nedd icons for your webapp and you are using **vanilla PHP** This is a very simple approach. You create a separate mini Vite project, build it once, and just copy the output JS file into your PHP project. No CORS, no complex integration.

## The workflow becomes:

- Need to add/change icons? Edit main.js in your builder project
- Run pnpm run build
- Copy the file to your PHP project
- Done!

No complex integration, no CORS, no dev server issues. Perfect for your vanilla PHP setup.