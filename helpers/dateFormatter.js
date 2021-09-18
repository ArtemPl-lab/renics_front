export function dateFormat(date, options, delimeter = ".", locale = "en") {
    date = new Date(date);
    function format(m) {
       let f = new Intl.DateTimeFormat(locale, m);
       return f.format(date);
    }
    return options.map(format).join(delimeter);
}