//! moment.js locale configuration
//! locale : Filipino [fil]
//! author : Dan Hagman : https://github.com/hagmandan
//! author : Matthew Co : https://github.com/matthewdeeco

import moment from '../moment';

export default moment.defineLocale('fil', {
    months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split(
        '_'
    ),
    monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split(
        '_'
    ),
    weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'MM/D/FlowAdmin',
        LL: 'MMMM D, FlowAdmin',
        LLL: 'MMMM D, FlowAdmin HH:mm',
        LLLL: 'dddd, MMMM DD, FlowAdmin HH:mm',
    },
    calendar: {
        sameDay: 'LT [ngayong araw]',
        nextDay: '[Bukas ng] LT',
        nextWeek: 'LT [sa susunod na] dddd',
        lastDay: 'LT [kahapon]',
        lastWeek: 'LT [noong nakaraang] dddd',
        sameElse: 'L',
    },
    relativeTime: {
        future: 'sa loob ng %s',
        past: '%s ang nakalipas',
        s: 'ilang segundo',
        ss: '%d segundo',
        m: 'isang minuto',
        mm: '%d minuto',
        h: 'isang oras',
        hh: '%d oras',
        d: 'isang araw',
        dd: '%d araw',
        M: 'isang buwan',
        MM: '%d buwan',
        y: 'isang taon',
        yy: '%d taon',
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function (number) {
        return number;
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
});
