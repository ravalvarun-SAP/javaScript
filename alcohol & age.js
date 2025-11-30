let isValid = false;
let birthday;
let age;

while (!isValid) {
    birthday = prompt("Teri Age kya hai?: dd/mm/yy or dd/mm/yyyy");

    // Allow 2 or 4 digit year
    if (/^\d{2}\/\d{2}\/(\d{2}|\d{4})$/.test(birthday)) {
        let [day, month, year] = birthday.split("/").map(Number);
        // Convert 2-digit year to 4 digits (assume 2000s, adjust if needed)
        if (year < 100) year += 2000;

        let dateObj = new Date(year, month - 1, day);

        // Make sure the date is real
        let isDateValid =
            dateObj.getDate() === day &&
            dateObj.getMonth() === month - 1 &&
            dateObj.getFullYear() === year;

        let today = new Date();
        today.setHours(0,0,0,0);
        let notFuture = dateObj <= today;

        if (isDateValid && notFuture) {
            isValid = true;
            // Calculate age from birthdate
            let now = new Date();
            age = now.getFullYear() - year;
            if (
                now.getMonth() < (month - 1) ||
                (now.getMonth() === (month - 1) && now.getDate() < day)
            ) {
                age--;
            }
        } else {
            alert("Sahi birthdate dalna😶🫥😏");
        }
    } else {
        alert("Sahi birthdate dalna😶🫥😏 yaar");
    }
}

// Now use the calculated age in your switch
let msg;
switch (true) {
    case (age >= 21):
        msg = "Bewda🍺🍻🍻😒😒😵‍💫🥴😵 Sala 🫷🤚🫸🤛👊🤜";
        break;
    case (age >= 19 && age < 21):
        msg = "Lowde👮🏼‍♂👮🏼‍♂🏑🤚🤚🫸 ko unde daal";
        break;
    default:
        msg = "bhag🏃🏼‍♂‍➡🏃🏼‍♂‍➡😁😁🤚😂🤣 bhoshdi ke";
        break;
}

alert(msg);
