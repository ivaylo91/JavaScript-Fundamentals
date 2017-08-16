const extrctUsernames = function (arr) {

    let users = arr.map(s => s.split('@'));
    let result = [];
    for (let user of users) {

        let [name, domain] = user;
        let domainToken = domain.split('.');
        domainToken = domainToken.map(s => s[0]);
        let username = name + "." + domainToken.join('');

        result.push(username);
    }
    return result.toString();
};

console.log(extrctUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));