class HashTable {
  constructor() {
    this.table = [];
  }

  static loseloseHashCode(key) {
    let hash = 0;
    for (let codePoint of key) {
      hash += codePoint.charCodeAt();
    }
    return hash % 37;
  }

  put(key, value) {
    const position = HashTable.loseloseHashCode(key);
    console.log(`${position} - ${key}`);
    this.table[position] = value;
  }

  get(key) {
    return this.table[HashTable.loseloseHashCode(key)];
  }

  remove(key) {
    this.table[HashTable.loseloseHashCode(key)] = undefined;
  }
}

const hash = new HashTable();
hash.put("Surmon", "surmon.me@email.com"); // 19 - Surmon
hash.put("John", "johnsnow@email.com"); // 29 - John
hash.put("Tyrion", "tyrion@email.com"); // 16 - Tyrion

// 测试get方法
console.log(hash.get("Surmon")); // surmon.me@email.com
console.log(hash.get("Loiane")); // undefined
console.log(hash);
