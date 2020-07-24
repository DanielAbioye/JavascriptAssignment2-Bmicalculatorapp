function calculateMyBMI(){


var weight = document.getElementbyId("weight").value

var height = document.getElementbyId ("height").value

var bmi = weight / (height * weight)

// betweem 18.5 - 25 (optimal)
// < than 18.5 (underweight)
// > than 25 (overweight)


if (bmi < 18.5){ 
    var report = "Your Body Mass Index is:" +bmi+ "this is less than 18.5 so you are underweight"
 
}else if (bmi >= 18.5 && bmi <=25){
    var report = "Your Body Mass Index is:" +bmi+ "this is between 18.5 and 25, so you are optimal"
    
}else{
    var report {"Your Body Mass Index is:" +bmi+ "this is greater than 25, so you are overweight"
}

document.getElementbyId("report").innerHtml = report


}