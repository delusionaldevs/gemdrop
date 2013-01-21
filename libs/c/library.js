// RESOURCES OBJECT =============================
var Resources = {
	images : new HashMap()
};

// HASHMAP OBJECT ===============================
function HashMap(){
	this.map = new Object();
}
HashMap.prototype.add = function(key, value){
	this.map[key.toString()] = value;
};
HashMap.prototype.get = function(key){
	return this.map[key.toString()];
};

