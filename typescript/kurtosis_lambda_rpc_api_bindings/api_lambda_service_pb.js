// source: api_lambda_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.kurtosis_lambda_rpc_api_service.ExecuteArgs', null, global);
goog.exportSymbol('proto.kurtosis_lambda_rpc_api_service.ExecuteResponse', null, global);
goog.exportSymbol('proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs', null, global);
goog.exportSymbol('proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.displayName = 'proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.displayName = 'proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteArgs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kurtosis_lambda_rpc_api_service.ExecuteArgs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.displayName = 'proto.kurtosis_lambda_rpc_api_service.ExecuteArgs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kurtosis_lambda_rpc_api_service.ExecuteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.displayName = 'proto.kurtosis_lambda_rpc_api_service.ExecuteResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs}
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs;
  return proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs}
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAvailable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse}
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse;
  return proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse}
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAvailable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsAvailable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_available = 1;
 * @return {boolean}
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.prototype.getIsAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse} returns this
 */
proto.kurtosis_lambda_rpc_api_service.IsAvailableResponse.prototype.setIsAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.prototype.toObject = function(opt_includeInstance) {
  return proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kurtosis_lambda_rpc_api_service.ExecuteArgs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.toObject = function(includeInstance, msg) {
  var f, obj = {
    paramsJson: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.kurtosis_lambda_rpc_api_service.ExecuteArgs}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kurtosis_lambda_rpc_api_service.ExecuteArgs;
  return proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kurtosis_lambda_rpc_api_service.ExecuteArgs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kurtosis_lambda_rpc_api_service.ExecuteArgs}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParamsJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kurtosis_lambda_rpc_api_service.ExecuteArgs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParamsJson();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string params_json = 1;
 * @return {string}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.prototype.getParamsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.kurtosis_lambda_rpc_api_service.ExecuteArgs} returns this
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteArgs.prototype.setParamsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kurtosis_lambda_rpc_api_service.ExecuteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseJson: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.kurtosis_lambda_rpc_api_service.ExecuteResponse}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kurtosis_lambda_rpc_api_service.ExecuteResponse;
  return proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kurtosis_lambda_rpc_api_service.ExecuteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kurtosis_lambda_rpc_api_service.ExecuteResponse}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kurtosis_lambda_rpc_api_service.ExecuteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseJson();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string response_json = 1;
 * @return {string}
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.prototype.getResponseJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.kurtosis_lambda_rpc_api_service.ExecuteResponse} returns this
 */
proto.kurtosis_lambda_rpc_api_service.ExecuteResponse.prototype.setResponseJson = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.kurtosis_lambda_rpc_api_service);
