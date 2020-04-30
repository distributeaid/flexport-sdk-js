# JavaScript client SDK for Flexport's API v2 [![npm version](https://img.shields.io/npm/v/@distributeaid/flexport-sdk.svg)](https://www.npmjs.com/package/@distributeaid/flexport-sdk)

![Build and Release](https://github.com/distributeaid/chat-ui/workflows/Build%20and%20Release/badge.svg?branch=saga)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

JavaScript client SDK client for [Flexport](https://flexport.com/)'s
[API v2](https://apibeta.flexport.com/)

> _Note:_ This library is **not feature complete**, until then 1.x releases may
> contain breaking changes.

## Installation

    npm i --save @distributeaid/flexport-sdk

## Usage

see [`./src/examples`](./src/examples) for working examples.

### Create a client

```typescript
import { v2Client } from "@distributeaid/flexport-sdk";

const client = v2Client({ apiKey: "your api key" });
```

### Query a resource

```typescript
import * as TE from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/pipeable";

pipe(
  client.shipment_index(),
  TE.map((shipments) => {
    console.dir(shipments, { depth: 9 });
  })
)();
```

### Follow links

```typescript
import { liftShipmentLeg } from "@distributeaid/flexport-sdk";

pipe(
  client.shipment_show({ id: shipmentId }),
  TE.map(({ legs }) => legs), // Extract legs link, Option<ResolvableCollection>
  TE.chain(TE.fromOption(() => createError("Shipment has no legs!"))),
  TE.chain(client.resolveCollection(liftShipmentLeg)), // Resolve the link to the collection
  TE.map((legs) => {
    console.dir(legs, { depth: 9 });
  })
)();
```

### Paginate a collection

```typescript
import { paginate } from "@distributeaid/flexport-sdk";

pipe(
  client.shipment_index(),
  TE.chain(paginate(client.resolvePage(liftShipment))),
  TE.map((shipments) => {
    console.dir(shipments, { depth: 9 });
  })
)();
```

## Generation of base types

The types in [`./src/generated`](./src/generated) are generated using
[`./src/bin/generateTypes.ts`](./src/bin/generateTypes.ts), which parses the
[Open API 3 definition file](./api-docs/v2.yaml)
([source](https://api.flexport.com/docs/v2/flexport)). However this API
documentation contains errors, which are corrected in the schema through
[a file containing corrections](./api-docs/corrections.yaml), before the base
types are generated.

## _Lifting_ of base types

The lifters in the same files _lift_ the Flexport API responses into the SDK
domain, by augmenting them with higher level properties. They are generated with
the API client using
[`./src/bin/generateApiOperations.ts`](./src/bin/generateApiOperations.ts).

## Architecture decision records (ADRs)

see [./adr](./adr).
