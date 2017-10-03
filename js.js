let menu = [{text: "google", href: "http://google.com"},
            {text: "ebay", href: "http://ebay.com"},
            {text: "ya", href: "http://ya.ru"},
];

let config = {
    hrefClass: 'someClassForHref', //класс, который добавляется в каждую ссылку
    currentClass: 'currentHref', //класс, который добавляется в текущую ссылку
    currentHref: 'http://ya.ru', //или
//    currentHref: 2,  //второй элемент
}

$.fn.extend({
  menuBuilder: menuBuilder
});

function menuBuilder(menuArray, config) {
    let list = $('<ul>');

    menuArray.forEach(function(obj) {
        let hrefEl = $('<span>' + obj.href +'</span>')

        let li_Build = [
            '<li>', obj.text, ': ', '<span class="' + config.hrefClass + '">', obj.href, '</span>',  '</li>'
        ].join(" ");

        let li = $(li_Build);

        if (obj.href === config.currentHref) {
           li.find('.' + config.hrefClass).addClass(config.currentClass);
        }

        list.append(li);
    });

    this.append(list);
    return list;
}

$('body').menuBuilder(menu, config).addClass('completed');


