var express    = require("express"),
    router     = express.Router(),
	User       = require("../models/user"),
	passport   = require("passport"),
	middleware = require("../util/password");

/* -------------------- User Routes -------------------- */

// GET registration page
router.get("/signup", (req, res) => res.render("signup", {title: "Sign Up"}));

// POST a user
router.post("/signup", (req, res) => {
	const {username, name, email, password} = req.body;

	// Checks for a strong password
	let error = middleware.checkStrongPassword(password);

	// SUCCESS: Register the user
	if (error === null) {
		let newUser = new User({username: username, name: name, email: email, jobs: []});
		User.register(newUser, password, (err, user) => {
			if (err) {
				return res.render("signup", {title: "Sign Up", error: err});
			}
			passport.authenticate("local")(req, res, () => {
				req.logIn(user);
				return res.redirect("/app");
			});
		});
	} 
	// ERROR: Redirect to Sign Up page
	else {
		res.render("signup", {title: "Sign Up", error: error});
	}
});


// GET login page
router.get("/login", (req, res) => res.render("login", {title: "Login"}));

// Login a user
router.post("/login", passport.authenticate('local'), (req, res, next) => {
	// passport.authenticate("local", (err, user) => {
	// 	// ERROR: Render current page with errors
	// 	if (err) {
	// 		return res.render("login", {title: "Login", error: err});
	// 	}
	// 	if (!user) {
	// 		return res.render("login", {title: "Login", error: err});
	// 	}
	// 	// SUCCESS: Log in the user
	// 	req.logIn(user, err => {
	// 		// ERROR: Render current page with errors
	// 		if (err) {
	// 			return res.render("login", {title: "Login", error: err});
	// 		}
	// 	});
	// 	// SUCCESS: Redirect to dashboard
	// 	return res.redirect("/app");
	// })(req, res);
});

// Logout
router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});


// // DELETE a user
// router.delete("/app/users/:id", function(req, res) {
// 	User.findByIdAndDelete(req.params.id, function(err) {
// 		if (err) {
// 			res.redirect("/app/user");
// 		}
// 		else {
// 			res.redirect("/");
// 		}
// 	});
// });

module.exports = router;
