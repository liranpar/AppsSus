import { utilService } from '../../../services/util-service.js';
import { storageService } from "../../../services/async-storage-sevice.js";

const STORAGE_KEY = 'mailsDB';
_createMails();

export const mailService = {
    query,
    remove,
    save,
    get,
    // getEmptyMail,
};

function query() {
    return storageService.query(STORAGE_KEY);
}

function remove(mailId) {
    return storageService.remove(STORAGE_KEY, mailId);
}

function get(mailId) {
    return storageService.get(STORAGE_KEY, mailId)
    .then(mail => {
        return _setNextPrevCarId(mail)
    })
}

function save(mail) {
    if (mail.id) return storageService.put(STORAGE_KEY, mail);
    else return storageService.post(STORAGE_KEY, mail);
}

function _setNextPrevMailId(mail) {
    return storageService.query(STORAGE_KEY).then(mails => {
        const mailIdx = mails.findIndex(currMail => currMail.id === mail.id)
        mail.nextMailId = (mails[mailIdx+1])? mails[mailIdx+1].id : mails[0].id
        mail.prevMailId = (mails[mailIdx-1])? mails[mailIdx-1].id : mails[mails.length-1].id
        return mail
    })
}

// Factory Method:
// function getEmptyCar(vendor = '', maxSpeed = 0) {
//     return {
//         id: '',
//         vendor,
//         maxSpeed,
//         prevOwners: []
//     };
// }

// function _createCars() {
//     let cars = utilService.loadFromStorage(STORAGE_KEY);
//     if (!cars || !cars.length) {
//         cars = [];
//         cars.push(_createCar('audu', 300));
//         cars.push(_createCar('fiak', 120));
//         cars.push(_createCar('subali', 100));
//         cars.push(_createCar('mitsi', 150));
//         utilService.saveToStorage(STORAGE_KEY, cars);
//     }
//     return cars;
// }

// function _createCar(vendor, maxSpeed = 250) {
//     const car = getEmptyCar(vendor, maxSpeed)
//     car.id = utilService.makeId()
//     return car;
// }



