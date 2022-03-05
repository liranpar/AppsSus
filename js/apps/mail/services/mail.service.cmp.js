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

function getEmptyMail(
  subject = "",
  body = "",
  status = "sent",
  sender = { email: "", name: "" },
  receiver = ""
) {
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

function _createMail(subject, body, status, sender, receiver) {
  let mail = getEmptyMail(subject, body, status, sender, receiver);
  console.log(mail.sentAt);
  mail.id = storageService.makeId();
  console.log(mail.sentAt);
  return mail;
}

// hardcoded emails:

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
        "Liranpa@apsusmail.com"
      )
    );
    mails.push(
      _createMail(
        "Coding academy",
        "Coding academy is the best course among all the coding acadamies courses",
        "inbox",
        {
          email: "matanc@codingac.com",
          name: "Matan krispi",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "Hey, i just met you",
        "And this is crazy! so here is my number, and call me maybe!",
        "inbox",
        {
          email: "angelina@gmail.com",
          name: "Angelina Julie",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "Need your help!",
        `Hello dear friend, i am prince zulurando from Nigeria. the govrmnt ez cumming after me,
        i need you to send me your credit card number so i can escape the country, you bring me to your country,
        and i will give you 1million dollar in used plastic from my plastic mines`,
        "inbox",
        {
          email: "zulurando@nigerianprince.com",
          name: "zulurando shaka",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "looking for job?",
        `Misterbit is looking for a new janitor in their offices in Ramat-Gan!
        we are looking for a talented person who is speaking 15 languages (JS not included),
        has 47.5 years of experience in janitoring toilets, and a lovely smile!
        contact us for more information at:
        yaronbitton@misterbit.com`,
        "inbox",
        {
          email: "noreply@codingacademy.com",
          name: "coding academy",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "P.S",
        `you are a little shit. just wanted you to know. mmmmbabye`,
        "inbox",
        {
          email: "biggershit@shittingbadashitter.com",
          name: "Gandi",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "P.S",
        `you are a little shit. just wanted you to know. mmmmbabye`,
        "inbox",
        {
          email: "biggershit@shittingbadashitter.com",
          name: "Gandi",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "P.S",
        `you are a little shit. just wanted you to know. mmmmbabye`,
        "inbox",
        {
          email: "biggershit@shittingbadashitter.com",
          name: "Gandi",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "P.S",
        `you are a little shit. just wanted you to know. mmmmbabye`,
        "inbox",
        {
          email: "biggershit@shittingbadashitter.com",
          name: "Gandi",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "P.S",
        `you are a little shit. just wanted you to know. mmmmbabye`,
        "inbox",
        {
          email: "biggershit@shittingbadashitter.com",
          name: "Gandi",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "P.S",
        `you are a little shit. just wanted you to know. mmmmbabye`,
        "inbox",
        {
          email: "biggershit@shittingbadashitter.com",
          name: "Gandi",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "P.S",
        `you are a little shit. just wanted you to know. mmmmbabye`,
        "inbox",
        {
          email: "biggershit@shittingbadashitter.com",
          name: "Gandi",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "Matan Lasri",
        "Matan Lasri is a nice person, but so does Lihi",
        "inbox",
        {
          email: "matanc@codingac.com",
          name: "Matan krispi",
        },
        loggedInUser.email
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
        "Liranpa@apsusmail.com"
      )
    );
    mails.push(
      _createMail(
        "The history",
        "150 ways to impress your snail, complete with pictures and audio",
        "inbox",
        {
          email: "weloveoursnails@snailophilia.com",
          name: "your snail",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "are you a robot?",
        "0111001101010111001111010110",
        "inbox",
        {
          email: "notarobot@probablyrobot.com",
          name: "hu mann",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "are you a robot? but in hex",
        "#1234af #821bc, #aaaaa",
        "inbox",
        {
          email: "notarobot@probablyrobotbutinhex.com",
          name: "you mann",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "would you like to have some fun? 😋",
        `i em a lonely girl, who loves to allah hu akbar with yahud, here is a link to my pictures:
        www.myhugevirus.com/trojan/hackyourmail`,
        "inbox",
        {
          email: "azadinalkasam@hamas.com",
          name: "butifol girl",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "where the hell are you?!",
        `i told you i am waiting for you! where the fuck are you, whereeeeee!
        and why the hell am i sending email, there is a fucking whatsapp!`,
        "inbox",
        {
          email: "azadinalkasam@hamas.com",
          name: "Hello",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "Dear lidor",
        `It was nice hearing how you won the origamy contest creating a balloon of Putin.
        was very funny that you told me how you inflated the balloon 🤣
        i will talk to you again when i have access to internet
        truely yours:`,
        "inbox",
        {
          email: "assaflotz@walla.com",
          name: "assaf lotz",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "Tzomet Sfarim",
        `the book you ordered 'nailing that fucking javascript with eaze!' is ready in our store.
        thank you for buying!`,
        "inbox",
        {
          email: "tzometsfarim@tzometsfarim.com",
          name: "tzomet sfarim",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "Tzomet Sfarim",
        `the book you ordered 'nailing that fucking javascript with eaze!' is ready in our store.
        thank you for buying!`,
        "inbox",
        {
          email: "tzometsfarim@tzometsfarim.com",
          name: "tzomet sfarim",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "Tzomet Sfarim",
        `the book you ordered 'nailing that fucking javascript with eaze!' is ready in our store.
        thank you for buying!`,
        "inbox",
        {
          email: "tzometsfarim@tzometsfarim.com",
          name: "tzomet sfarim",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "Tzomet Sfarim",
        `the book you ordered 'nailing that fucking javascript with eaze!' is ready in our store.
        thank you for buying!`,
        "inbox",
        {
          email: "tzometsfarim@tzometsfarim.com",
          name: "tzomet sfarim",
        },
        loggedInUser.email
      )
    );
    mails.push(
      _createMail(
        "Tzomet Sfarim",
        `the book you ordered 'nailing that fucking javascript with eaze!' is ready in our store.
        thank you for buying!`,
        "inbox",
        {
          email: "tzometsfarim@tzometsfarim.com",
          name: "tzomet sfarim",
        },
        loggedInUser.email
      )
    );
    storageService.postMany(STORAGE_KEY, mails);
  }
  return mails;
}
