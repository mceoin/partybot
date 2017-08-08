// Pseudo Code
// Set desired booking date
// On date + 3months at 7am, script should execute
// Log in
// Go to Site Page using arvDate and lengthofstay params, + parkId & siteId where applicable
// Trigger reserve button 
// loop through extra sites as desired
// Arrival Date (form field [mm/dd/yyyy but date format must be e.g. 'Tue Apr 11 2017'], id="arrivaldate")
// Automate credit card booking process (can process batch added to cart)

/***************/
/* Kirby Cove  */
/***************/
// parkId=70972

// Site 1:
// siteId: 200102 
// site_1_url='https://recreation.gov/camping/Kirby_Cove_Campground/r/campsiteDetails.do?contractCode=NRSO&siteId=200102&parkId=70972'

// // Site 2 (disability):
// // siteId: 200106
// site_2_url='https://recreation.gov/camping/Kirby_Cove_Campground/r/campsiteDetails.do?contractCode=NRSO&siteId=200106&parkId=70972'

// // Site 3: 
// // siteId: 200112
// site_3_url='https://recreation.gov/camping/Kirby_Cove_Campground/r/campsiteDetails.do?contractCode=NRSO&siteId=200112&parkId=70972'

// // Site 4:
// // siteId: 200115
// site_4_url='https://recreation.gov/camping/Kirby_Cove_Campground/r/campsiteDetails.do?contractCode=NRSO&siteId=200115&parkId=70972'

// // Site 5 (disability):
// // siteId: 404220
// site_5_url='https://recreation.gov/camping/Kirby_Cove_Campground/r/campsiteDetails.do?contractCode=NRSO&siteId=404220&parkId=70972'

// // Day Use (disability): 
// // siteId: 200233
// day_use='https://recreation.gov/camping/Kirby_Cove_Campground/r/campsiteDetails.do?contractCode=NRSO&siteId=200233&parkId=70972'

///////////////////////////////
// Booking page, after login //
///////////////////////////////

// example_URL = https://www.recreation.gov/switchBookingAction.do?contractCode=NRSO&parkId=72079&siteId=281286&camparea=0&selStatus=a&matrixHasError=false&dateToday=05%2F13%2F2017&currentMaximumWindow=12&dateMinWindow=02%2F11%2F2017&dateMaxWindow=02%2F09%2F2018&arvdate=05%2F17%2F2017&arrivaldate=Wed+May+17+2017&lengthOfStay=1&addToSelectedOrNewTrip=false&newTripName=Create+a+new+Trip&selectedTripId=&dateChosen=true

baseURL='https://www.recreation.gov/switchBookingAction.do?contractCode=NRSO';
parkId=70972;
siteId=200102;
camparea=0;
selStatus='a';
matrixHasError=false;
currentMaximumWindow=12;
arvdate='05%2F10%2F2017'; // date format must be kept
arrivaldate='Wed+May+10+2017'; // date format must be kept
lengthOfStay=1; // some dates at popular sites, like weekends, will required 2 nights minimum
addToSelectedOrNewTrip=false;
newTripName='Create+a+new+Trip';
selectedTripId='';
dateChosen=true;
siteURL = baseURL + '&parkId=' + parkId +'&siteId=' + siteId +'&camparea=' + camparea +'&selStatus=' + selStatus +'&matrixHasError=' + matrixHasError + '&arvdate=' + arvdate +'&arrivaldate=' + arrivaldate +'&lengthOfStay=' + lengthOfStay + '&addToSelectedOrNewTrip=' + addToSelectedOrNewTrip +'&newTripName=' + newTripName +'&selectedTripId=' + selectedTripId +'&dateChosen=' + dateChosen;

console.log(siteURL)

window.location.href = siteURL;

// window.onload(
// 	setTimeout(function(){ 
// 		$('btnbookdates').click(); 
// 	}, 3000);
// )

//////////////////////////////////////////////////////////////////////////////////////
// For sites that have, say, no parkId, you may have to use the following code ///////
/////////////////////////////////////////////////////////////////////////////////////

// thisSite = 'https://www.recreation.gov/camping/Pines_Group_Site_Stony_Gorge_Reservoir/r/campsiteDetails.do?contractCode=NRSO&siteId=281286&parkId=72079'

// arvdate = '05/10/2017';
// lengthOfStay = '1';
// sitePage = thisSite + '&arvdate=' + arvdate + '&lengthOfStay=' + lengthOfStay;
// window.location.href = sitePage
// window.onload = function() {
// 	$('btnbookdates').click(); 
// };