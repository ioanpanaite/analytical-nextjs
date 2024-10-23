import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const recipientEmail = [
  'philippejacquet@rocketmail.com',
  'info@analytic-coaching.com'
]

export default async function handler(req, res) {

  if (req.method !== "POST") {
    res.status(405).send('Not correct request type')
  }

  try {
    const data = req.body;

    const email_key = process.env.EMAIL_API_KEY
    const contact_template_id = process.env.EMAIL_TEMPLATE_ID
    const message = data.message ? data.message : ''
    const sent_date = (new Date()).toLocaleDateString()

    const mailerSend = new MailerSend({
      apiKey: email_key,
    });

    const sentFrom = new Sender("noreply@analytic-coaching.com");

    if (data.email_type === "findout") {
      const findout_template_id = process.env.EMAIL_FIND_OUT

      const recipients = [new Recipient(recipientEmail[0], "Philippe Jacquet"), new Recipient(recipientEmail[1], "Philippe Jacquet")];
      const personalization = [
        {
          email: recipientEmail[0],
          data: {
            client: [
              {
                email: data.email,
                telephone: data.telephone
              }
            ],
            username: data.name,
            sent_date: sent_date,
            collections: [
              {
                location: data.location,
                call_type: data.call_type,
                service_type: data.service_type,
                business_type: data.business_type
              }
            ],
            information: data.information
          },
        },
        {
          email: recipientEmail[1],
          data: {
            client: [
              {
                email: data.email,
                telephone: data.telephone
              }
            ],
            username: data.name,
            sent_date: sent_date,
            collections: [
              {
                location: data.location,
                call_type: data.call_type,
                service_type: data.service_type,
                business_type: data.business_type
              }
            ],
            information: data.information
          },
        }
      ];

      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setSubject("Analytic Coaching Find out More")
        .setTemplateId(findout_template_id)
        .setPersonalization(personalization);

      const result = await mailerSend.email.send(emailParams);

      if (result.statusCode === 200 || result.statusCode === 202) {
        res.status(200).json({ success: true, message: "Email sent." })
      } else {
        res.status(200).json({ success: false, message: "Email api is not working." })
      }
    } else {

      const recipients = [new Recipient(recipientEmail[0], "Philippe Jacquet"), new Recipient(recipientEmail[1], "Philippe Jacquet")];
      const personalization = [
        {
          email: recipientEmail[0],
          data: {
            email: data.email,
            message: message,
            sentdate: sent_date,
            username: data.name,
            telephone: data.telephone
          },
        },
        {
          email: recipientEmail[1],
          data: {
            email: data.email,
            message: message,
            sentdate: sent_date,
            username: data.name,
            telephone: data.telephone
          },
        }
      ];

      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setSubject("Analytic Coaching Enquiry")
        .setTemplateId(contact_template_id)
        .setPersonalization(personalization);

      const result = await mailerSend.email.send(emailParams);
      
      if (result.statusCode === 200 || result.statusCode === 202) {
        res.status(200).json({ success: true, message: "Email sent." })
      } else {
        res.status(200).json({ success: false, message: "Email api is not working." })
      }
    }

  } catch (error) {
    console.log(error)
    res.status(422).json({ success: false, message: "Email service failed." });
  }

  res.end()
}