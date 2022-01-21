import {defaultLanguage} from '../config/basic';
import {languages} from './accepted';

const selector = (path) => {
    let full; //Full path regex
    let start; //Start of path regex
    for (const iso in languages) {
        full = new RegExp('^[\\/]{1}['+languages[iso]+']{2}[\\/]{1,}', 'gm');
        start = new RegExp('^[\/]{1}['+languages[iso]+']{2}$', 'gm');
        if(path.match(full) || path.match(start)){
            return languages[iso];
        }
    }
    return defaultLanguage;
}

export default selector;