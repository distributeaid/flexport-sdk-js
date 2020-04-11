# JavaScript client SDK for Flexport's API v2 [![npm version](https://img.shields.io/npm/v/@distributeaid/flexport-sdk.svg)](https://www.npmjs.com/package/@distributeaid/flexport-sdk)

![Build and Release](https://github.com/distributeaid/chat-ui/workflows/Build%20and%20Release/badge.svg?branch=saga)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

JavaScript client SDK client for [Flexport](https://flexport.com/)'s
[API v2](https://apibeta.flexport.com/)

## Installation

    npm i --save @distributeaid/flexport-sdk

## Usage

see [`./src/examples`](./src/examples) for working examples.

### Create a client

```typescript
import { createClient } from "@distributeaid/flexport-sdk";

const client = createClient({ apiKey: "your api key" });
```

### Query a resource

```typescript
import * as TE from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/pipeable";

pipe(
  client.listAllShipments(),
  TE.map(shipments => {
    console.dir(shipments, { depth: 9 });
  })
)();
```

### Follow links

```typescript
pipe(
  client.getShipment(shipmentId),
  TE.map(({ legs }) => legs), // Extract legs link, Option<ResolvableCollection>
  TE.chain(TE.fromOption(() => createError("Shipment has no legs!"))),
  TE.chain(client.resolveCollectionRef<ShipmentLeg>()), // Resolve the link to the collection
  TE.map(legs => {
    console.dir(leg, { depth: 9 });
  })
)();
```

### Paginate a collection

```typescript
import { paginate } from "../paginate";

pipe(
  paginate(client.listAllShipments(), client),
  TE.map(shipments => {
    console.dir(shipments, { depth: 9 });
  })
)().catch(handleError);
```

## Architecture decision records (ADRs)

see [./adr](./adr).
