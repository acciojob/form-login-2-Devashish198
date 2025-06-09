//your JS code here. If required.
document.getElementById("Submit").addEventListener("click",()=>{
	First=document.getElementById("FirstName").value;
	Last=document.getElementById("LastName").value;
	PhoneNumber=document.getElementById("PhoneNumber").value;
	Email=document.getElementById("Email").value;
	alert(`First Name: ${First} Last Name: ${Last} Phone Number: ${PhoneNumber} Email ID: ${Email}`)

	
})