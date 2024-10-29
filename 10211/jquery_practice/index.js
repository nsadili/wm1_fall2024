// document.getElementsByTagName('h2')[0].innerHTML = "Salam";

$('h2').text("Salam");

$('#red').css('background-color', 'red');
document.getElementById('blue').style.backgroundColor = 'blue';
$('#green').css('background-color', 'green');

// for (let btn of document.getElementsByClassName('btn')) {
//     btn.addEventListener('click', handleChangeColor);
//     btn.click = funcName;
// }

// $('.btn').click(handleChangeColor);
$('.btn').on('click', handleChangeColor);

let isShown = true;
$('.ctrl').on('click', (event) => {
    switch (event.target.id) {
        case 'delete':
            $('h2').remove();
            break;
        case 'hide':
            // $('h2').toggle();
            // $(event.target).text('Show');
            console.log(isShown);
            if (isShown) {
                $('h2').hide();
                $(event.target).text('SHOW');
                // isShown = false;
            } else {
                $('h2').show();
                $(event.target).text('HIDE');
                // isShown = true;
            }
            isShown = !isShown;
            break;
    }
});



function handleChangeColor(event) {
    let selectedBtnId = event.target.id;

    // $('h2').css('color', selectedBtnId);
    $('h2').addClass(`${selectedBtnId}-text`);

    setTimeout(() => {
        $('h2').removeClass(`${selectedBtnId}-text`);
    }, 3000);
}


$('#copyIt').click(() => {
    let copyText = $('#copyMe').val();

    let newEl = $('<p>');
    $(newEl).text(copyText);

    // $(newEl).text();

})