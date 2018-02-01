var length = +process.argv.length
var total = 0

for(var i = 2; i < length; i++){
  total = total + Number(process.argv[i])
}
 console.log(total)
