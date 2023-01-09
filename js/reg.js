async function Reg(){
    const emailInput = document.getElementById('email-input').value;
    let nameInput = document.getElementById('username-input').value;
    let passwordInput = document.getElementById('password-input').value;
    console.log(emailInput)
    this.responsedata = await (await fetch('https://api-eindproject-tvanloy.cloud.okteto.net/users/',
        {
            method: 'POST',
            body: JSON.stringify({
                    email: emailInput,
                    password: passwordInput,
                }
            ),
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json' ,
            },
        })).json();
    if (!this.responsedata["detail"]){
        console.log("Login Succesfull")
        window.location.href = "https://api-eindproject.netlify.app/index.html";
        alert("Account has been created, please login.")
    }
    else {
        console.log("Login Failed")
        alert(this.responsedata["detail"])
    };
}