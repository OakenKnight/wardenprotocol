// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file cosmos/distribution/v1beta1/tx.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 *
 * @generated from message cosmos.distribution.v1beta1.MsgSetWithdrawAddress
 */
export class MsgSetWithdrawAddress extends Message<MsgSetWithdrawAddress> {
  /**
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  /**
   * @generated from field: string withdraw_address = 2;
   */
  withdrawAddress = "";

  constructor(data?: PartialMessage<MsgSetWithdrawAddress>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "withdraw_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetWithdrawAddress {
    return new MsgSetWithdrawAddress().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetWithdrawAddress {
    return new MsgSetWithdrawAddress().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetWithdrawAddress {
    return new MsgSetWithdrawAddress().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetWithdrawAddress | PlainMessage<MsgSetWithdrawAddress> | undefined, b: MsgSetWithdrawAddress | PlainMessage<MsgSetWithdrawAddress> | undefined): boolean {
    return proto3.util.equals(MsgSetWithdrawAddress, a, b);
  }
}

/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse
 */
export class MsgSetWithdrawAddressResponse extends Message<MsgSetWithdrawAddressResponse> {
  constructor(data?: PartialMessage<MsgSetWithdrawAddressResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetWithdrawAddressResponse {
    return new MsgSetWithdrawAddressResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetWithdrawAddressResponse {
    return new MsgSetWithdrawAddressResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetWithdrawAddressResponse {
    return new MsgSetWithdrawAddressResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSetWithdrawAddressResponse | PlainMessage<MsgSetWithdrawAddressResponse> | undefined, b: MsgSetWithdrawAddressResponse | PlainMessage<MsgSetWithdrawAddressResponse> | undefined): boolean {
    return proto3.util.equals(MsgSetWithdrawAddressResponse, a, b);
  }
}

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
 */
export class MsgWithdrawDelegatorReward extends Message<MsgWithdrawDelegatorReward> {
  /**
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  /**
   * @generated from field: string validator_address = 2;
   */
  validatorAddress = "";

  constructor(data?: PartialMessage<MsgWithdrawDelegatorReward>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawDelegatorReward {
    return new MsgWithdrawDelegatorReward().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawDelegatorReward {
    return new MsgWithdrawDelegatorReward().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawDelegatorReward {
    return new MsgWithdrawDelegatorReward().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawDelegatorReward | PlainMessage<MsgWithdrawDelegatorReward> | undefined, b: MsgWithdrawDelegatorReward | PlainMessage<MsgWithdrawDelegatorReward> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawDelegatorReward, a, b);
  }
}

/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse
 */
export class MsgWithdrawDelegatorRewardResponse extends Message<MsgWithdrawDelegatorRewardResponse> {
  constructor(data?: PartialMessage<MsgWithdrawDelegatorRewardResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawDelegatorRewardResponse {
    return new MsgWithdrawDelegatorRewardResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawDelegatorRewardResponse {
    return new MsgWithdrawDelegatorRewardResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawDelegatorRewardResponse {
    return new MsgWithdrawDelegatorRewardResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawDelegatorRewardResponse | PlainMessage<MsgWithdrawDelegatorRewardResponse> | undefined, b: MsgWithdrawDelegatorRewardResponse | PlainMessage<MsgWithdrawDelegatorRewardResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawDelegatorRewardResponse, a, b);
  }
}

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission
 */
export class MsgWithdrawValidatorCommission extends Message<MsgWithdrawValidatorCommission> {
  /**
   * @generated from field: string validator_address = 1;
   */
  validatorAddress = "";

  constructor(data?: PartialMessage<MsgWithdrawValidatorCommission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawValidatorCommission {
    return new MsgWithdrawValidatorCommission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawValidatorCommission {
    return new MsgWithdrawValidatorCommission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawValidatorCommission {
    return new MsgWithdrawValidatorCommission().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawValidatorCommission | PlainMessage<MsgWithdrawValidatorCommission> | undefined, b: MsgWithdrawValidatorCommission | PlainMessage<MsgWithdrawValidatorCommission> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawValidatorCommission, a, b);
  }
}

/**
 * MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse
 */
export class MsgWithdrawValidatorCommissionResponse extends Message<MsgWithdrawValidatorCommissionResponse> {
  constructor(data?: PartialMessage<MsgWithdrawValidatorCommissionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawValidatorCommissionResponse {
    return new MsgWithdrawValidatorCommissionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawValidatorCommissionResponse {
    return new MsgWithdrawValidatorCommissionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawValidatorCommissionResponse {
    return new MsgWithdrawValidatorCommissionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgWithdrawValidatorCommissionResponse | PlainMessage<MsgWithdrawValidatorCommissionResponse> | undefined, b: MsgWithdrawValidatorCommissionResponse | PlainMessage<MsgWithdrawValidatorCommissionResponse> | undefined): boolean {
    return proto3.util.equals(MsgWithdrawValidatorCommissionResponse, a, b);
  }
}

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgFundCommunityPool
 */
export class MsgFundCommunityPool extends Message<MsgFundCommunityPool> {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[] = [];

  /**
   * @generated from field: string depositor = 2;
   */
  depositor = "";

  constructor(data?: PartialMessage<MsgFundCommunityPool>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.MsgFundCommunityPool";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundCommunityPool {
    return new MsgFundCommunityPool().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundCommunityPool {
    return new MsgFundCommunityPool().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundCommunityPool {
    return new MsgFundCommunityPool().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFundCommunityPool | PlainMessage<MsgFundCommunityPool> | undefined, b: MsgFundCommunityPool | PlainMessage<MsgFundCommunityPool> | undefined): boolean {
    return proto3.util.equals(MsgFundCommunityPool, a, b);
  }
}

/**
 * MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse
 */
export class MsgFundCommunityPoolResponse extends Message<MsgFundCommunityPoolResponse> {
  constructor(data?: PartialMessage<MsgFundCommunityPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundCommunityPoolResponse {
    return new MsgFundCommunityPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundCommunityPoolResponse {
    return new MsgFundCommunityPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundCommunityPoolResponse {
    return new MsgFundCommunityPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFundCommunityPoolResponse | PlainMessage<MsgFundCommunityPoolResponse> | undefined, b: MsgFundCommunityPoolResponse | PlainMessage<MsgFundCommunityPoolResponse> | undefined): boolean {
    return proto3.util.equals(MsgFundCommunityPoolResponse, a, b);
  }
}

