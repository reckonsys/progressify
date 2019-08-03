var figlet = require('figlet');

figlet.text('Reckonsys-progressify', {
    font: 'Slant',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
