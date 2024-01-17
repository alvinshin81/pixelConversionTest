
// const Database = require("better-sqlite3");

import Database from "better-sqlite3";

const db = new Database("./rsc/trackIds.db", { verbose: console.log });
// db.loadExtension('./myfunc3');
db.pragma("journal_mode = WAL");

// db.exec("CREATE TABLE trackIds (ID INTEGER PRIMARY KEY, NAME TEXT)");

// // track ID 추가
// const trackIds_list = [
//     {trackId: '7152515445403531586', name: "알림톡 테스트"},
//     {trackId: '6141657146100435130', name: "부메랑M2 Catalog 0"},
//     {trackId: '4917123126974236283', name: "이벤트 커스텀 테스트 픽셀"},
//     {trackId: '4587589955779840066', name: "기획테스트 이것저것"},
// ]

// const insert = db.prepare(
//     "INSERT INTO trackIds (ID, NAME) VALUES ($trackId, $name)"
// );

// for (const trackId of trackIds_list) insert.run(trackId);


// track ID 조회
const dbList = db.prepare(
    "SELECT * FROM trackIds ORDER BY ID"
);
const table = dbList.all();

// 조회된 테이블에서 track ID만 trackList로 변환
var trackList = [];
table.forEach(function(value){
    var obj_value = value['ID'];
    trackList.push(obj_value);
    // console.log(obj_value);
});

export default trackList;
// function getTrackIds() {
//     var trackList = [];
//     table.forEach(function(value){
//         var obj_value = value['ID'];
//         trackList.push(obj_value);
//         // console.log(obj_value);
//     });
//     console.log(trackList);
//     return trackList;
// }

// function getTrackIds() {
//     // const sqlite3 = require('sqlite3').verbose();
//     const Database = require("better-sqlite3");
//     const db = new Database("./rsc/trackIds.db");
//         // track ID 조회
//     const dbList = db.prepare(
//         "SELECT * FROM trackIds ORDER BY ID"
//     );
//     const table = dbList.all();

//     var trackList = [];
//     table.forEach(function(value){
//         var obj_value = value['ID'];
//         trackList.push(obj_value);
//         // console.log(obj_value);
//     });
//     console.log(trackList);
// }

// export default getTrackIds;
// export {getTrackIds};
// console.log(trackList);
// console.log(table.map(row=>row.ID));



