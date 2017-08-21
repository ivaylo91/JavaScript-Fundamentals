const escape = function (input) {

    let result = '<ul>\n';

    for(let str of input){
        result+='<li>';

        for(let ch of str){

            if(ch === '<'){
                result+='&lt';
            } else if(ch === '>'){
                result+='&gt';
            } else if(ch === '&'){
                result+='&amp';
            } else if(ch === '"'){
                result+='&quot'
            } else{
                result+=ch;
            }
         result+='</li>\n';
        }
        result+='</ul>\n';
        return result;
    }
};
console.log(escape(['<div style=\"color:red;\">Hello Red!</div>', '<table></table><tr><td>Cell1</td><td>Cell2</td></tr>']));