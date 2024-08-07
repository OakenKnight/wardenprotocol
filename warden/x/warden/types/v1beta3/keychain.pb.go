// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: warden/warden/v1beta3/keychain.proto

package v1beta3

import (
	fmt "fmt"
	github_com_cosmos_cosmos_sdk_types "github.com/cosmos/cosmos-sdk/types"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/cosmos/cosmos-sdk/types/tx/amino"
	_ "github.com/cosmos/gogoproto/gogoproto"
	proto "github.com/cosmos/gogoproto/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// Keychain is an operator that can create and manage Keys.
//
// Users can request a Keychain to create a new Key using a particular scheme.
// The Keychain will store the private key, while the public key will be stored
// inside the Key object on-chain.
//
// Users can request a Keychain to sign data using a particular Key.
//
// The Keychain has an allowlist of addresses that can be used to write data
// on-chain (public keys and signatures). This can also be used to rotate the
// identity of the Keychain.
type Keychain struct {
	// ID of the Keychain.
	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	// Address of the creator of the Keychain.
	Creator string `protobuf:"bytes,2,opt,name=creator,proto3" json:"creator,omitempty"`
	// A human-readable description of the Keychain.
	Description string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	// Addresses that can update this Keychain.
	Admins []string `protobuf:"bytes,4,rep,name=admins,proto3" json:"admins,omitempty"`
	// Addresses that can write data on-chain on behalf of this Keychain.
	Writers []string `protobuf:"bytes,5,rep,name=writers,proto3" json:"writers,omitempty"`
	// Fees for creating and signing Keys.
	Fees *KeychainFees `protobuf:"bytes,7,opt,name=fees,proto3" json:"fees,omitempty"`
}

func (m *Keychain) Reset()         { *m = Keychain{} }
func (m *Keychain) String() string { return proto.CompactTextString(m) }
func (*Keychain) ProtoMessage()    {}
func (*Keychain) Descriptor() ([]byte, []int) {
	return fileDescriptor_e26f1bfcc25c4d7f, []int{0}
}
func (m *Keychain) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Keychain) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Keychain.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Keychain) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Keychain.Merge(m, src)
}
func (m *Keychain) XXX_Size() int {
	return m.Size()
}
func (m *Keychain) XXX_DiscardUnknown() {
	xxx_messageInfo_Keychain.DiscardUnknown(m)
}

var xxx_messageInfo_Keychain proto.InternalMessageInfo

func (m *Keychain) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Keychain) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Keychain) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Keychain) GetAdmins() []string {
	if m != nil {
		return m.Admins
	}
	return nil
}

func (m *Keychain) GetWriters() []string {
	if m != nil {
		return m.Writers
	}
	return nil
}

func (m *Keychain) GetFees() *KeychainFees {
	if m != nil {
		return m.Fees
	}
	return nil
}

// Fees for creating and signing Keys.
type KeychainFees struct {
	// Fee for creating a new Key.
	KeyReq github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,1,rep,name=key_req,json=keyReq,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"key_req"`
	// Fee for signing data.
	SigReq github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,2,rep,name=sig_req,json=sigReq,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"sig_req"`
}

func (m *KeychainFees) Reset()         { *m = KeychainFees{} }
func (m *KeychainFees) String() string { return proto.CompactTextString(m) }
func (*KeychainFees) ProtoMessage()    {}
func (*KeychainFees) Descriptor() ([]byte, []int) {
	return fileDescriptor_e26f1bfcc25c4d7f, []int{1}
}
func (m *KeychainFees) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *KeychainFees) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_KeychainFees.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *KeychainFees) XXX_Merge(src proto.Message) {
	xxx_messageInfo_KeychainFees.Merge(m, src)
}
func (m *KeychainFees) XXX_Size() int {
	return m.Size()
}
func (m *KeychainFees) XXX_DiscardUnknown() {
	xxx_messageInfo_KeychainFees.DiscardUnknown(m)
}

var xxx_messageInfo_KeychainFees proto.InternalMessageInfo

func (m *KeychainFees) GetKeyReq() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.KeyReq
	}
	return nil
}

func (m *KeychainFees) GetSigReq() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.SigReq
	}
	return nil
}

func init() {
	proto.RegisterType((*Keychain)(nil), "warden.warden.v1beta3.Keychain")
	proto.RegisterType((*KeychainFees)(nil), "warden.warden.v1beta3.KeychainFees")
}

func init() {
	proto.RegisterFile("warden/warden/v1beta3/keychain.proto", fileDescriptor_e26f1bfcc25c4d7f)
}

