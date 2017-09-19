 function getSub(sub)
  {	
  	var pn=0;
  	var n=0;
    for(var i=0; i<3;i++)
    {
       pn=sub%10;
       sub=Math.floor(sub/10);
       n=n*10+pn;
       
    }    
  	return n;
  }
  
  function reverse(sub)
  {
  	var pn=0;
  	var n=0;
  	while(sub>0)
  	{
  		pn=sub%10;
        sub=Math.floor(sub/10);
        n=n*10+pn;
  	}    
  	return n;
  }

  function searchForKey(key,keyArray)
  {
    for(var j=0;j<111;j++)
    {
      if(key==keyArray[j])
        return j;
    }   
  }
  
  function keyToVariable(numericKey)
  {
   
    var resultKey=0,n;
    for(var i=0 ; i< numericKey.length; i++){

      n=numericKey[i];
      resultKey=resultKey*10+n;
    }
    return resultKey;
  }
  
  function keyGrowing(numericKey ,e ,numericKeyLength)
  {
    if(numericKeyLength==12){
      return numericKey;

    } else{ 

      var r=getSub(e)%20+90;
      numericKeyLength++;
      numericKey[numericKeyLength-1]=r;

      console.log("this is the new num");
      console.log(r);
      console.log(numericKey);      

      e = keyToVariable(numericKey);

      numericKeyLength++;
      numericKey[numericKeyLength-1]=e%20+90;
          
      console.log("this is e");
      console.log(e);   
      console.log("this is the new num");
      console.log(e%20+90);
      console.log(numericKey);
        
      return keyGrowing(numericKey,e,numericKeyLength);
    }
  }
  /////////////////////////////////////////
  /////////////////////////////////////////

  var keyArray=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',/*';',',','.','(',')','!','?',' ','@','#','$','%','^','&','-','+','_','"','[',']','<','>','=','*','/','|','{',':'*/'a1','b1','c1','d1','e1','f1','g1','h1','i1','j1','k1','l1','m1','n1','o1','p1','q1','r1','s1','t1']; 

  
  var password=prompt('Enter your password');
  tempPass=password;

  var key=[];
  var index=0;
  while(tempPass>100){
    var keySub=getSub(tempPass);
  	var revKeySub=reverse(keySub);

    key[index]=keyArray[keySub%20+90];
    key[index+1]=keyArray[revKeySub%20+90];
    
    index+=2;

    tempPass=Math.floor(tempPass/10);  
  }


  var keyLength=key.length;
  var numericKey=[];
   
  // getting numericKey array from key array by searching the chars at keyArray
  for(var i=0;i<keyLength;i++){
    var tempKey=key[i];
    numericKey[i]=searchForKey(tempKey,keyArray);
  }

  
  console.log(numericKeyLength);
  console.log(key);

  var a=numericKey;
  console.log(a);

  var numericKeyLength=numericKey.length;

  var e=keyToVariable(numericKey);

  console.log(e);
  console.log("recursion starts here starts here");
  var q=keyGrowing(numericKey,e,numericKeyLength);
  console.log(q);
  var finalKey=[];


  for(var i=0;i<numericKey.length;i++){
    finalKey[i]=keyArray[numericKey[i]];
  }

  console.log(finalKey);
  //////////////////////////////////////
  /////////////////////////////////////
  ////////////////////////////////////
  var text=prompt("Enter the text");
  var c=0;

  for(var i=0;i<text.length;i++)
  {
    var downInterval = searchForKey(text[i],keyArray);
   // downInterval+=20;

    if(c>11) { c=0; }
    var upInterval = searchForKey(finalKey[c],keyArray);
    
    var result = upInterval-downInterval;
   
     console.log("up upInterval") ;  
     console.log(upInterval);
     console.log("downInterval");
     console.log(downInterval);
     console.log("result");
     console.log(result);

    document.write( keyArray[ result ]);
     c++ ; 
  }  