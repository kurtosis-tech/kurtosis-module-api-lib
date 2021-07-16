// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package lambda_api_bindings

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// LambdaServiceClient is the client API for LambdaService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LambdaServiceClient interface {
	// Returns true if the Lambda Module service is available
	IsAvailable(ctx context.Context, in *IsAvailableArgs, opts ...grpc.CallOption) (*IsAvailableResponse, error)
	// Executes the main Lambda function in the LambdaService
	Execute(ctx context.Context, in *ExecuteArgs, opts ...grpc.CallOption) (*ExecuteResponse, error)
}

type lambdaServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewLambdaServiceClient(cc grpc.ClientConnInterface) LambdaServiceClient {
	return &lambdaServiceClient{cc}
}

func (c *lambdaServiceClient) IsAvailable(ctx context.Context, in *IsAvailableArgs, opts ...grpc.CallOption) (*IsAvailableResponse, error) {
	out := new(IsAvailableResponse)
	err := c.cc.Invoke(ctx, "/api_lambda_service.LambdaService/IsAvailable", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *lambdaServiceClient) Execute(ctx context.Context, in *ExecuteArgs, opts ...grpc.CallOption) (*ExecuteResponse, error) {
	out := new(ExecuteResponse)
	err := c.cc.Invoke(ctx, "/api_lambda_service.LambdaService/Execute", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LambdaServiceServer is the server API for LambdaService service.
// All implementations must embed UnimplementedLambdaServiceServer
// for forward compatibility
type LambdaServiceServer interface {
	// Returns true if the Lambda Module service is available
	IsAvailable(context.Context, *IsAvailableArgs) (*IsAvailableResponse, error)
	// Executes the main Lambda function in the LambdaService
	Execute(context.Context, *ExecuteArgs) (*ExecuteResponse, error)
	mustEmbedUnimplementedLambdaServiceServer()
}

// UnimplementedLambdaServiceServer must be embedded to have forward compatible implementations.
type UnimplementedLambdaServiceServer struct {
}

func (UnimplementedLambdaServiceServer) IsAvailable(context.Context, *IsAvailableArgs) (*IsAvailableResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IsAvailable not implemented")
}
func (UnimplementedLambdaServiceServer) Execute(context.Context, *ExecuteArgs) (*ExecuteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Execute not implemented")
}
func (UnimplementedLambdaServiceServer) mustEmbedUnimplementedLambdaServiceServer() {}

// UnsafeLambdaServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LambdaServiceServer will
// result in compilation errors.
type UnsafeLambdaServiceServer interface {
	mustEmbedUnimplementedLambdaServiceServer()
}

func RegisterLambdaServiceServer(s grpc.ServiceRegistrar, srv LambdaServiceServer) {
	s.RegisterService(&LambdaService_ServiceDesc, srv)
}

func _LambdaService_IsAvailable_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IsAvailableArgs)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LambdaServiceServer).IsAvailable(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api_lambda_service.LambdaService/IsAvailable",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LambdaServiceServer).IsAvailable(ctx, req.(*IsAvailableArgs))
	}
	return interceptor(ctx, in, info, handler)
}

func _LambdaService_Execute_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExecuteArgs)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LambdaServiceServer).Execute(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/api_lambda_service.LambdaService/Execute",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LambdaServiceServer).Execute(ctx, req.(*ExecuteArgs))
	}
	return interceptor(ctx, in, info, handler)
}

// LambdaService_ServiceDesc is the grpc.ServiceDesc for LambdaService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LambdaService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "api_lambda_service.LambdaService",
	HandlerType: (*LambdaServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "IsAvailable",
			Handler:    _LambdaService_IsAvailable_Handler,
		},
		{
			MethodName: "Execute",
			Handler:    _LambdaService_Execute_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "api_lambda_service.proto",
}
