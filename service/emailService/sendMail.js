const mailer = require('nodemailer');
const {PASSWORD, EMAIL} = require('../../constants/mailer');

module.exports = async email => {
    const testAccount = await mailer.createTestAccount();
    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });
    const info = await transport.sendMail({
        from: EMAIL,
        to: email,
        subject: 'Test message',
        text: 'Hello world?',
        html: '<b>ok</b>'
    });
    return info.response;
};
