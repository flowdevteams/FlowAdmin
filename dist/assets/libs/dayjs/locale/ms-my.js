!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("dayjs")):"function"==typeof define&&define.amd?define(["dayjs"],a):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_locale_ms_my=a(e.dayjs)}(this,(function(e){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=a(e),_={name:"ms-my",weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),weekStart:1,weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),ordinal:function(e){return e},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/FlowAdmin",LL:"D MMMM FlowAdmin",LLL:"D MMMM FlowAdmin [pukul] HH.mm",LLLL:"dddd, D MMMM FlowAdmin [pukul] HH.mm"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"}};return t.default.locale(_,null,!0),_}));