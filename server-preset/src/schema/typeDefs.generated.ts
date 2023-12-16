import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "me", loc: { start: 22, end: 24 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "User", loc: { start: 26, end: 30 } },
            loc: { start: 26, end: 30 },
          },
          directives: [],
          loc: { start: 22, end: 30 },
        },
      ],
      loc: { start: 0, end: 32 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 46, end: 54 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "login", loc: { start: 59, end: 64 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 65, end: 73 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 75, end: 81 },
                  },
                  loc: { start: 75, end: 81 },
                },
                loc: { start: 75, end: 82 },
              },
              directives: [],
              loc: { start: 65, end: 82 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 84, end: 92 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 94, end: 100 },
                  },
                  loc: { start: 94, end: 100 },
                },
                loc: { start: 94, end: 101 },
              },
              directives: [],
              loc: { start: 84, end: 101 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 104, end: 108 },
            },
            loc: { start: 104, end: 108 },
          },
          directives: [],
          loc: { start: 59, end: 108 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "signup",
            loc: { start: 111, end: 117 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "username",
                loc: { start: 118, end: 126 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 128, end: 134 },
                  },
                  loc: { start: 128, end: 134 },
                },
                loc: { start: 128, end: 135 },
              },
              directives: [],
              loc: { start: 118, end: 135 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 137, end: 145 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 147, end: 153 },
                  },
                  loc: { start: 147, end: 153 },
                },
                loc: { start: 147, end: 154 },
              },
              directives: [],
              loc: { start: 137, end: 154 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 157, end: 161 },
            },
            loc: { start: 157, end: 161 },
          },
          directives: [],
          loc: { start: 111, end: 161 },
        },
      ],
      loc: { start: 34, end: 163 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "User", loc: { start: 177, end: 181 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "username",
            loc: { start: 186, end: 194 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 196, end: 202 },
              },
              loc: { start: 196, end: 202 },
            },
            loc: { start: 196, end: 203 },
          },
          directives: [],
          loc: { start: 186, end: 203 },
        },
      ],
      loc: { start: 165, end: 205 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 211, end: 216 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 206, end: 216 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 223, end: 231 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 218, end: 231 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Image", loc: { start: 237, end: 242 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 247, end: 249 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 251, end: 253 },
              },
              loc: { start: 251, end: 253 },
            },
            loc: { start: 251, end: 254 },
          },
          directives: [],
          loc: { start: 247, end: 254 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 257, end: 260 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 262, end: 268 },
              },
              loc: { start: 262, end: 268 },
            },
            loc: { start: 262, end: 269 },
          },
          directives: [],
          loc: { start: 257, end: 269 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 272, end: 276 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 278, end: 282 },
              },
              loc: { start: 278, end: 282 },
            },
            loc: { start: 278, end: 283 },
          },
          directives: [],
          loc: { start: 272, end: 283 },
        },
      ],
      loc: { start: 232, end: 285 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "User", loc: { start: 299, end: 303 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gallery",
            loc: { start: 308, end: 315 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Image",
                loc: { start: 318, end: 323 },
              },
              loc: { start: 318, end: 323 },
            },
            loc: { start: 317, end: 324 },
          },
          directives: [],
          loc: { start: 308, end: 324 },
        },
      ],
      loc: { start: 287, end: 326 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 340, end: 348 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "uploadPicture",
            loc: { start: 353, end: 366 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "imageUrl",
                loc: { start: 367, end: 375 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 377, end: 383 },
                  },
                  loc: { start: 377, end: 383 },
                },
                loc: { start: 377, end: 384 },
              },
              directives: [],
              loc: { start: 367, end: 384 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Image",
              loc: { start: 387, end: 392 },
            },
            loc: { start: 387, end: 392 },
          },
          directives: [],
          loc: { start: 353, end: 392 },
        },
      ],
      loc: { start: 328, end: 394 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Profile", loc: { start: 400, end: 407 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "age", loc: { start: 412, end: 415 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 417, end: 420 },
              },
              loc: { start: 417, end: 420 },
            },
            loc: { start: 417, end: 421 },
          },
          directives: [],
          loc: { start: 412, end: 421 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 424, end: 428 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 430, end: 436 },
              },
              loc: { start: 430, end: 436 },
            },
            loc: { start: 430, end: 437 },
          },
          directives: [],
          loc: { start: 424, end: 437 },
        },
      ],
      loc: { start: 395, end: 439 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "User", loc: { start: 453, end: 457 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "profile",
            loc: { start: 462, end: 469 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Profile",
                loc: { start: 471, end: 478 },
              },
              loc: { start: 471, end: 478 },
            },
            loc: { start: 471, end: 479 },
          },
          directives: [],
          loc: { start: 462, end: 479 },
        },
      ],
      loc: { start: 441, end: 481 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 494, end: 499 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 504, end: 508 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 509, end: 511 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 513, end: 515 },
                  },
                  loc: { start: 513, end: 515 },
                },
                loc: { start: 513, end: 516 },
              },
              directives: [],
              loc: { start: 509, end: 516 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 519, end: 523 },
            },
            loc: { start: 519, end: 523 },
          },
          directives: [],
          loc: { start: 504, end: 523 },
        },
      ],
      loc: { start: 482, end: 525 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 532, end: 536 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 541, end: 543 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 545, end: 547 },
              },
              loc: { start: 545, end: 547 },
            },
            loc: { start: 545, end: 548 },
          },
          directives: [],
          loc: { start: 541, end: 548 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "email", loc: { start: 551, end: 556 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 558, end: 564 },
              },
              loc: { start: 558, end: 564 },
            },
            loc: { start: 558, end: 565 },
          },
          directives: [],
          loc: { start: 551, end: 565 },
        },
      ],
      loc: { start: 527, end: 567 },
    },
  ],
  loc: { start: 0, end: 568 },
} as unknown as DocumentNode;
