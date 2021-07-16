// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_lambda_service_pb = require('./api_lambda_service_pb.js');

function serialize_api_lambda_service_ExecuteArgs(arg) {
  if (!(arg instanceof api_lambda_service_pb.ExecuteArgs)) {
    throw new Error('Expected argument of type api_lambda_service.ExecuteArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_lambda_service_ExecuteArgs(buffer_arg) {
  return api_lambda_service_pb.ExecuteArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_lambda_service_ExecuteResponse(arg) {
  if (!(arg instanceof api_lambda_service_pb.ExecuteResponse)) {
    throw new Error('Expected argument of type api_lambda_service.ExecuteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_lambda_service_ExecuteResponse(buffer_arg) {
  return api_lambda_service_pb.ExecuteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_lambda_service_IsAvailableArgs(arg) {
  if (!(arg instanceof api_lambda_service_pb.IsAvailableArgs)) {
    throw new Error('Expected argument of type api_lambda_service.IsAvailableArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_lambda_service_IsAvailableArgs(buffer_arg) {
  return api_lambda_service_pb.IsAvailableArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_lambda_service_IsAvailableResponse(arg) {
  if (!(arg instanceof api_lambda_service_pb.IsAvailableResponse)) {
    throw new Error('Expected argument of type api_lambda_service.IsAvailableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_lambda_service_IsAvailableResponse(buffer_arg) {
  return api_lambda_service_pb.IsAvailableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LambdaServiceService = exports.LambdaServiceService = {
  // Returns true if the Lambda Module service is available
isAvailable: {
    path: '/api_lambda_service.LambdaService/IsAvailable',
    requestStream: false,
    responseStream: false,
    requestType: api_lambda_service_pb.IsAvailableArgs,
    responseType: api_lambda_service_pb.IsAvailableResponse,
    requestSerialize: serialize_api_lambda_service_IsAvailableArgs,
    requestDeserialize: deserialize_api_lambda_service_IsAvailableArgs,
    responseSerialize: serialize_api_lambda_service_IsAvailableResponse,
    responseDeserialize: deserialize_api_lambda_service_IsAvailableResponse,
  },
  // Executes the main Lambda function in the LambdaService
execute: {
    path: '/api_lambda_service.LambdaService/Execute',
    requestStream: false,
    responseStream: false,
    requestType: api_lambda_service_pb.ExecuteArgs,
    responseType: api_lambda_service_pb.ExecuteResponse,
    requestSerialize: serialize_api_lambda_service_ExecuteArgs,
    requestDeserialize: deserialize_api_lambda_service_ExecuteArgs,
    responseSerialize: serialize_api_lambda_service_ExecuteResponse,
    responseDeserialize: deserialize_api_lambda_service_ExecuteResponse,
  },
};

exports.LambdaServiceClient = grpc.makeGenericClientConstructor(LambdaServiceService);
