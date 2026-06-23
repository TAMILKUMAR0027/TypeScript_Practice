export{}

// Hard-coded inputs
let totalPercentage = 100
let actualPercentage = 70
let medicalCertificate = 'y'

if (actualPercentage >= 75) {
    console.log("Allowed")
} else {
    if (medicalCertificate == 'y') {
        console.log("allowed")
    } else {
        console.log("not allowed")
    }
}