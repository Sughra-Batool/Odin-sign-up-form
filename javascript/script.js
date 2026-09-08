const pswdFld = document.querySelector('input[type = "password"]');
const cnfrmPswdFld = document.querySelector("#confirm-password");
const btn = document.querySelector('button');
const phoneNum = document.querySelector('input[type="tel"]')

btn.addEventListener('click', (e) => {
    const pswd = pswdFld.value.trim();
    const cnfrmPswd = cnfrmPswdFld.value.trim();

    if (pswd !== cnfrmPswd) {
        e.preventDefault();

        alert("confirm password field must be same as password field");
        cnfrmPswdFld.value = '';
    }
})

phoneNum.addEventListener('blur', (e) => {
    const phne = phoneNum.value.trim();

    if (!/^\d{12}$/.test(phne) || !phne.startsWith('923')) {
        alert('Phone number must not have alphabets and must have 12 digits');
        phoneNum.value = '';
    } 
})

