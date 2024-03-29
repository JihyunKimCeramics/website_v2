import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "",
  clientId: "",
  token: "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        fields: [
          {
            name: "title",
            type: "string",
          },
        ],
      },
    ],
  },
});
