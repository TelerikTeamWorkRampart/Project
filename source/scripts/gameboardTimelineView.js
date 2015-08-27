import 'jquery';
import 'underscore';


//This is where the global navigation and overall appearence of the site is created
//All the other views need to attach their output to this layout
var gameboardTimelineView = (function(){
    var gameboardTimelineViewInternal = Object.create({});


    Object.defineProperties(gameboardTimelineViewInternal, {
        // nit: {
        //     value: function() {
        //         console.log('game view initiated!');
        //     }
        // },i
        draw: {
            //Example use of
            value: function (timeline, currentMovie) {
                var $board = $('.gameBoard');
                var $timelineField = $('<div />').addClass('timeline');
                var $currentField = $('<div />').addClass('current');
                $board.text('GAMEBOARD STARTS HERE');


                //add here button appears here
                $timelineField.append($('<img />', {src: timeline[0].posterURL})); //should loop through all timeline images
                $timelineField.append($('<br />'));
                $timelineField.append(timeline[0].year);
                //add here button appears here

                $currentField.append($('<img />', {src: currentMovie.posterURL})); //should loop through all timeline images

                $board.append($timelineField);
                $board.append($currentField);
            }
        },
        registerClickCallback: {
            value: function (callback) {
                document.addEventListener('mousedown', function(ev){
                    if (ev.target.nodeName === 'A'){
                        callback(ev.target.innerHTML);
                    }
                }, false);
            }
        },
    })


    return gameboardTimelineViewInternal;
})();

export {gameboardTimelineView};
