/**
 * Object Resources
 * @constructor
 * @extends Object
 */
function Resources(){};
Resources.prototype = new Object();
/**
 * Property images
 * @type Array
 * @memberOf Resources
 * @see Resources
 */
Resources.prototype.images = new HashMap();
/**
 * Object HashMap
 * @constructor
 * @extends Object
 */
function HashMap(){};
HashMap.prototype = new Object();
/**
 * Property map
 * @type Object
 * @memberOf HashMap
 * @see HashMap
 */
HashMap.prototype.map = new Array();
/**
 * Function hash(key, value)
 * @param {Any} key
 * @param {Any} value
 * @returns {Any}
 * @memberOf HashMap
 * @see HashMap
 */
HashMap.prototype.hash = function(key, value){return "";};


