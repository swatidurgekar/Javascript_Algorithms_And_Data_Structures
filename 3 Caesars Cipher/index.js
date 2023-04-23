function rot13(str) {
  var string=''
var ascii;
for(var i=0;i<str.length;i++){
    if(str.charCodeAt(i)<65){
        string+=str[i]
        continue;
    }
    ascii=str.charCodeAt(i)-13;
    if(ascii>64){
     string+=String.fromCharCode(ascii);
    }
    else if(ascii<=64){
        ascii=str.charCodeAt(i)+13;
       string+=String.fromCharCode(ascii);
    }
    
}
return string;
}

console.log(rot13("SERR PBQR PNZC"));