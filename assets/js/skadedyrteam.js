$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$(function () {
    $('[data-toggle="popover"]').popover()
});
$(function () {
    var placesAutocomplete = places({
        container: document.querySelector('.address-input'),
        type: 'address',
        language: 'NO',
        countries: ['NO']
    });
});
(function () {
    "use strict";
    var startDate = new Date();
    startDate.setDate(startDate.getDate() + 1);
    $.fn.datepicker.languages['nb-NO'] = {
        format: 'dd.mm.yyyy',
        days: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
        daysShort: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lørdag'],
        daysMin: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
        months: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
        monthsShort: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'],
        weekStart: 1
    };
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        language: 'nb-NO',
        startDate: startDate,
    });
})();

