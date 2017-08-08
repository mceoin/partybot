/*******************************************************/
/* WELCOME TO PARTYBOT */

/* PartyBot allows you to get in first for a Reserve America reservation. Log-in and Payment are both to be done manually, so you'll still have to wake up early to run the script and book your tickets in the 15minute window established by opening a reservations page */

/* PartyBot is calibrated to Kirby Cove Campground, so you may need to recalibrate it for other sites. Some are only bookable  6 months in advance, others 3, some can't be booked on weekends (i.e. activate the script on a weekday) ... what can I say.. gov'ment... */

/* _Typically_ online bookings open at 7am Pacific Time*/

/* Step 1 */
/* install the required modules:*/
/*  - npm install 'open' */
/*  - npm install 'node-schedule' */

/* Step 2 */
/* Make sure you are logged in before using PartyBot */
/* This means, go to a test reservation page (must be logged into a reservation page; this is different to a normal login to Reserve America) */
/* e.g. https://www.recreation.gov/switchBookingAction.do?contractCode=NRSO&parkId=72079&siteId=281286&camparea=0&selStatus=a&matrixHasError=false&dateToday=05%2F13%2F2017&currentMaximumWindow=12&dateMinWindow=02%2F11%2F2017&dateMaxWindow=02%2F09%2F2018&arvdate=05%2F17%2F2017&arrivaldate=Wed+May+17+2017&lengthOfStay=1&addToSelectedOrNewTrip=false&newTripName=Create+a+new+Trip&selectedTripId=&dateChosen=true */

/* Step 3 */
/* run the script, node partybot.js */

/* Step 4 */
/* Pay for the booking. You should have a 15 minute window */

/* LET'S DO THIS! */
/*******************************************************/

var open = require('open');
var schedule = require('node-schedule');

console.log('')
console.log('                  .....')
console.log('          Activating Partybot')
console.log('                  .....')
console.log(`
                    .                                     
                   .$r                              
                  z$$$b                                   
                z$$$$$$$e                                 
             .d$$$$$$$$$$$b.                              
          zd$$$$$$$$$$$$$$$$$$e.                          
      z*************$*************4                       
      F         .*" $ "%c.         L                      
     d     .z*"     $     "*e.     4                      
     F .z*"         $         "*e.  L                     
    dP"             $             ^*$                     
    F$              $              .PL                    
   d *              $              4 3                    
  .F 4.             $              $  L                   
  d   F             $              F  3                   
  P   $             $             4%   L                  
 d    3             $             d    *                  
 P    4r            $             $    ^L                 
'%=====%============*=============%=====*"`)

console.log('')
console.log('  --- ALL YOUR PARKS ARE BELONG TO US ---  ')
console.log('')
console.log(' Hold tight, script is running...')

/* Set time/date to run partybot */
/* Remember! Jan = 0, Dec = 11 */
/* Year, Month, Day, Hour, Minute, Second */

var date = new Date(2017, 1, 14, 10, 57, 1);

var job = schedule.scheduleJob(date, function(){

	siteIds=[200102, 200106, 200112, 200115, 404220, 200233];

	for (i = 0; i < siteIds.length; i++) {
		/* Establish Target and Target date for booking */
		baseURL='https://www.recreation.gov/switchBookingAction.do?contractCode=NRSO';
		parkId=70972;
		camparea=0;
		selStatus='a';
		matrixHasError=false;
		currentMaximumWindow=12;
		arvdate='05%2F13%2F2017'; // date format must be followed
		arrivaldate='Sat+May+13+2017'; // date format must be kept
		lengthOfStay=1; // some dates at popular sites, like weekends, will required 2 nights minimum
		addToSelectedOrNewTrip=false;
		newTripName='Create+a+new+Trip';
		selectedTripId='';
		dateChosen=true;
		
		siteURL = baseURL + '&parkId=' + parkId +'&siteId=' + siteIds[i] +'&camparea=' + camparea +'&selStatus=' + selStatus +'&matrixHasError=' + matrixHasError + '&arvdate=' + arvdate +'&arrivaldate=' + arrivaldate +'&lengthOfStay=' + lengthOfStay + '&addToSelectedOrNewTrip=' + addToSelectedOrNewTrip +'&newTripName=' + newTripName +'&selectedTripId=' + selectedTripId +'&dateChosen=' + dateChosen;
		
		console.log('Opening site: ' + siteIds[i])
		open(siteURL)

		if (i === siteIds.length - 1) {
			console.log('')
			console.log('Done. Enjoy your trip!')
		}
	}

});

/***********************************************************************/
/**********************************************************************/
/* TODO: *************************************************************/
/* Incorporate PhantomJS for login & payment: http://phantomjs.org/ */
/* Accept easier date input like 01/01/2001 to minimize errors *****/
/* Setup to run on external server ********************************/
/* Setup to accept user-inputs: **********************************/
/*  - Credit Card details ***************************************/
/*  - Reserve America Credentials ******************************/
/*  - Date via calendar picker ********************************/
/* Email or text confirmation on success/error ***************/
/************************************************************/
/***********************************************************/
/**********************************************************/
/*********************************************************/
/********************************************************/
/*******************************************************/
/******************************************************/
/*****************************************************/
/****************************************************/
/***************************************************/
/**************************************************/
/*************************************************/
/************************************************/
/***********************************************/
/**********************************************/
/*********************************************/
/********************************************/
/*******************************************/
/******************************************/
/*****************************************/
/****************************************/
/***************************************/
/**************************************/
/*************************************/
/************************************/
/***********************************/
/**********************************/
/*********************************/
/********************************/
/*******************************/
/******************************/
/*****************************/
/****************************/
/***************************/
/**************************/
/*************************/
/************************/
/***********************/
/**********************/
/*********************/
/********************/
/*******************/
/******************/
/*****************/
/****************/
/***************/
/**************/
/*************/
/************/
/***********/
/**********/
/*********/
/********/
/*******/
/******/
/*****/
/****/
/***/
/**/

