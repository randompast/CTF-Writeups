var s1 = "---   ---   ---   ---   ---------   ---------   ---------   ---   ---   ---------   ---------   ---   ---   ---   ---   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---------   ---------   ---   ---   ---   ---   ---------   ---   ---   ---------   ---------   ---------   ---------   ---------   ---------   ---------   ---------   ---------   ---------   ---   ---   ---------   ---------   ---   ---   ---   ---   ---   ---   ---------   ---------   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---------   ---   ---   ---------   ---   ---   ---------   ---------   ---------   ---   ---   ---------"
var s2 = "---------   ---------   ---   ---   ---   ---   ---------   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---   ---   ---------   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---------   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---------   ---------   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---   ---   ---------   ---------   ---   ---   ---------"
var s3 = "---   ---   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---------   ---------   ---------   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---------   ---------   ---   ---   ---   ---   ---------   ---------   ---------   ---   ---   ---------   ---------   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---------   ---   ---   ---------   ---------   ---   ---   ---   ---   ---------   ---------   ---------   ---------   ---   ---   ---------   ---------   ---   ---   ---   ---   ---------   ---------   ---   ---   ---------   ---------   ---   ---   ---   ---   ---   ---   ---------   ---------   ---------   ---   ---   ---------   ---------            "
var s4 = "---   ---   ---   ---   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---------   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---------   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---   ---            "
var s5 = "---------   ---------   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---------   ---------   ---------   ---------   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---------   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---------   ---   ---   ---------   ---------   ---------   ---   ---   ---------   ---------   ---   ---   ---------   ---   ---   ---------   ---------   ---------   ---------   ---------   ---   ---   ---------   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---------   ---------   ---------   ---------   ---------   ---   ---   ---------   ---------"
var s6 = "---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---------   ---------   ---   ---   ---   ---   ---------   ---------   ---   ---   ---   ---   ---------   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---------   ---------   ---   ---   ---------   ---------   ---   ---   ---   ---   ---------   ---------   ---------   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---------   ---   ---   ---------   ---------   ---------   ---   ---   ---   ---   ---   ---   ---------   ---   ---   ---------   ---------   ---------"

var stoStr = function(i){
  return s1[12*i+3]+
          s2[12*i+3]+
          s3[12*i+3]+
          s4[12*i+3]+
          s5[12*i+3]+
          s6[12*i+3]
}

var towiki = function(str){
  // https://www.biroco.com/yijing/sequence.htm
  return [
       "      ", "-     ", " -    ", "--    "
      ,"  -   ", "- -   ", " --   ", "---   "

      ,"   -  ", "-  -  ", " - -  ", "-- -  "
      ,"  --  ", "- --  ", " ---  ", "----  "

      ,"    - ", "-   - ", " -  - ", "--  - "
      ,"  - - ", "- - - ", " -- - ", "--- - "

      ,"   -- ", "-  -- ", " - -- ", "-- -- "
      ,"  --- ", "- --- ", " ---- ", "----- "

      ,"     -", "-    -", " -   -", "--   -"
      ,"  -  -", "- -  -", " --  -", "---  -"

      ,"   - -", "-  - -", " - - -", "-- - -"
      ,"  -- -", "- -- -", " --- -", "---- -"

      ,"    --", "-   --", " -  --", "--  --"
      ,"  - --", "- - --", " -- --", "--- --"

      ,"   ---", "-  ---", " - ---", "-- ---"
      ,"  ----", "- ----", " -----", "------"
    ]
    .indexOf(str)
}

var tob2 = function(str){
  return Number.parseInt(
    str.split("")
    .map(i => i == " " ? "0" : "1")
    .join("")
    , 2)
}

var tob64 = function(n){
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[n]
}

var fromb2 = function(n){
  return ( "0".repeat(6) + (n).toString(2) )
    .slice(-3)
    .split("")
    .map(i => i == "0" ? " " : "-")
    .join("")
}

var seq = []
for(var i = 0; i < 8; i++){
  for(var j = 0; j < 8; j++){
    seq[8*i + j] = (fromb2(i) + fromb2(j)).split("").reverse().join("")
  }
}

var chain = function(i){
  //two ways of solving
  return tob64( seq.indexOf( stoStr(i) ) )
  // return tob64(towiki(stoStr(i)))
}

var trysolve = function(){
  var arr = []
  for(var i = 0; 12*i < s1.length; i++){
    arr[i] = chain(i)
  }
  arr[arr.length - 1] = "="
  console.log(arr.join(""))
}
trysolve()

// for(var i = 0; i<64; i++){
  // if( seq[i] == dat[i] ){ //a copy from towiki
  //   console.log( seq[i], i)
  // }
  // console.log(stoStr(i), towiki(stoStr(i)), tob64(towiki(stoStr(i))))
// }

//node pagoda3.js | base64 -d
