function convertToRoman(num) {
 var string=''
while(num>0){
    if(num>=1000){
        string+='M';
        num-=1000;
    }
    else if(num>=900){
        string+='CM';
        num-=900;
    }
    else if(num>=500&&num<900){
        string+='D';
        num-=500;
    }
    else if(num===400){
        string+='CD';
        num-=400;
    }
    else if(num>=100){
        string+='C';
        num-=100;
    }
    else if(num>=90){
        string+='XC';
        num-=90;
    }
    else if(num>=50){
        string+='L';
        num-=50;
    }
    else if(num>=40){
        string+='XL'
        num-=40;
    }
    else if(num>20){
        string+='XX';
        num-=20;
    }    
    else if(num>=10){
        string+='X';
        num-=10;
    }
    else if(num===14){
        string+='XIV';
        num-=14;
    }
    else if(num==9){
        string+='IX';
        num-=9;
    }
    else if(num>=5&&num<9){
        string+='V';
        num-=5;
    }
    else if(num===4){
        string+='IV';
        num-=4;
    }
    else if(num>=1&&num<4){
        for(var i=1;i<=num;num--){
        string+='I';
        }
    }
}
return string;
}
console.log(convertToRoman(36));