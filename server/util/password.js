const crypto = require('crypto');

generatePassword = (password) => {
	var salt = crypto.randomBytes(32).toString('hex');
	var hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
	return {
		salt: salt,
		hash: hash
	};
}

validatePassword = (password, salt, hash) => {
	var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
	return hash === genHash;
}

// Checks for a strong password
isStrongPassword = (password) => {
    var error;

	var lowercase = false;
	var uppercase = false;
	var numeric = false;
	var special = false;

	const specialChars = new Set(["!", "@", "#", "\$", "%", "\^", "&"])

	for (var i = 0 ; i < password.length; ++i) {
		var code = password.charCodeAt(i);
		if (!lowercase && 97 <= code && code <= 122) {
			lowercase = true;
		}
		if (!uppercase && 65 <= code && code <= 90) {
			uppercase = true;
		}
		if (!numeric && 48 <= code && code <= 57) {
			numeric = true;
		}
		if (!special && specialChars.has(password[i])) {
			special = true;
		}
		if (lowercase && uppercase && numeric && special) {
			break;
		}
	}

    if (password.length < 8) {
		error = {msg: "Password must be at least eight characters long."};
	} else if (!lowercase) {
		error = {msg: "Password must contain at least 1 lowercase alphabetical character."};
	} else if (!uppercase) {
		error = {msg: "Password must contain at least 1 uppercase alphabetical character."};
	} else if (!numeric) {
		error = {msg: "Password must contain at least 1 numeric character."};
	} else if (!special) {
		error = {msg: "Password must contain at least 1 special character."};
    }
    
    return error;
}

module.exports = { isLoggedIn, isStrongPassword };