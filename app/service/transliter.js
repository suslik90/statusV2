export class TransliterPage {
    constructor() {
        this.dictionary = {
            'а': 'a',
            'б': 'b',
            'в': 'v',
            'г': 'g',
            'д': 'd',
            'е': 'e',
            'ж': 'g',
            'з': 'z',
            'и': 'i',
            'й': 'y',
            'к': 'k',
            'л': 'l',
            'м': 'm',
            'н': 'n',
            'о': 'o',
            'п': 'p',
            'р': 'r',
            'с': 's',
            'т': 't',
            'у': 'u',
            'ф': 'f',
            'ы': 'i',
            'э': 'e',
            'А': 'A',
            'Б': 'B',
            'В': 'V',
            'Г': 'G',
            'Д': 'D',
            'Е': 'E',
            'Ж': 'G',
            'З': 'Z',
            'И': 'I',
            'Й': 'Y',
            'К': 'K',
            'Л': 'L',
            'М': 'M',
            'Н': 'N',
            'О': 'O',
            'П': 'P',
            'Р': 'R',
            'С': 'S',
            'Т': 'T',
            'У': 'U',
            'Ф': 'F',
            'Ы': 'I',
            'Э': 'E',
            'ё': 'y',
            'х': 'h',
            'ц': 't',
            'ч': 'c',
            'ш': 's',
            'щ': 's',
            'ъ': '',
            'ь': '',
            'ю': 'y',
            'я': 'y',
            'Ё': 'Y',
            'Х': 'H',
            'Ц': 'T',
            'Ч': 'C',
            'Ш': 'S',
            'Щ': 'S',
            'Ъ': '',
            'Ь': '',
            'Ю': 'Y',
            'Я': 'Y'
        };

    }

    getNameForAvatar(name){
        let arrName = name.split(' ');
        let short = '';
        if(arrName[1] == undefined){
          let fS = arrName[0][0];
          let f = this.dictionary.hasOwnProperty(fS) ? this.dictionary[fS].toUpperCase() : fS;
          let tS = arrName[0][1];
          let t = this.dictionary.hasOwnProperty(tS) ? this.dictionary[tS].toUpperCase() : tS;
          short = f+t;
        }else{
            let fS = arrName[0][0];
            let f = this.dictionary.hasOwnProperty(fS) ? this.dictionary[fS].toUpperCase() : fS;
            let tS = arrName[1][0];
            let t = this.dictionary.hasOwnProperty(tS) ? this.dictionary[tS].toUpperCase() : tS;
            short = f+t;
        }
        return short;
    }

}
