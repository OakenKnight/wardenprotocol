// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file cosmos/authz/v1beta1/tx.proto (package cosmos.authz.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Grant } from "./authz_pb.js";

/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 *
 * @generated from message cosmos.authz.v1beta1.MsgGrant
 */
export class MsgGrant extends Message<MsgGrant> {
  /**
   * @generated from field: string granter = 1;
   */
  granter = "";

  /**
   * @generated from field: string grantee = 2;
   */
  grantee = "";

  /**
   * @generated from field: cosmos.authz.v1beta1.Grant grant = 3;
   */
  grant?: Grant;

  constructor(data?: PartialMessage<MsgGrant>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.MsgGrant";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "grant", kind: "message", T: Grant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgGrant {
    return new MsgGrant().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgGrant {
    return new MsgGrant().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgGrant {
    return new MsgGrant().fromJsonString(jsonString, options);
  }

  static equals(a: MsgGrant | PlainMessage<MsgGrant> | undefined, b: MsgGrant | PlainMessage<MsgGrant> | undefined): boolean {
    return proto3.util.equals(MsgGrant, a, b);
  }
}

/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgExecResponse
 */
export class MsgExecResponse extends Message<MsgExecResponse> {
  /**
   * @generated from field: repeated bytes results = 1;
   */
  results: Uint8Array[] = [];

  constructor(data?: PartialMessage<MsgExecResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.MsgExecResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecResponse {
    return new MsgExecResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecResponse {
    return new MsgExecResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecResponse {
    return new MsgExecResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExecResponse | PlainMessage<MsgExecResponse> | undefined, b: MsgExecResponse | PlainMessage<MsgExecResponse> | undefined): boolean {
    return proto3.util.equals(MsgExecResponse, a, b);
  }
}

/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 *
 * @generated from message cosmos.authz.v1beta1.MsgExec
 */
export class MsgExec extends Message<MsgExec> {
  /**
   * @generated from field: string grantee = 1;
   */
  grantee = "";

  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   *
   * @generated from field: repeated google.protobuf.Any msgs = 2;
   */
  msgs: Any[] = [];

  constructor(data?: PartialMessage<MsgExec>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.MsgExec";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msgs", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExec {
    return new MsgExec().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExec {
    return new MsgExec().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExec {
    return new MsgExec().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExec | PlainMessage<MsgExec> | undefined, b: MsgExec | PlainMessage<MsgExec> | undefined): boolean {
    return proto3.util.equals(MsgExec, a, b);
  }
}

/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgGrantResponse
 */
export class MsgGrantResponse extends Message<MsgGrantResponse> {
  constructor(data?: PartialMessage<MsgGrantResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.MsgGrantResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgGrantResponse {
    return new MsgGrantResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgGrantResponse {
    return new MsgGrantResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgGrantResponse {
    return new MsgGrantResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgGrantResponse | PlainMessage<MsgGrantResponse> | undefined, b: MsgGrantResponse | PlainMessage<MsgGrantResponse> | undefined): boolean {
    return proto3.util.equals(MsgGrantResponse, a, b);
  }
}

/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 *
 * @generated from message cosmos.authz.v1beta1.MsgRevoke
 */
export class MsgRevoke extends Message<MsgRevoke> {
  /**
   * @generated from field: string granter = 1;
   */
  granter = "";

  /**
   * @generated from field: string grantee = 2;
   */
  grantee = "";

  /**
   * @generated from field: string msg_type_url = 3;
   */
  msgTypeUrl = "";

  constructor(data?: PartialMessage<MsgRevoke>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.MsgRevoke";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevoke {
    return new MsgRevoke().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevoke {
    return new MsgRevoke().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevoke {
    return new MsgRevoke().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRevoke | PlainMessage<MsgRevoke> | undefined, b: MsgRevoke | PlainMessage<MsgRevoke> | undefined): boolean {
    return proto3.util.equals(MsgRevoke, a, b);
  }
}

/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgRevokeResponse
 */
export class MsgRevokeResponse extends Message<MsgRevokeResponse> {
  constructor(data?: PartialMessage<MsgRevokeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.MsgRevokeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevokeResponse {
    return new MsgRevokeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevokeResponse {
    return new MsgRevokeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevokeResponse {
    return new MsgRevokeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRevokeResponse | PlainMessage<MsgRevokeResponse> | undefined, b: MsgRevokeResponse | PlainMessage<MsgRevokeResponse> | undefined): boolean {
    return proto3.util.equals(MsgRevokeResponse, a, b);
  }
}