var fileDescriptor_e26f1bfcc25c4d7f = []byte{
	// 416 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x52, 0x31, 0x6f, 0xd4, 0x30,
	0x14, 0x3e, 0xe7, 0x8e, 0xa4, 0xf5, 0x55, 0x08, 0x22, 0x40, 0xe6, 0x86, 0x34, 0x2a, 0x0c, 0x51,
	0xa5, 0xda, 0xba, 0x76, 0x60, 0x2f, 0x52, 0x91, 0x60, 0xcb, 0xc8, 0x52, 0x39, 0xce, 0x23, 0xb5,
	0xd2, 0xc4, 0x77, 0x76, 0xa0, 0x84, 0x1f, 0xc0, 0xcc, 0xcc, 0x2f, 0x40, 0x4c, 0xfd, 0x17, 0x74,
	0xec, 0xc8, 0x04, 0xe8, 0x6e, 0xb8, 0xbf, 0x81, 0xe2, 0x38, 0xd2, 0x09, 0x31, 0x77, 0xc9, 0x7b,
	0x9f, 0xbf, 0xe7, 0xef, 0x8b, 0x3f, 0x3d, 0xfc, 0xfc, 0x8a, 0xeb, 0x1c, 0x6a, 0xe6, 0xca, 0x87,
	0x79, 0x06, 0x0d, 0x3f, 0x61, 0x25, 0xb4, 0xe2, 0x82, 0xcb, 0x9a, 0x2e, 0xb4, 0x6a, 0x54, 0xf8,
	0xb8, 0xa7, 0xa9, 0x2b, 0x6e, 0x6a, 0xf6, 0x90, 0x57, 0xb2, 0x56, 0xcc, 0x7e, 0xfb, 0xc9, 0x59,
	0x24, 0x94, 0xa9, 0x94, 0x61, 0x19, 0x37, 0xe0, 0xd4, 0xe6, 0x4c, 0xa8, 0x41, 0x69, 0xf6, 0xa8,
	0x50, 0x85, 0xb2, 0x2d, 0xeb, 0xba, 0xfe, 0xf4, 0xe0, 0x07, 0xc2, 0x3b, 0x6f, 0x9c, 0x65, 0x78,
	0x1f, 0x7b, 0x32, 0x27, 0x28, 0x46, 0xc9, 0x24, 0xf5, 0x64, 0x1e, 0x12, 0x1c, 0x08, 0x0d, 0xbc,
	0x51, 0x9a, 0x78, 0x31, 0x4a, 0x76, 0xd3, 0x01, 0x86, 0x31, 0x9e, 0xe6, 0x60, 0x84, 0x96, 0x8b,
	0x46, 0xaa, 0x9a, 0x8c, 0x2d, 0xbb, 0x7d, 0x14, 0x3e, 0xc1, 0x3e, 0xcf, 0x2b, 0x59, 0x1b, 0x32,
	0x89, 0xc7, 0xc9, 0x6e, 0xea, 0x50, 0xa7, 0x79, 0xa5, 0x65, 0x03, 0xda, 0x90, 0x7b, 0x96, 0x18,
	0x60, 0xf8, 0x02, 0x4f, 0xde, 0x01, 0x18, 0x12, 0xc4, 0x28, 0x99, 0x1e, 0x3f, 0xa3, 0xff, 0x7d,
	0x39, 0x1d, 0x7e, 0xf6, 0x0c, 0xc0, 0xa4, 0xf6, 0xc2, 0xeb, 0xc9, 0x8e, 0xff, 0x20, 0x38, 0xf8,
	0xec, 0xe1, 0xbd, 0x6d, 0x32, 0xfc, 0x84, 0x83, 0x12, 0xda, 0x73, 0x0d, 0x4b, 0x82, 0xe2, 0x71,
	0x32, 0x3d, 0x7e, 0x4a, 0xfb, 0x88, 0x68, 0x17, 0x91, 0x13, 0x9c, 0xd3, 0x97, 0x4a, 0xd6, 0xa7,
	0x67, 0x37, 0xbf, 0xf6, 0x47, 0xdf, 0x7f, 0xef, 0x27, 0x85, 0x6c, 0x2e, 0xde, 0x67, 0x54, 0xa8,
	0x8a, 0xb9, 0x3c, 0xfb, 0x72, 0x64, 0xf2, 0x92, 0x35, 0xed, 0x02, 0x8c, 0xbd, 0x60, 0xbe, 0x6e,
	0xae, 0x0f, 0xf7, 0x2e, 0xa1, 0xe0, 0xa2, 0x3d, 0xef, 0x42, 0x36, 0xdf, 0x36, 0xd7, 0x87, 0x28,
	0xf5, 0x4b, 0x68, 0x53, 0x58, 0x76, 0xde, 0x46, 0x16, 0xd6, 0xdb, 0xbb, 0x33, 0x6f, 0x23, 0x8b,
	0x14, 0x96, 0xa7, 0xfc, 0x66, 0x15, 0xa1, 0xdb, 0x55, 0x84, 0xfe, 0xac, 0x22, 0xf4, 0x65, 0x1d,
	0x8d, 0x6e, 0xd7, 0xd1, 0xe8, 0xe7, 0x3a, 0x1a, 0xbd, 0x7d, 0xb5, 0xe5, 0xd0, 0xc7, 0x7a, 0x64,
	0xb7, 0x40, 0xa8, 0x4b, 0x87, 0xff, 0x81, 0xec, 0xe3, 0xd0, 0x58, 0xfb, 0x61, 0x49, 0x33, 0xdf,
	0xce, 0x9d, 0xfc, 0x0d, 0x00, 0x00, 0xff, 0xff, 0xb8, 0x89, 0x54, 0x99, 0xc4, 0x02, 0x00, 0x00,
}

