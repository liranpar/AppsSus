import { storageService } from "../../../services/async-storage-sevice.js";

const STORAGE_KEY = "mailsDB";

const loggedInUser = {
  email: "LidorWa@apsusmail.com",
  fullName: "Menuvaldmaniak",
};
_createMails();

export const mailService = {
  query,
  remove,
  save,
  get,
  getEmptyMail,
  getLoggedinUser,
};

function query() {
  return storageService.query(STORAGE_KEY);
}

function remove(mailId) {
  return storageService.remove(STORAGE_KEY, mailId);
}

function get(mailId) {
  return storageService.get(STORAGE_KEY, mailId);
}

function save(mail) {
  if (mail.id) return storageService.put(STORAGE_KEY, mail);
  else return storageService.post(STORAGE_KEY, mail);
}

function getLoggedinUser() {
  return loggedInUser;
}
function _setNextPrevMailId(mail) {
  return storageService.query(STORAGE_KEY).then((mails) => {
    const mailIdx = mails.findIndex((currMail) => currMail.id === mail.id);
    mail.nextMailId = mails[mailIdx + 1] ? mails[mailIdx + 1].id : mails[0].id;
    mail.prevMailId = mails[mailIdx - 1]
      ? mails[mailIdx - 1].id
      : mails[mails.length - 1].id;
    return mail;
  });
}

// Factory Method:

function getEmptyMail(subject = '', body = '', status = 'sent', sender = { email: '', name: ''}, receiver = {email: '',name: '',}) {
  return {
    id: null,
    subject,
    body,
    status,
    isRead: false,
    isTrashed: false,
    isStarred: false,
    isDraft: false,
    sentAt: Date.now(),
    sender,
    receiver,
  };
}

function _createMails() {
  let mails = storageService.loadFromStorage(STORAGE_KEY);
  if (!mails || !mails.length) {
    mails = [];
    mails.push(
      _createMail(
        "Liran was here",
        "But he is now gone, too bad!",
        "sent",
        {
          email: loggedInUser.email,
          name: loggedInUser.fullName,
        },
        {
          email: "Liranpa@apsusmail.com",
          name: 'Liran Pa',
        },
        
      )
    );
    mails.push(
      _createMail(
        "Coding academy",
        "Coding academy is the best course among all the coding acadamies courses",
        "inbox",
        {
          email:'matanc@codingac.com',
          name:'Matan krispi',
        },
        {
          email: loggedInUser.email,
          name: loggedInUser.fullName,
        },
      )
    );
    mails.push(
      _createMail(
        "Matan Lasri",
        "Matan Lasri is a nice person, but so does Lihi",
        "inbox",
        {
          email:'matanc@codingac.com',
          name:'Matan krispi',
        },
        {
          email: loggedInUser.email,
          name: loggedInUser.fullName,
        },

      )
    );
    mails.push(
      _createMail(
        "Among us",
        "10 ways to find the mole tutor in the whatsapp group",
        "sent",
        {
          email: loggedInUser.email,
          name: loggedInUser.fullName,
        },
        {
          email: "Liranpa@apsusmail.com",
          name: 'Liran Pa',
        },
      )
    );
    storageService.postMany(STORAGE_KEY, mails);
  }
  return mails;
}

function _createMail(subject, body, status, to) {
  let mail = getEmptyMail(subject, body, status, to);
  console.log(mail.sentAt);
  mail.id = storageService.makeId();
  console.log(mail.sentAt);
  return mail;
}
