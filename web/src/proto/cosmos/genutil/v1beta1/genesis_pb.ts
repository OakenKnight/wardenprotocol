// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file cosmos/genutil/v1beta1/genesis.proto (package cosmos.genutil.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * GenesisState defines the raw genesis transaction in JSON.
 *
 * @generated from message cosmos.genutil.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * gen_txs defines the genesis transactions.
   *
   * @generated from field: repeated bytes gen_txs = 1;
   */
  genTxs: Uint8Array[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.genutil.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gen_txs", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

