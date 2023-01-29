function generatePassword() {
    var leght = 16
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~^.?@#$%&*/-_()'
    var password = ''

    for (var i = 0; i <= leght; i++){
            var randomGenerator = Math.floor(Math.random() * characters.length)
            password += characters.substring(randomGenerator, randomGenerator +2)
        }

        document.getElementById("password").value = password
}

function copyPassword() {
    var copy = document.getElementById("password")
    copy.select()
    copy.setSelectionRange(0, 999)
    document.execCommand('copy')
}