func (m *Keychain) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Keychain) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Keychain) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Fees != nil {
		{
			size, err := m.Fees.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintKeychain(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Writers) > 0 {
		for iNdEx := len(m.Writers) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Writers[iNdEx])
			copy(dAtA[i:], m.Writers[iNdEx])
			i = encodeVarintKeychain(dAtA, i, uint64(len(m.Writers[iNdEx])))
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.Admins) > 0 {
		for iNdEx := len(m.Admins) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Admins[iNdEx])
			copy(dAtA[i:], m.Admins[iNdEx])
			i = encodeVarintKeychain(dAtA, i, uint64(len(m.Admins[iNdEx])))
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.Description) > 0 {
		i -= len(m.Description)
		copy(dAtA[i:], m.Description)
		i = encodeVarintKeychain(dAtA, i, uint64(len(m.Description)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintKeychain(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintKeychain(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *KeychainFees) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *KeychainFees) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *KeychainFees) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.SigReq) > 0 {
		for iNdEx := len(m.SigReq) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SigReq[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintKeychain(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.KeyReq) > 0 {
		for iNdEx := len(m.KeyReq) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.KeyReq[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintKeychain(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintKeychain(dAtA []byte, offset int, v uint64) int {
	offset -= sovKeychain(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Keychain) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovKeychain(uint64(m.Id))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovKeychain(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovKeychain(uint64(l))
	}
	if len(m.Admins) > 0 {
		for _, s := range m.Admins {
			l = len(s)
			n += 1 + l + sovKeychain(uint64(l))
		}
	}
	if len(m.Writers) > 0 {
		for _, s := range m.Writers {
			l = len(s)
			n += 1 + l + sovKeychain(uint64(l))
		}
	}
	if m.Fees != nil {
		l = m.Fees.Size()
		n += 1 + l + sovKeychain(uint64(l))
	}
	return n
}

func (m *KeychainFees) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.KeyReq) > 0 {
		for _, e := range m.KeyReq {
			l = e.Size()
			n += 1 + l + sovKeychain(uint64(l))
		}
	}
	if len(m.SigReq) > 0 {
		for _, e := range m.SigReq {
			l = e.Size()
			n += 1 + l + sovKeychain(uint64(l))
		}
	}
	return n
}

func sovKeychain(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozKeychain(x uint64) (n int) {
	return sovKeychain(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Keychain) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowKeychain
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Keychain: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Keychain: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthKeychain
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthKeychain
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthKeychain
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthKeychain
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Admins", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthKeychain
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthKeychain
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Admins = append(m.Admins, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Writers", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthKeychain
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthKeychain
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Writers = append(m.Writers, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Fees", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthKeychain
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthKeychain
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Fees == nil {
				m.Fees = &KeychainFees{}
			}
			if err := m.Fees.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipKeychain(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthKeychain
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *KeychainFees) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowKeychain
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: KeychainFees: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: KeychainFees: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field KeyReq", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthKeychain
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthKeychain
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.KeyReq = append(m.KeyReq, types.Coin{})
			if err := m.KeyReq[len(m.KeyReq)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SigReq", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthKeychain
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthKeychain
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SigReq = append(m.SigReq, types.Coin{})
			if err := m.SigReq[len(m.SigReq)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipKeychain(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthKeychain
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipKeychain(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowKeychain
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowKeychain
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthKeychain
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupKeychain
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthKeychain
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthKeychain        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowKeychain          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupKeychain = fmt.Errorf("proto: unexpected end of group")
)
