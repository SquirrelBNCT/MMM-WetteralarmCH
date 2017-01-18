# MMM-WetteralarmCH
Weatherwarnings for 172 different regions in Switzerland and Liechtenstein

This a module for the [MagicMirror](https://github.com/MichMich/MagicMirror). It can display weather-warnings of [Wetteralarm.ch](http://www.wetteralarm.ch). The module shows you current weather-warnings of your region in Switzerland.

## Preview

![](https://github.com/SquirrelBNCT/MMM-WetteralarmCH/blob/master/Screenshot.jpg?raw=true)

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/SquirrelBNCT/MMM-WetteralarmCH.git`. A new folder will appear, navigate into it.
2. Execute `npm install` to install the node dependencies.



## Config
The entry in `config.js` can include the following options:

|Option|Description|
|---|---|
|`region`|Your region. Possible region names are: Aarau/Lenzburg, Aare-/Gürbetal, AG Suhre-/Seetal, Ägerisee, Agglo BE, Agglo BS, Agglo GE, Agglo Lausanne, Agglo St.Gallen, Agglo Winterthur, AI, Aigle, Ajoje, Albula, Amt Sursee, Amt Willisau, AR Hinterland, AR Mittelland, Avanches/Murtensee, BE Mittelland, Bedretto/Alta Leventina, Bergell, Bez. Bülach, Bez. Dielsdorf, Bez. Horgen, Bez. Meilen, Bez. Sissach, Birseck/Leimental, Bischofszell/Arbon, BL Jura, Bleniotal, Bödeli/Brienzersee, Broyetal/Moudon, Broyetal/Payerne, Brugg/Baden, Ceneri, Centovalli/Onsernone, Ceresio, Courtelary, Davos, Delémont, Domleschg, Engelbergtal, Engstligen-/Kandertal, Entlebuch, Ferrera/Avers, Freiberge, Fricktal, Glarus, Glattfelden/Rafz, GL Nord, Goms, Greifen-/Pfäffikersee, Greyerzerland, Grosstal, Gros-de-Vaud, Haslital, Herrschaft, Jungfrauregion, Klettgau, Knonaueramt, La Côte/Nyon, La Côte/Morges, La Glâne, Lago Maggiore, Laufental/Dorneck, Laupen/Wohlensee, Lavaux, Le Littoral, Lenzerheide, Leuk/Raron, Leukerbad/Lötschental, Leventina, Liechtenstein, Liestal/Rheinfelden, Limmattal, LU Seetal, Magadino, Maggiatal, Malcantone, Maloja/St.Moritz, March/Höfe, Martigny/Conthey, Mattertal, Mendrisiotto,  Misox, Monthey/St.Maurice, Moutier, Montagnes NE, Muotathal, Niedersimmental, NW, ob. Emmental, ob. Freiamt, ob. Sihltal, Oberaargau S, Oberes Maggiatal, Oberes Maggiatal, Oberaargau N, Oberland (Hinwil), Obersimmental, Obertoggenburg, Orbeebene/Yverdon, Oron/Veveyse, OW, Plateau de Diesse, Prättigau, Puschlav, Rheinwald, Riviera, Riviera/Vevey, Rorschach, Saane, Saanenl./Pays d'Enhaut, Saastal, Safiental, Samedan/S-Chanf, Samnaun, Sarganserland, San Bernardion/Calanca, Schaffhausen, Schams, Schanfigg, Schwarzenburgerland, Seeland/Bielersee, See-Gaster, Sense, Sernftal, SG Rheintal, Simplon, Sion/Sierre, SO Jura, SO Ost/Zofingen, SO West/Buecheggberg, Stadt ZH, Ste-Croix/Val de Travers, Sur Tasna, Surselva (Cadi), Surselva (Foppa), Surses, Suot Tasna/Ramosch, Stein/Steckborn, SZ/Rigi, Thunersee, Tösstal/Tannzapfenland, Turtmanntal, unt. Emmental, unt. Freiamt, Untertoggenburg, UR Unterland, UR Oberland, Ursenertal, Val d'Anniviers, Val d'Entremont, Val d'Hérens, Val de Ruz, Val Müstair,  Valsertal/Lumnezia, VD Jura, Verzascatal, Visp/Brig, Walensee, Wägital,  Weinfelden/Kreuzlingen, Weinland, Werdenberg, "Wil, TG-Süd", Zugersee, Zurzibiet, <br><br>**If you can't find your region:** [Download](http://www.wetteralarm.ch) the iOS or Android App and search for your Region. Or ask me to help you! <br><br>**Type:** `string`<br>This value is **REQUIRED**|
|`changeColor`|When `changeColor` is set to true, the color of the warning icons will change based on the warning level. <br><br>**Default value:** `true`|
|`interval`|How often the warnings are updated.<br><br>**Default value:** `10 • 60 • 1000 // every 10 minutes|
|`loadingText`|The text used while loading warnings.<br><br>**Default value:** `'Warnungen werden geladen...'`|
|`noWarningText`|The text used when there are no warnings for your region.<br><br>**Default value:** `'Warnungen werden geladen...'`|



Here is an example of an entry in `config.js`
```
{
	module: 'MMM-WetteralarmCH',
	position: 'top_left',
	header: 'Wetterwarnungen',
	config: {
		region: 'Seeland/Bielersee',
		changeColor: true,
		interval: 10 * 60 * 1000, // every 10 minutes
		loadingText: 'Warnungen werden geladen...',
		noWarningText: 'Keine Warnungen'
	}
},
```

## Dependencies
- [request](https://www.npmjs.com/package/request) (installed via `npm install`)

## Important Notes
- This is my first project using Node, so feel free to submit pull requests or post on the issues/wiki and I will do my best to improve the project.
- Right now the data for warnings comes from Wetteralarm.ch. So the warnings are only available for Switzerland and Liechtensten. If you find an similar API for other countries, feel free to give me a hint or to implement this API in this module yourself.

- For the moment the module works only in German. Maybe i gonna integrate French and Italian later. 

## Special Thanks
- [Michael Teeuw](https://github.com/MichMich) for creating the awesome [MagicMirror2](https://github.com/MichMich/MagicMirror/tree/develop) project that made this module possible.
- [LukeSkywalker92](https://github.com/LukeSkywalker92) for creating the [MMM-DWD-WarnWeather](https://github.com/LukeSkywalker92/MMM-DWD-WarnWeather) module that I used as guidance in creating this module.
- [strawberry-3-141](https://forum.magicmirror.builders/user/strawberry-3-141) for giving me some nice and fast Tipps to realize my project
