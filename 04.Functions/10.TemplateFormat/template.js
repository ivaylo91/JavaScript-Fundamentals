/**
 * @author Ivaylo Penev
 *
 */

const template = function (input) {

    let xml = '<?xml version="1.0" encoding="UTF-8?>\n';

    xml += '<quiz>\n';

    for (let i = 0; i < input.length; i += 2) {

        let question = input[i];

        let answer = input[i + 1];

        xml += '<question>\n';
        xml += ' ' + question + '\n';
        xml += '</question>\n';

        xml += '<answer>\n';
        xml += ' ' + answer + '\n';
        xml += '</answer>\n';
    }

    xml += '</quiz>';

    return xml;
};
console.log(template(['What now?', 'I have no idea.', 'So how are you?', 'I am doing fine']));
console.log(template(["Dry ice is a frozen form of which gas?", "Carbon Dioxide&quot", "What is the brightest star in the night sky?", "Sirius"]));