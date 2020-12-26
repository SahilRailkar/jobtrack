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

module.exports = { jobs, users }