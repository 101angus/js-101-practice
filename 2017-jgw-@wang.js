function getMessage(weight,height){ 
    var bmi = weight / ((height/100) * (height/100))
 	var result;
    if(bmi < 18.5)
        result="體重過輕";
    else if(bmi>=18.5 && bmi<24)
 		result="正常範圍";
    else if(bmi>=24 && bmi<27)
 		result="過重";
    else if(bmi>=27 && bmi<30)
 		result="輕度肥胖";
    else if(bmi>=30 && bmi<35)
 		result="中度肥胖";
     else
         result="重度肥胖";
  return bmi +" "+ result;
 
 }
 console.log(getMessage(70,170))