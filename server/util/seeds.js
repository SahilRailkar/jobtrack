var Job = require("../models/job"),
    User       = require("../models/user"),
    generator  = require("generate-password");

// Use this to generate new passwords for each user
generatePassword = () => {
	return generator.generate({
		length: 10,
		numbers: true,
		symbols: true,
		strict: true
	});
}

// List of job models
var jobs = [
    {
        title: "Software Engineer Intern",
        company: {
            name: "Google",
            size: "Large Public",
            industry: "Internet",
        },
        category: "Applied",
        location: "Mountain View, CA",
        rating: 4.9,
        salary: 120000,
        description: "Description",
        notes: "Notes"
    }, 
    {
        title: "Software Engineer Intern",
        company: {
            name: "Facebook",
            size: "Large Public",
            industry: "Social Media",
        },
        category: "Rejected",
        location: "Menlo Park, CA",
        rating: 4.8,
        salary: 110000,
        description: "Description",
        notes: "Notes"
    }, 
    {
        title: "Software Engineer Intern",
        company: {
            name: "Uber",
            size: "Large Public",
            industry: "Rideshare",
        },
        category: "Offered",
        location: "San Francisco, CA",
        rating: 5.0,
        salary: 100000,
        description: "Description",
        notes: "Notes"
    }
];

// Add even more jobs
jobs = jobs.concat(jobs);
jobs = jobs.concat(jobs);

// List of user models
var users = [
    {
        username: "pickle",
        name: "Rick",
        email: "pickle@gmail.com",
        jobs: []
    },
    {
        username: "percyj",
        name: "Percy Jackson",
        email: "percyj@gmail.com",
        jobs: []
    },
    {
        username: "hpotter",
        name: "Harry Potter",
        email: "hpotter@hogwarts.edu",
        jobs: []
    }
]

function seedDB() {
    // Delete all users
    User.deleteMany({}, err => {
        if (err) {
            console.error(err);
        } else {
			console.log("Removed users!");
			
			// Delete all job listings
            Job.deleteMany({}, err => {
                if (err) {
                    console.error(err);
                } else {
					console.log("Removed job listings!");
					
					// Create all users
                    users.forEach(userModel => {

						// Create a new user and its password
						let newUser = new User(userModel);
						let password = generatePassword();
						console.log("Username: " + newUser.username + ", Password: " + password);
						
						// Register each user
                        User.register(newUser, password, (err, user) => {

							// ERROR: N/A Log
                            if (err) {
                                console.error(err);
                            } else {
								// SUCCESS: Create all jobs and assign them to the user
								jobs.forEach(job => {
									job._user = user;

									// Create a new job
									Job.create(job, (err, newJob) => {
										if (err) {
											console.error(err);
										}
									});
								});

								// Save the user
								user.save()
                            }
                        });
                    });
                }
            })
        }
    });
}

module.exports = seedDB; 