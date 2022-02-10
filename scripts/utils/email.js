const nodemailer = require("nodemailer");
const path = require("path");

async function main({ subject, text, html }) {
  const env = require("./env");

  const auth = {
    user: env.EMAIL_USER, // generated ethereal user
    pass: env.EMAIL_PASS, // generated ethereal password
  };

  const transporter = nodemailer.createTransport({
    host: "smtp." + auth.user.match(/@(.*)/)[1],
    secure: true,
    auth
  });

  const template = `
    <section>
      <header style="padding: 10px 0; border-bottom: 1px solid #f1f1f1;">
        <img src="cid:logo.svg" width="120" height="24" alt="稀土掘金" />
      </header>
      <main style="padding: 10px;">
        ${html ? html : `<pre style="margin: 0;">${text}</pre>`}
      </main>
      <footer style="padding: 10px 0; border-top: 1px solid #f1f1f1; text-align: center; font-size: 12px; color: #6e6e73;">
        <span>稀土掘金助手</span> |
        <span>Copyright © 2022 iCat 爱吃肉的猫</span>
      </footer>
    </section>
  `.trim();

  await transporter.sendMail({
    from: `稀土掘金助手 <${auth.user}>`, // sender address（'"Fred Foo 👻" <foo@example.com>'）
    to: env.EMAIL_TO, // list of receivers
    subject, // Subject line
    // text, // plain text body
    html: template, // html body
    attachments: [{
      filename: "https://cdn.jsdelivr.net/gh/yife68/iCat-Pic@v3.0.0/2022/02.10/2.svg",
      path: path.resolve(__dirname, "https://cdn.jsdelivr.net/gh/yife68/iCat-Pic@v3.0.0/2022/02.10/2.svg"),
      cid: 'https://cdn.jsdelivr.net/gh/yife68/iCat-Pic@v3.0.0/2022/02.10/2.svg' //same cid value as in the html img src
    }]
  });

  console.log("已通知订阅人！");
}

module.exports = main;

// main().catch(console.error);
