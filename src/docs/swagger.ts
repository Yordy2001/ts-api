import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
// import { login } from "../routers/*ts";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "API documentation",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:4000",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      user: {
        type: "object",
        required: ["name", "email", "password"],
        propieties: {
          name: {
            type: "string",
          },
          password: {
            type: "string",
          },
          email: {
            type: "string",
          },
          description: {
            type: "string",
          },
        },
      },
      item: {
        propieties: {
          name: {
            type: "string",
          },
          color: {
            type: "string",
          },
          gas: {
            type: "string",
          },
          year: {
            type: "string",
          },
          description: {
            type: "string",
          },
          price: {
            type: "string",
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routers/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
