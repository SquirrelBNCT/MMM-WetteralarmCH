/* Magic Mirror
 * Module: MMM-WetteralarmCH
 *
 * By Marc Meichtry https://github.com/SquirrelBNCT
 * MIT Licensed.
 */

var NodeHelper = require('node_helper');
var request = require('request');

module.exports = NodeHelper.create({
	start: function () {
		console.log('MMM-WetteralarmCH helper started...')
	},

	getWarningData: function (region) {
		var self = this;

		 var url = 'http://my.wetteralarm.ch/v6/alarms/meteo/with-regions.json';


		request({
			url: url,
			method: 'GET'
		}, function (error, response, body) {

			 var result = JSON.parse(body);

	      		// console.log(result);

			var warningData = [];
			
			 for (var regionId in result['alarms']) {

                			if (result['alarms'][regionId]['regions'][0]['name_de'] == region) {
					var warnings = new Object();
					
					warnings.start = result['alarms'][regionId]['valid_from'];
					warnings.end = result['alarms'][regionId]['valid_to'];
					warnings.regionName = result['alarms'][regionId]['regions'][0]['name_de'];
					warnings.level = result['alarms'][regionId]['priority']
					warnings.type = result['alarms'][regionId]['code']
					warnings.altitudeStart = undefined;
					
					if (warnings.type == 1 && warnings.level == 1){warnings.event = "Bodenfrost";}
					else if (warnings.type == 2 && warnings.level == 1){warnings.event = "Gewitter";}
					else if (warnings.type == 3 && warnings.level == 1){warnings.event = "Grossflächige Glätte";}
					else if (warnings.type == 4 && warnings.level == 1){warnings.event = "Kräftiger Regen";}
					else if (warnings.type == 5 && warnings.level == 1){warnings.event = "Schneefall";}
					else if (warnings.type == 6 && warnings.level == 1){warnings.event = "Starke Windböen";}
					else if (warnings.type == 7 && warnings.level == 1){warnings.event = "Hochwasser";}

					if (warnings.type == 1 && warnings.level == 2){warnings.event = "Leichter Frost";}
					else if (warnings.type == 2 && warnings.level == 2){warnings.event = "Gewitter mit Hagelgefahr";}
					else if (warnings.type == 3 && warnings.level == 2){warnings.event = "Gefrierende Nässe";}
					else if (warnings.type == 4 && warnings.level == 2){warnings.event = "Intensiver Dauerregen";}
					else if (warnings.type == 5 && warnings.level == 2){warnings.event = "Ergiebiger Schneefall";}
					else if (warnings.type == 6 && warnings.level == 2){warnings.event = "Sturmböen";}
					else if (warnings.type == 7 && warnings.level == 2){warnings.event = "Hochwasser";}

					if (warnings.type == 1 && warnings.level == 3){warnings.event = "Strenger Frost";}
					else if (warnings.type == 2 && warnings.level == 3){warnings.event = "Gewitter mit Hagel";}
					else if (warnings.type == 3 && warnings.level == 3){warnings.event = "Gefrierende Nässe";}
					else if (warnings.type == 4 && warnings.level == 3){warnings.event = "Enorme Regenmengen";}
					else if (warnings.type == 5 && warnings.level == 3){warnings.event = "Grosse Neuschneemengen";}
					else if (warnings.type == 6 && warnings.level == 3){warnings.event = "Orkanböen";}
					else if (warnings.type == 7 && warnings.level == 3){warnings.event = "Hochwasser";}

					warnings.headline = result['alarms'][regionId]['de']['title'];
					warnings.description = result['alarms'][regionId]['de']['paragraph'];

					warningData.push(warnings);
					
				}

			

			}

			self.sendSocketNotification('WARNINGS_DATA', {warnings: warningData, region: region});

			//console.log(warnings);
			//console.log(warningData)
			
		});


	
	},

	socketNotificationReceived: function (notification, payload) {
		if (notification === 'GET_WARNINGS') {
			this.getWarningData(payload);
		}
	}

});
