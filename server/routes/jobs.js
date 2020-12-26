var express    = require("express"), 
    router     = express.Router(),
    Job = require("../models/job");

/* -------------------- Job Listing Routes -------------------- */
// GET new job page
router.get("/new", (req, res) => res.render("new", {title: "New"}));

// GET a job 
router.get("/:id", (req, res) => {
	Job.findById(req.params.id , function(err, foundJob) {
		// ERROR: N/A
		if (err) {
			res.redirect("/app");
		}
		// SUCCESS: Render job page
		else {
			res.render("job", {title: "Job", job: foundJob});
		}
	});
});

// POST a job 
router.post("/new", (req, res) => {
	// Create a job Object
	let newJob = req.body.job;
	newJob.rating = Number(newJob.rating);
	newJob.salary = Number(newJob.salary);
	newJob._user = req.user;

	Job.create(newJob, function(err, createdJob) {
		// ERROR: Render current page with errors
		if (err) {
			res.render("new", {title: "New", job: createdJob, error: err});
		}
		// SUCCESS: Redirect to dashboard
		else {
			res.redirect("/app");
		}
	});
});

// PUT a job listing (Update a job listing!)
router.put("/:id", (req, res) => {
	// Create updated job Object
	let {job, company} = req.body;
	job.company = company;
	job._id = req.params.id;
	if (!(isNaN(job.rating) || isNaN(job.salary))) {
		job.rating = Number(job.rating);
		job.salary = Number(job.salary);
	}
	console.log(job)

	Job.findByIdAndUpdate(req.params.id, job, function(err, updatedJob) {
		// ERROR: Render current page with errors
		if (err) {
			job.rating = String(job.rating);
			job.salary = String(job.salary);
			res.render("job", {title: "Job", job: job, errors: err});
		}
		// SUCCESS: Redirect to dashboard
		else {
			res.redirect("/app");
		}
	});
});

// DELETE a job listing
router.delete("/:id", (req, res) => {
	Job.findByIdAndDelete(req.params.id, function(err) {
		if (err) {
			res.redirect("/app");
		}
		else {
			res.redirect("/app");
		}
	});
});

module.exports = router;
