let inputbtn = document.querySelector(".age-dob-input")

let calculatebtn = document.querySelector(".calculate-button")

let ageresult = document.querySelector(".age-result")

calculatebtn.addEventListener("click", () =>{

    if(inputbtn.value == "" ){
       alert("Please Enter your Date of Birth")
    }
    else{
        console.log("input ===>" +inputbtn.value);
        let dob = new Date(inputbtn.value)
        console.log("dob ===>" + dob);
        let dob_year = dob.getFullYear()


      // current

      let now = new Date();
      console.log("Now ===>" + now);

      let now_year = now.getFullYear();
      console.log("now_year ===>" + now_year);

      let age = now_year - dob_year;
      console.log("age ===>" + age);

    ageresult.innerHTML =`Your age is this ${age}`
     

    }
});