import 'jquery';

var view = (function () {
    var viewInternal = Object.create({});

    Object.defineProperties(viewInternal, {
        registerClickCallback: {
            value: function (callback) {
                document.addEventListener('mousedown', function (ev) {
                    // ev.buttons === 1 detects left mouse button clicks only
                    if (ev.buttons === 1 && ev.target.nodeName === 'A') {
                        var link = $(ev.target);
                        var pageIndex = $(link).attr('data-id');
                        var activeItem = $(link).parent();

                        clearActiveItem();
                        setActiveItem(activeItem);

                        callback(pageIndex);
                    }
                }, false);
            }
        },
        showLoadingImage: {
            value: function () {
                var $container = $('.container');
                var $contentTitle = $('<h2 />').text('Loading Score Board');

                var $loadingImage = $('<img />').attr('src', '../resources/images/loading.gif');

                $container
                    .find('div.gameBoard')
                    .empty()
                    .append($contentTitle)
                    .append($loadingImage);
            }
        },
        showMessage: {
            value: function(message){
                var $container = $('.container');

                var $panelContainer = $('<div />')
                    .addClass('panel')
                    .addClass('panel-info');
                var $panelTitle = $('<div />')
                    .addClass('panel-heading')
                    .text('Message');
                var $panelBody = $('<div />').addClass('panel-body');

                $panelBody.append(message);
                $panelContainer
                    .append($panelTitle)
                    .append($panelBody);

                $container
                    .find('div.gameBoard')
                    .empty()
                    .append($panelContainer);
            }
        }
    });

    function clearActiveItem() {
        $('li.active').removeClass('active');
    }

    function setActiveItem(item) {
        $(item).addClass('active');
    }

    return viewInternal;
})();

export {view};