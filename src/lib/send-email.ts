import nodemailer from 'nodemailer'

type SendEmailParams = {
  email: string
  subject: string
  body: string
}

export async function sendEmail({ email, subject, body }: SendEmailParams) {
  const account = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  })

  const info = await transporter.sendMail({
    from: 'Sender Name <sender@example.com>',
    to: email,
    subject,
    html: body,
  })

  console.log('Message sent:', info.messageId)
  console.log('Preview URL:', nodemailer.getTestMessageUrl(info))
}
