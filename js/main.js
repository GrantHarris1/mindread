// setting varibles
var currentPage = 0;
const bigText = document.getElementById('bigText');
const resetBtn = document.getElementById('resetBtn');
let randomSymbol = [ '!', '@', '#', '%', '^', 'B','*', '?' ]



let pageState = [
    {
    bigText: 'I can read your mind',
    nextBtn: 'hidden', 
    goBtn: 'visable', 
    resetBtn:'hidden',
    p: ' ',
    list: 'hidden' 
    },
    {
        bigText:'Pick a number from 01-99',
        nextBtn:'visable',
        goBtn:'hidden',
        resetBtn:'visable',
        p:'when you have your number click next',
        list:'hidden'
    },
    {
        bigText: 'Add both digits together to get a new number', 
        nextBtn:'visable', 
        goBtn:'hidden', 
        resetBtn: 'visable',
        p:'Ex: 14 is 1 + 4 = 5'  <br> + 'click next to proceed', 
        list: 'hidden'
    },
    {
        bigText: 'Subtract your new number from the original number', 
        nextBtn:'visable', 
        goBtn:'hidden', 
        resetBtn: 'visable',
        p:'Ex: 14 - 5 = 9'  <br> + 'click next to proceed', 
        list: 'hidden'

    },
    {
        bigText: '0-&'<br> '1-@'<br>'2-$'<br>3-B, 
        nextBtn:'hidden', 
        goBtn:'hidden', 
        resetBtn: 'visable',
        p:'Find your new number.'  <br> + 'Note the symbol beside the number.', 
        list: 'hidden', 
        revealBtn: 'visible'
    }
]
    