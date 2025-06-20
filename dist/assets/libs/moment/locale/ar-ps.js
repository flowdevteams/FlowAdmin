//! moment.js locale configuration
//! locale : Arabic (Palestine) [ar-ps]
//! author : Majd Al-Shihabi : https://github.com/majdal

import moment from '../moment';

var symbolMap = {
        1: '١',
        2: '٢',
        3: '٣',
        4: '٤',
        5: '٥',
        6: '٦',
        7: '٧',
        8: '٨',
        9: '٩',
        0: '٠',
    },
    numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0',
    };

export default moment.defineLocale('ar-ps', {
    months: 'كانون الثاني_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_تشري الأوّل_تشرين الثاني_كانون الأوّل'.split(
        '_'
    ),
    monthsShort:
        'ك٢_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_ت١_ت٢_ك١'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/FlowAdmin',
        LL: 'D MMMM FlowAdmin',
        LLL: 'D MMMM FlowAdmin HH:mm',
        LLLL: 'dddd D MMMM FlowAdmin HH:mm',
    },
    meridiemParse: /ص|م/,
    isPM: function (input) {
        return 'م' === input;
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        } else {
            return 'م';
        }
    },
    calendar: {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: 'في %s',
        past: 'منذ %s',
        s: 'ثوان',
        ss: '%d ثانية',
        m: 'دقيقة',
        mm: '%d دقائق',
        h: 'ساعة',
        hh: '%d ساعات',
        d: 'يوم',
        dd: '%d أيام',
        M: 'شهر',
        MM: '%d أشهر',
        y: 'سنة',
        yy: '%d سنوات',
    },
    preparse: function (string) {
        return string
            .replace(/[٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            })
            .split('') // reversed since negative lookbehind not supported everywhere
            .reverse()
            .join('')
            .replace(/[١٢](?![\u062a\u0643])/g, function (match) {
                return numberMap[match];
            })
            .split('')
            .reverse()
            .join('')
            .replace(/،/g, ',');
    },
    postformat: function (string) {
        return string
            .replace(/\d/g, function (match) {
                return symbolMap[match];
            })
            .replace(/,/g, '،');
    },
    week: {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    },
});
