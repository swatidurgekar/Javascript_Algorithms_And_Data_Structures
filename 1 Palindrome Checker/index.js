function palindrome(str) {
  var string='', string1='';
  str=str.toLowerCase()
for(var i=0;i<str.length;i++){
    if(str.charCodeAt(i)>47&&str.charCodeAt(i)!=95){
      string+=str[i]
    }
}
for(i=string.length-1;i>=0;i--){
    string1+=string[i]
}
if(string1===string){
    return true;
} else{
    return false;
}

}

console.log(palindrome("eye"));