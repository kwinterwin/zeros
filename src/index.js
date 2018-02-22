module.exports = function getZerosCount(number) {
  var count = 0, a=0;
    for(var i=1; i<=number;i++){
        a=i;
        while(a%5==0){
            count++;
            a=a/5;
        }
    }
    return count;
}
