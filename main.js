

 function linkForm()
 {
 var btn = document.getElementById('btnSubmit');
            btn.addEventListener('click',btnSub = ()=> {

                var fname = document.getElementById("fname").value;
                var lname = document.getElementById("lname").value;
                var email = document.getElementById("email").value;
                var PhoneNumber = document.getElementById("PhoneNumber").value;

                console.log({fname, lname, email, PhoneNumber});

                webengage.user.login(email);
                webengage.user.setAttribute('we_first_name', fname);
                webengage.user.setAttribute('we_last_name', lname);
                webengage.user.setAttribute('we_email', email);
                webengage.user.setAttribute('we_phone', PhoneNumber);
            })
}
