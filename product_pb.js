// source: product.proto
/**
 * @fileoverview
 * @enhanceable
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

goog.exportSymbol('proto.product.Product', null, global);
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
proto.product.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.product.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.product.Product.displayName = 'proto.product.Product';
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
proto.product.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.product.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.product.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.product.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    sapProductId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    productId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    categoryId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    categories: jspb.Message.getFieldWithDefault(msg, 4, ""),
    variantId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    visible: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    productType: jspb.Message.getFieldWithDefault(msg, 7, ""),
    name: jspb.Message.getFieldWithDefault(msg, 8, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 9, ""),
    minimumPurchase: jspb.Message.getFieldWithDefault(msg, 10, 0),
    serviceCharge: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    image: jspb.Message.getFieldWithDefault(msg, 12, ""),
    usage: jspb.Message.getFieldWithDefault(msg, 13, ""),
    description: jspb.Message.getFieldWithDefault(msg, 14, ""),
    specification: jspb.Message.getFieldWithDefault(msg, 15, ""),
    barcode: jspb.Message.getFieldWithDefault(msg, 16, ""),
    articleId: jspb.Message.getFieldWithDefault(msg, 17, ""),
    color: jspb.Message.getFieldWithDefault(msg, 18, ""),
    size: jspb.Message.getFieldWithDefault(msg, 19, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
    specialPrice: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
    shippingCost: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
    unit: jspb.Message.getFieldWithDefault(msg, 23, ""),
    unitCode: jspb.Message.getFieldWithDefault(msg, 24, ""),
    service: jspb.Message.getFieldWithDefault(msg, 25, ""),
    keyword: jspb.Message.getFieldWithDefault(msg, 26, ""),
    type: jspb.Message.getFieldWithDefault(msg, 27, ""),
    partner: jspb.Message.getFieldWithDefault(msg, 28, ""),
    phaseType: jspb.Message.getFieldWithDefault(msg, 29, ""),
    shippingType: jspb.Message.getFieldWithDefault(msg, 30, ""),
    patternTiles: jspb.Message.getFieldWithDefault(msg, 31, ""),
    packInBox: jspb.Message.getFieldWithDefault(msg, 32, 0),
    tileSquare: jspb.Message.getFieldWithDefault(msg, 33, ""),
    variantImage: jspb.Message.getFieldWithDefault(msg, 34, ""),
    productImage: jspb.Message.getFieldWithDefault(msg, 35, "")
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
 * @return {!proto.product.Product}
 */
proto.product.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.product.Product;
  return proto.product.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.product.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.product.Product}
 */
proto.product.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSapProductId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategories(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariantId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVisible(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinimumPurchase(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setServiceCharge(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsage(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecification(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setBarcode(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setArticleId(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrice(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpecialPrice(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setShippingCost(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnitCode(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyword(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartner(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhaseType(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setShippingType(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setPatternTiles(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPackInBox(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setTileSquare(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariantImage(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductImage(value);
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
proto.product.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.product.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.product.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.product.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSapProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCategoryId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCategories();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVariantId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVisible();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getProductType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMinimumPurchase();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getServiceCharge();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getUsage();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getSpecification();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getBarcode();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getArticleId();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      20,
      f
    );
  }
  f = message.getSpecialPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      21,
      f
    );
  }
  f = message.getShippingCost();
  if (f !== 0.0) {
    writer.writeFloat(
      22,
      f
    );
  }
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getUnitCode();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getKeyword();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getPartner();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getPhaseType();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getShippingType();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getPatternTiles();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getPackInBox();
  if (f !== 0) {
    writer.writeUint32(
      32,
      f
    );
  }
  f = message.getTileSquare();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getVariantImage();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getProductImage();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
};


/**
 * optional string sap_product_id = 1;
 * @return {string}
 */
proto.product.Product.prototype.getSapProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setSapProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string product_id = 2;
 * @return {string}
 */
proto.product.Product.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string category_id = 3;
 * @return {string}
 */
proto.product.Product.prototype.getCategoryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setCategoryId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string categories = 4;
 * @return {string}
 */
proto.product.Product.prototype.getCategories = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setCategories = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string variant_id = 5;
 * @return {string}
 */
proto.product.Product.prototype.getVariantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setVariantId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool visible = 6;
 * @return {boolean}
 */
proto.product.Product.prototype.getVisible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setVisible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string product_type = 7;
 * @return {string}
 */
proto.product.Product.prototype.getProductType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setProductType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string name = 8;
 * @return {string}
 */
proto.product.Product.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string brand = 9;
 * @return {string}
 */
proto.product.Product.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 minimum_purchase = 10;
 * @return {number}
 */
proto.product.Product.prototype.getMinimumPurchase = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setMinimumPurchase = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional float service_charge = 11;
 * @return {number}
 */
proto.product.Product.prototype.getServiceCharge = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setServiceCharge = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional string image = 12;
 * @return {string}
 */
proto.product.Product.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string usage = 13;
 * @return {string}
 */
proto.product.Product.prototype.getUsage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setUsage = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string description = 14;
 * @return {string}
 */
proto.product.Product.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string specification = 15;
 * @return {string}
 */
proto.product.Product.prototype.getSpecification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setSpecification = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string barcode = 16;
 * @return {string}
 */
proto.product.Product.prototype.getBarcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setBarcode = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string article_id = 17;
 * @return {string}
 */
proto.product.Product.prototype.getArticleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setArticleId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string color = 18;
 * @return {string}
 */
proto.product.Product.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string size = 19;
 * @return {string}
 */
proto.product.Product.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional float price = 20;
 * @return {number}
 */
proto.product.Product.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional float special_price = 21;
 * @return {number}
 */
proto.product.Product.prototype.getSpecialPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setSpecialPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional float shipping_cost = 22;
 * @return {number}
 */
proto.product.Product.prototype.getShippingCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setShippingCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional string unit = 23;
 * @return {string}
 */
proto.product.Product.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string unit_code = 24;
 * @return {string}
 */
proto.product.Product.prototype.getUnitCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setUnitCode = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string service = 25;
 * @return {string}
 */
proto.product.Product.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setService = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string keyword = 26;
 * @return {string}
 */
proto.product.Product.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string type = 27;
 * @return {string}
 */
proto.product.Product.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * optional string partner = 28;
 * @return {string}
 */
proto.product.Product.prototype.getPartner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setPartner = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional string phase_type = 29;
 * @return {string}
 */
proto.product.Product.prototype.getPhaseType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setPhaseType = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string shipping_type = 30;
 * @return {string}
 */
proto.product.Product.prototype.getShippingType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setShippingType = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string pattern_tiles = 31;
 * @return {string}
 */
proto.product.Product.prototype.getPatternTiles = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setPatternTiles = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional uint32 pack_in_box = 32;
 * @return {number}
 */
proto.product.Product.prototype.getPackInBox = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {number} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setPackInBox = function(value) {
  return jspb.Message.setProto3IntField(this, 32, value);
};


/**
 * optional string tile_square = 33;
 * @return {string}
 */
proto.product.Product.prototype.getTileSquare = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setTileSquare = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional string variant_image = 34;
 * @return {string}
 */
proto.product.Product.prototype.getVariantImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setVariantImage = function(value) {
  return jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * optional string product_image = 35;
 * @return {string}
 */
proto.product.Product.prototype.getProductImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.Product} returns this
 */
proto.product.Product.prototype.setProductImage = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


goog.object.extend(exports, proto.product);