var express    = require("express"),
    router     = express.Router(),
	Job        = require("../models/job"),
	path 	   = require('path'),
	middleware = require("../util/password");

/* -------------------- Index Routes -------------------- */
// GET landing page
// router.get("/", (req, res) => res.render("index", {title: "JobTrack"}));
router.get("/", (req, res) => {
	res.send("Hello World!")
})

// GET home page with all applications
// router.get("/app", function(req, res) {
// 	// Checks if user is logged in
// 	middleware.isLoggedIn(req, res, () => {
// 		// Find job listings and render home page
// 		Job.find({_user: req.user}, function(err, allJobs) {
// 			// ERROR: N/A Log
// 			if (err) {
// 				console.log(err);
// 			}
// 			// SUCCESS: Redirect to dashboard
// 			else {
// 				res.render("app", {title: "Dashboard", user: req.user, jobs: allJobs});
// 			}
// 		});
// 	});
// });

module.exports = router;
