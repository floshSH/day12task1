console.log("helo")
let availSeats=25;
const as=document.querySelector('.event');

as.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    availSeats-= document.querySelector("#attendeesCount").value;
    
    availableSeats(availSeats);
    document.querySelector(".attendee").innerHTML="";
    if(availSeats === 0){
        const sold=document.querySelector("#submitBtn");
        sold.disabled=true;
        sold.textContent=`SoldOut`;
       

    }
    eventForm.reset();
});
     

const availableSeats=(availSeats)=>{
   
    let avails=document.getElementById("availSeats");
    avails.textContent=`Number of available seats : ${availSeats}`;
    // console.log(availSeats)
}



function attendeeFun(){const attendees=document.querySelector("#attendeesCount").value;
const attendeeName=document.querySelector(".attendee");
   attendeeName.innerHTML="";
   const count=document.querySelector("#attendeesCount");
   if(availSeats>3){
        count.max="4"
   }
   else{
    count.max=availSeats;
   }
for(let i=2;i<=attendees;i++){
     const label=document.createElement("label");
    label.textContent=`Attendee Name ${i} :`
    attendeeName.appendChild(label);

    const input=document.createElement("input");
    input.type="text";
    input.classList.add("form-control");
    input.required=true;
    attendeeName.appendChild(input);
}}

function cancelForm(){
    alert("Form canceled!")
    document.querySelector(".attendee").innerHTML="";
}