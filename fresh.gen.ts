// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/api/[...catchall].tsx";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/inspect-vscode.ts";
import * as $$0 from "./islands/AddToCart.tsx";
import * as $$1 from "./islands/CartButton.tsx";
import * as $$2 from "./islands/CartModal.tsx";
import * as $$3 from "./islands/LiveControls.tsx";
import * as $$4 from "./islands/ProductInformation.tsx";
import * as $$5 from "./islands/SearchBar.tsx";
import * as $$6 from "./islands/SearchControls.tsx";
import * as $$7 from "./islands/Slider.tsx";
import * as $$$0 from "./sections/Banner.tsx";
import * as $$$1 from "./sections/BannnerGrid.tsx";
import * as $$$2 from "./sections/Button.story.tsx";
import * as $$$3 from "./sections/Footer.tsx";
import * as $$$4 from "./sections/Head.tsx";
import * as $$$5 from "./sections/Header.tsx";
import * as $$$6 from "./sections/HighlightedFeatures.tsx";
import * as $$$7 from "./sections/MarcasConvidadas.tsx";
import * as $$$8 from "./sections/Newsletter.tsx";
import * as $$$9 from "./sections/ProductDetails.tsx";
import * as $$$10 from "./sections/ProductGallery.tsx";
import * as $$$11 from "./sections/ProductShelf.tsx";
import * as $$$12 from "./sections/Search.tsx";
import * as $$$13 from "./sections/SearchControls.tsx";
import * as $$$14 from "./sections/Spacer.tsx";
import * as $$$15 from "./sections/StoreFeatures.tsx";
import * as $$$16 from "./sections/vtexconfig.global.tsx";
import * as $$$$0 from "./functions/occProductDetailsPage.ts";
import * as $$$$1 from "./functions/shopifyProductDetailsPage.ts";
import * as $$$$2 from "./functions/shopifyProductList.ts";
import * as $$$$3 from "./functions/shopifyProductListingPage.ts";
import * as $$$$4 from "./functions/vtexProductDetailsPage.ts";
import * as $$$$5 from "./functions/vtexProductList.ts";
import * as $$$$6 from "./functions/vtexProductListingPage.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/api/[...catchall].tsx": $3,
    "./routes/index.tsx": $4,
    "./routes/inspect-vscode.ts": $5,
  },
  islands: {
    "./islands/AddToCart.tsx": $$0,
    "./islands/CartButton.tsx": $$1,
    "./islands/CartModal.tsx": $$2,
    "./islands/LiveControls.tsx": $$3,
    "./islands/ProductInformation.tsx": $$4,
    "./islands/SearchBar.tsx": $$5,
    "./islands/SearchControls.tsx": $$6,
    "./islands/Slider.tsx": $$7,
  },
  sections: {
    "./sections/Banner.tsx": $$$0,
    "./sections/BannnerGrid.tsx": $$$1,
    "./sections/Button.story.tsx": $$$2,
    "./sections/Footer.tsx": $$$3,
    "./sections/Head.tsx": $$$4,
    "./sections/Header.tsx": $$$5,
    "./sections/HighlightedFeatures.tsx": $$$6,
    "./sections/MarcasConvidadas.tsx": $$$7,
    "./sections/Newsletter.tsx": $$$8,
    "./sections/ProductDetails.tsx": $$$9,
    "./sections/ProductGallery.tsx": $$$10,
    "./sections/ProductShelf.tsx": $$$11,
    "./sections/Search.tsx": $$$12,
    "./sections/SearchControls.tsx": $$$13,
    "./sections/Spacer.tsx": $$$14,
    "./sections/StoreFeatures.tsx": $$$15,
    "./sections/vtexconfig.global.tsx": $$$16,
  },
  functions: {
    "./functions/occProductDetailsPage.ts": $$$$0,
    "./functions/shopifyProductDetailsPage.ts": $$$$1,
    "./functions/shopifyProductList.ts": $$$$2,
    "./functions/shopifyProductListingPage.ts": $$$$3,
    "./functions/vtexProductDetailsPage.ts": $$$$4,
    "./functions/vtexProductList.ts": $$$$5,
    "./functions/vtexProductListingPage.ts": $$$$6,
  },
  schemas: {
    "./sections/Banner.tsx": {
      "inputSchema": {
        "title": " Banner",
        "type": "object",
        "properties": {
          "imgSrc": {
            "title": "Img Src",
            "type": "object",
            "properties": {
              "mobile": {
                "format": "image-uri",
                "type": "string",
                "title": "Mobile",
              },
              "desktop": {
                "format": "image-uri",
                "type": "string",
                "title": "Desktop",
              },
            },
            "required": [
              "mobile",
              "desktop",
            ],
          },
          "alt": {
            "type": [
              "string",
              "null",
            ],
            "title": "Alt",
          },
          "text": {
            "type": [
              "string",
              "null",
            ],
            "title": "Text",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "subtitle": {
            "type": [
              "string",
              "null",
            ],
            "title": "Subtitle",
          },
          "link": {
            "type": [
              "string",
              "null",
            ],
            "title": "Link",
          },
          "CTA": {
            "type": [
              "string",
              "null",
            ],
            "title": " C T A",
          },
        },
        "required": [
          "imgSrc",
        ],
      },
      "outputSchema": null,
    },
    "./sections/BannnerGrid.tsx": {
      "inputSchema": {
        "title": " Bannner Grid",
        "type": "object",
        "properties": {
          "images": {
            "type": "array",
            "items": {
              "title": "Banner",
              "type": "object",
              "properties": {
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                  "description": "Image alt text",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                  "description": "When you click you go to",
                },
              },
              "required": [
                "src",
                "alt",
                "href",
              ],
            },
            "title": "Images",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
        },
        "required": [
          "images",
          "title",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Button.story.tsx": {
      "inputSchema": {
        "title": " Button.story",
        "type": "object",
        "properties": {
          "variant": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "primary",
              },
              {
                "type": "string",
                "const": "secondary",
              },
              {
                "type": "string",
                "const": "tertiary",
              },
              {
                "type": "string",
                "const": "danger",
              },
            ],
            "title": "Variant",
          },
          "size": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "small",
              },
              {
                "type": "string",
                "const": "large",
              },
            ],
            "title": "Size",
          },
          "fit": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "container",
              },
              {
                "type": "string",
                "const": "content",
              },
            ],
            "title": "Fit",
          },
          "loading": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Loading",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Footer.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [
          "url",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "alerts": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Alerts",
          },
        },
        "required": [
          "alerts",
        ],
      },
      "outputSchema": null,
    },
    "./sections/HighlightedFeatures.tsx": {
      "inputSchema": {
        "title": " Highlighted Features",
        "type": "object",
        "properties": {
          "features": {
            "type": "array",
            "items": {
              "title": "Feature",
              "type": "object",
              "properties": {
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                  "description": "Image src",
                },
                "title": {
                  "type": "string",
                  "title": "Title",
                  "description": "Title",
                },
                "description": {
                  "type": "string",
                  "title": "Description",
                  "description": "Description and Image alt text",
                },
              },
              "required": [
                "src",
                "title",
                "description",
              ],
            },
            "title": "Features",
          },
        },
        "required": [
          "features",
        ],
      },
      "outputSchema": null,
    },
    "./sections/MarcasConvidadas.tsx": {
      "inputSchema": {
        "title": " Marcas Convidadas",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "mainBanner": {
            "title": "Main Banner",
            "type": "object",
            "properties": {
              "href": {
                "type": "string",
                "title": "Href",
              },
              "smallSrc": {
                "format": "image-uri",
                "type": "string",
                "title": "Small Src",
                "description": "Image src for small screen devices (mobile)",
              },
              "largeSrc": {
                "format": "image-uri",
                "type": "string",
                "title": "Large Src",
                "description": "Image src for large screen devices (desktop)",
              },
              "alt": {
                "type": "string",
                "title": "Alt",
                "description": "Image alt text",
              },
            },
            "required": [
              "href",
              "smallSrc",
              "largeSrc",
              "alt",
            ],
          },
          "banners": {
            "type": "array",
            "items": {
              "title": "Banner",
              "type": "object",
              "properties": {
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                  "description": "Image alt text",
                },
              },
              "required": [
                "href",
                "src",
                "alt",
              ],
            },
            "title": "Banners",
          },
        },
        "required": [
          "title",
          "mainBanner",
          "banners",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Newsletter.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/ProductDetails.tsx": {
      "inputSchema": {
        "title": " Product Details",
        "type": "object",
        "properties": {
          "page": {
            "$id": "85d77d809b0be6ec54dbe06b714da53af53b54db",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProductGallery.tsx": {
      "inputSchema": {
        "title": " Product Gallery",
        "type": "object",
        "properties": {
          "page": {
            "$id": "62615533560fc71180a86d2f3398b2396d2cbbc5",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProductShelf.tsx": {
      "inputSchema": {
        "title": " Product Shelf",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "products": {
            "$id": "546cbd7d0ccd06d3cfddd3184a52c465c9b5139a",
            "format": "live-function",
            "type": "string",
            "title": "Products",
          },
        },
        "required": [
          "title",
          "products",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Search.tsx": {
      "inputSchema": {
        "title": " Search",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/SearchControls.tsx": {
      "inputSchema": {
        "title": " Search Controls",
        "type": "object",
        "properties": {
          "page": {
            "$id": "62615533560fc71180a86d2f3398b2396d2cbbc5",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Spacer.tsx": {
      "inputSchema": {
        "title": " Spacer",
        "type": "object",
        "properties": {
          "height": {
            "type": [
              "number",
              "null",
            ],
            "title": "Height",
          },
          "heightMobile": {
            "type": [
              "number",
              "null",
            ],
            "title": "Height Mobile",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/StoreFeatures.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/vtexconfig.global.tsx": {
      "inputSchema": {
        "title": "Vtexconfig.global",
        "type": "object",
        "properties": {
          "account": {
            "type": "string",
            "title": "Account",
            "description":
              "VTEX Account name. For more info, read here: https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC.",
          },
          "salesChannel": {
            "type": "string",
            "title": "Sales Channel",
            "description":
              "VTEX sales channel. This will be the default sales channel your site. For more info, read here: https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV",
          },
          "locale": {
            "type": "string",
            "title": "Locale",
            "description": "Locale used for VTEX Intelligent Search client.",
          },
        },
        "required": [
          "account",
          "salesChannel",
          "locale",
        ],
      },
      "outputSchema": null,
    },
    "./functions/occProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Occ Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "85d77d809b0be6ec54dbe06b714da53af53b54db",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Shopify Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "85d77d809b0be6ec54dbe06b714da53af53b54db",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductList.ts": {
      "inputSchema": {
        "title": "Shopify Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "search term to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "546cbd7d0ccd06d3cfddd3184a52c465c9b5139a",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductListingPage.ts": {
      "inputSchema": {
        "title": "Shopify Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "62615533560fc71180a86d2f3398b2396d2cbbc5",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "85d77d809b0be6ec54dbe06b714da53af53b54db",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductList.ts": {
      "inputSchema": {
        "title": "Vtex Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
          "sort": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "",
              },
              {
                "type": "string",
                "const": "price:desc",
              },
              {
                "type": "string",
                "const": "price:asc",
              },
              {
                "type": "string",
                "const": "orders:desc",
              },
              {
                "type": "string",
                "const": "name:desc",
              },
              {
                "type": "string",
                "const": "name:asc",
              },
              {
                "type": "string",
                "const": "release:desc",
              },
              {
                "type": "string",
                "const": "discount:desc",
              },
            ],
            "title": "Sort",
            "description": "search sort parameter",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "546cbd7d0ccd06d3cfddd3184a52c465c9b5139a",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductListingPage.ts": {
      "inputSchema": {
        "title": "Vtex Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "62615533560fc71180a86d2f3398b2396d2cbbc5",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
