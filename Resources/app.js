// this sets the background color of the master UIView (when there are no windows/tab groups on it)

Ti.include("ohjelma.js");

Titanium.UI.setBackgroundColor('#000');


function get_start_date() {
	var cur_date = new Date();
	var start_date = new Date(Ti.App.Properties.getDouble("startDate",0.0));
	if (start_date == 0.0) {
		Ti.App.Properties.setDouble("startDate",cur_date.getTime());
		start_date = cur_date;
	}
	return start_date;
}

function current_day() {
	var start_date = get_start_date();
	var current_date = new Date();
	var day = 1000*60*60*24;
	var diff = Math.round((current_date.getTime()-start_date.getTime())/(day));
	return diff;
}

function set_texts() {
	var text = ohjelma[current_day()];
	if (typeof(text) != "undefined") {
		label1.text = 'Päivä: '+current_day(),
		infoLabel.text = text["info"];
	}	
}

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Info',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Info',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Päivä: '+current_day(),
	font:{fontSize:48,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top: 0,
	height: 60
});

var infoLabel = Titanium.UI.createLabel({
	color:"#000",
	text: "", //ohjelma[current_day()]['info'],
	top: 70,
	font:{fontSize:36,fontFamily:'Helvetica Neue'},

	textAlign:'center',
	width:'auto'
});

set_texts();

tabGroup.addEventListener("focus",function(e) {
	set_texts();
});


win1.add(label1);
win1.add(infoLabel);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Asetukset',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Asetukset',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Valitse aloituspäivä:',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top:0,
	height: 30
});

var datePickerDate = new Date(Ti.App.Properties.getDouble("startDate"));

var datePicker = Titanium.UI.createPicker({
		type: Titanium.UI.PICKER_TYPE_DATE,
		value: datePickerDate
	}
);
datePicker.addEventListener("change", function(e){
	Ti.App.Properties.setDouble("startDate",e.value.getTime());
	Ti.API.info(current_day(e.value));
	// Tallenna arvo
});


win2.add(label2);
win2.add(datePicker);


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
