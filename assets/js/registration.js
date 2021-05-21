var db = firebase.firestore();

var aarna= db.collection('Madilu Aarna')
var ambara= db.collection('Madilu Ambara')
var elite= db.collection('Madilu Elite')
var rajlee= db.collection('Madilu Rajlee')

document.getElementById('registrationForm').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();
	
	//get values
	
	var name=getInputVal('name');
	var phone=getInputVal('phone');
	var email=getInputVal('email');
	var dob=getInputVal('dob');
	var mtongue=getInputVal('mtongue');
	var nationality=getInputVal('nationality');
	var se=getInputVal('se');
	var place=getInputVal('place');
	var bg=getInputVal('bg');
	var addr=getInputVal('addr');
	var fname=getInputVal('fname');
	var fphone=getInputVal('fphone');
	var mname=getInputVal('mname');
    var mphone=getInputVal('mphone');
    var marital=getInputVal('marital');
	var gname=getInputVal('gname');
	var grel=getInputVal('grel');
	var gaddr=getInputVal('gaddr');
	var gphone=getInputVal('gphone');
	var gemail=getInputVal('gemail');
	var source=getInputVal('source');
	var ref=getInputVal('ref');
	var region=getInputVal('region');
    var veg=getInputVal('veg');
    var pg=getInputVal('pg');
    var key=getInputVal('key');

    var data = {
        "Name" : name,
        "Phone":phone,
        "Email":email,
        "DOB":dob,
        "Mother Tongue":mtongue,
        "Nationality":nationality,
        "Student/Employee":se,
        "College/ Place of Work":place,
        "Blood Group":bg,
        "Permanent Address":addr,
        "Father's Name":fname,
        "Father's Phone No.":fphone,
        "Mother's Name":mname,
        "Mother's Phone No.":mphone,
        "Marrital Status":marital,
        "Guardian Name":gname,
        "Relation with Guardian":grel,
        "Guardian's Address":gaddr,
        "Guardian's Phone No.":gphone,
        "Guardian's Email Id":gemail,
        "How did you get to know about Madilu PGs?":source,
        "Referral Details":ref,
        "Regionality":region,
        "Vegetarian/Non-Vegetarian":veg,
        "PG":pg
    }
    
    if(key=="ABCD")
    {
        var docId=name+" "+email
        if(pg=="Elite")
        {
            elite.doc(docId).set(data)
            .then(function(){
                console.log("well done ")
                window.alert("Message: " + "well done")
                })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert("Message: " + errorMessage);
                })
        }
        if(pg=="Rajlee")
        {
            rajlee.doc(docId).set(data)
            .then(function(){
                console.log("well done ")
                window.alert("Message: " + "well done")
                })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert("Message: " + errorMessage);
                })
        }
        if(pg=="Aarna")
        {
            aarna.doc(docId).set(data)
            .then(function(){
                console.log("well done ")
                window.alert("Message: " + "well done")
                })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert("Message: " + errorMessage);
                })
        }
        if(pg=="Ambara")
        {
            ambara.doc(docId).set(data)
            .then(function(){
                console.log("well done ")
                window.alert("Message: " + "well done")
                })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert("Message: " + errorMessage);
                })
        }
        document.querySelector('.alert').innerHTML="<p>Successfully Submitted</p>";

    }
    else
    {
        document.querySelector('.alert').innerHTML="<p>Wrong Passcode</p>";   
    }
    
    document.querySelector('.alert').style.display='block';
    setTimeout(function(){
		document.querySelector('.alert').style.display='none';
	},200000);
	
	//clear form
	document.getElementById('registrationForm').reset();
}
	
function getInputVal(id){
    return document.getElementById(id).value;
}
   
