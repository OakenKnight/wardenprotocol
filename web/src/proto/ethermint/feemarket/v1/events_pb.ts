// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file ethermint/feemarket/v1/events.proto (package ethermint.feemarket.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * EventFeeMarket is the event type for the fee market module
 *
 * @generated from message ethermint.feemarket.v1.EventFeeMarket
 */
export class EventFeeMarket extends Message<EventFeeMarket> {
  /**
   * base_fee for EIP-1559 blocks
   *
   * @generated from field: string base_fee = 1;
   */
  baseFee = "";

  constructor(data?: PartialMessage<EventFeeMarket>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.feemarket.v1.EventFeeMarket";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventFeeMarket {
    return new EventFeeMarket().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventFeeMarket {
    return new EventFeeMarket().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventFeeMarket {
    return new EventFeeMarket().fromJsonString(jsonString, options);
  }

  static equals(a: EventFeeMarket | PlainMessage<EventFeeMarket> | undefined, b: EventFeeMarket | PlainMessage<EventFeeMarket> | undefined): boolean {
    return proto3.util.equals(EventFeeMarket, a, b);
  }
}

/**
 * EventBlockGas defines an Ethereum block gas event
 *
 * @generated from message ethermint.feemarket.v1.EventBlockGas
 */
export class EventBlockGas extends Message<EventBlockGas> {
  /**
   * height of the block
   *
   * @generated from field: string height = 1;
   */
  height = "";

  /**
   * amount of gas wanted by the block
   *
   * @generated from field: string amount = 2;
   */
  amount = "";

  constructor(data?: PartialMessage<EventBlockGas>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.feemarket.v1.EventBlockGas";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBlockGas {
    return new EventBlockGas().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBlockGas {
    return new EventBlockGas().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBlockGas {
    return new EventBlockGas().fromJsonString(jsonString, options);
  }

  static equals(a: EventBlockGas | PlainMessage<EventBlockGas> | undefined, b: EventBlockGas | PlainMessage<EventBlockGas> | undefined): boolean {
    return proto3.util.equals(EventBlockGas, a, b);
  }
}

