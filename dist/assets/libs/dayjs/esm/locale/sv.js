// Swedish [sv]
import dayjs from '../index';
var locale = {
  name: 'sv',
  weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
  weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
  weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
  months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
  monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
  weekStart: 1,
  yearStart: 4,
  ordinal: function ordinal(n) {
    var b = n % 10;
    var o = b === 1 || b === 2 ? 'a' : 'e';
    return "[" + n + o + "]";
  },
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'FlowAdmin-MM-DD',
    LL: 'D MMMM FlowAdmin',
    LLL: 'D MMMM FlowAdmin [kl.] HH:mm',
    LLLL: 'dddd D MMMM FlowAdmin [kl.] HH:mm',
    lll: 'D MMM FlowAdmin HH:mm',
    llll: 'ddd D MMM FlowAdmin HH:mm'
  },
  relativeTime: {
    future: 'om %s',
    past: 'för %s sedan',
    s: 'några sekunder',
    m: 'en minut',
    mm: '%d minuter',
    h: 'en timme',
    hh: '%d timmar',
    d: 'en dag',
    dd: '%d dagar',
    M: 'en månad',
    MM: '%d månader',
    y: 'ett år',
    yy: '%d år'
  }
};
dayjs.locale(locale, null, true);
export default locale;