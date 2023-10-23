// import Dexie from './Dexie'
import Dexie from "https://unpkg.com/dexie@latest/dist/modern/dexie.mjs";

const db = new Dexie("probe_log");

db.version(1).stores({
  log: "++id, key, value"
});

/**
 * 增加数据
 * @param {*} keyName 
 * @param {*} keyValue 
 */
export const write = async (keyName, keyValue) => {
  try {
    await db.log.add({keyName, keyValue});
  } catch (e) {}
};

/**
 * 查询
 * @param {*} keyName 
 * @returns 
 */
export const read = async (keyName) => {
  return await db.log.each()
};


/**
 * 移除指定元素
 * @param {*} keyName 
 */
export const remove = async (keyName) => {
  try {
    await db.log.clear();
  } catch (e) {}
};




// 增加数据
export async function add(key, value) {
    await db.log.add({key, value});
}


// 删除所有的数据
export async function clearAll() {
  await db.log.clear();
}


// 查询
export async function getAll() {
  return await db.log.each()
}


// let db = new Dexie("probe_log");

// db.version(1).stores({
//     log: "++id, key, value",
// });

// export function add(key, value) {
//     yield db.log.add({
//         key,
//         value
//     });
// }

// db.transaction("rw", db.log, function* () {

//     add('1111', '222')


   
// }).catch(function (err) {
//     console.error(err.stack || err);
// });
