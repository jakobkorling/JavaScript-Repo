function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes(" ")) {
        return false; 
    }

    if (password.includes(username)) {
        return false;
    }

    return true;
}

// True (password is longer than 8 characters, does not contain username or a space)
console.log(isValidPassword("password123", "jakobkorling"));
// False (too short password)
console.log(isValidPassword("pw123", "username"));
// Fasle (contains a space in password)
console.log(isValidPassword("pass word", "username"));
// False (password contains username "summer")
console.log(isValidPassword("summer2026","summer"));