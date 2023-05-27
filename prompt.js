// console.log("prompt connected");
// alert box 
const showAlert = () => {
    alert("ki khobor kamon acho?");
}; 

const showConfirm = () => {
    const number = Math.random()*10; 
    console.log(number);
    if(number < 5){
        alert('Ki khobor dosto');
    }
}

// confirm box 
const askSomething = () => {
    const decision = confirm("Are you coming?");
    if(decision === true) {
        alert("500 tk bkash kor");
    }
    else{
        alert("DGM - Dure giya Mor");
    }

}