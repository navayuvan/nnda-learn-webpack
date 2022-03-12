import templateFn from './modal.ejs';

$(function(){
    $('#nnda-btn0').click(function(){
        $("#nnda-div0").html(templateFn.bind(this, {
            fname: 'nava',
            mname: '<b>yuvan</b>',
            lname: 'viswa',
            isTrue: () => false
        }));
    })
});