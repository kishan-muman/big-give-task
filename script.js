/* 
- Javascript file

*/

// Declare variables
var allocationId = 1;
var donationId = 0;
var matchFundId = 0;
var allocatedAmount = 0;
var status = "";



// Create an array of the donations that are placed
// Fields - Donation ID, donation amount (£)
// Need to enhance to dynamically add these
    let donation_array = [
        [1,10],
        [2,20]
    ];

// Create an allocations array that tracks the donations and their allocated amount from the funds
let allocation_array = [
    ["Allocation ID", "Donation ID", "Match Fund ID", "Amount allocated", "Status"],
    [0,0,0,0,""],
    [0,0,0,0,""],
    [0,0,0,0,""],
    [0,0,0,0,""],
    [0,0,0,0,""]
];

// Create Match Fund class
class MatchFunds {
    constructor(fundID, fundName, fundTotal, fundMatchOrder, fundRatio) {
        this.fundID = fundID;
        this.fundName = fundName;
        this.fundTotal = fundTotal;
        this.fundMatchOrder = fundMatchOrder;
        this.fundRatio = 1; // corresponds to a ratio 1:1
    }

    // Methods
    // - need to enhance to perform actions on HTML webpage

    /* Reserve an amount from a fund based on a donation amount
        - needs to state the status of the match fund i.e. reserved or collected
    */
    reserveFunding(donationId) {
        // take the value of the donation amount and times it by the ratio
        // this match fund amount is calculated and subtracted from the available total fund amount
        // add the reserved allocation to an array of reserved funds, update the status of the allocation

        // Find the donation ID and find the donation amount
        donationAmount = donation_array[donationId][1];

        // Calculate the match fund allocation amount 
        // - separate the ratio into two integers then multiply by first number, divide by second number to get the
        //   amount the donation needs to be multiplied by to get the allocation amount

        var i = 0;
        var j = 1;
        for(i = 0; i < j; i++) {
            allocatedAmount = donationAmount * matchFund_array[i].fundRatio;
            if (matchFund_array[i].fundTotal > allocatedAmount) {
                matchFund_array[i].fundTotal = matchFund_array[i].fundTotal - allocatedAmount;

                // Update the allocation array
                allocation_array[j][0] = j;
                allocation_array[j][1] = donationId;
                allocation_array[j][2] = matchFund_array[i].fundID;
                allocation_array[j][3] = allocatedAmount;
                allocation_array[j][4] = "Reserved";

                i++;

            } else if (matchFund_array[i].fundTotal > 0 && donationAmount > allocatedAmount) {
                // minus the fundTotal from the allocated amount
                allocatedAmount = allocatedAmount - matchFund_array[i].fundTotal;
                
                // Update the allocation array for the empty fund
                allocation_array[j][0] = j;
                allocation_array[j][1] = donationId;
                allocation_array[j][2] = matchFund_array[i].fundID;
                allocation_array[j][3] = allocatedAmount;
                allocation_array[j][4] = "Reserved";

                // set the fundTotal to 0
                // take the new allocated amount and subtract from the next fund's total
                matchFund_array[i].fundTotal = 0;
                matchFund_array[j].fundTotal = matchFund_array[j].fundTotal - allocatedAmount;

                // calculate the remaining donation value and take a donation from the next fund
                var remainingDonationAmount = donationAmount - allocatedAmount;
                allocatedAmount = remainingDonationAmount * matchFund_array[j].fundRatio

                // Update the allocation array for new fund
                allocation_array[j + 1][0] = j + 1;
                allocation_array[j + 1][1] = donationId;
                allocation_array[j + 1][2] = matchFund_array[j].fundID;
                allocation_array[j + 1][3] = allocatedAmount;
                allocation_array[j + 1][4] = "Reserved";

                i++;
                j++;
            } else {
                // code if the last fund is empty or the donation exceeds the remaining fund total
            }
        }
    }
    

    /* Collects an amount from a match fund based upon the reserved amount
        - needs to update the available total of the match fund
    */
    collectDonation() {
        // changes the allocation (identified using the allocation id) to collected
    }
    

    /* expires an amount of the reserved fund after a specific time/event
    */
    expireMatching() {
        // reverts the allocation (using allocation id) and adds the allocated amount to the correct fund (using fund ID)
        // should remove the row from the array or update the status to expired (and avoid allocation id values mixing)
    }
    

    /* list the current match fund allocations for each donation
        - Allocation ID
        - Donation ID
        - Match fund ID
        - Amount allocated
        - Status (Reserved or Collected or Expired)
    */
    listAllocations() {
        // list the allocations whether they are reserved or collected or expired
        // include the above fields
    }
}







// Create MatchFunds objects
// - Headings: fundID, fundName, fundTotal(£), fundMatchOrder, fundRatio (not included as it is defaulted)
// - Enhance to dynamically add more objects via buttons on HTML webpage
let myFund1 = new MatchFunds(1000, "Fund1", 1000, 1);
let myFund2 = new MatchFunds(1001, "Fund2", 2000, 2);




// Array of Match Funds objects
let matchFund_array = [];
matchFund_array[0] = myFund1;
matchFund_array[1] = myFund2;


