class MailMailer < ApplicationMailer
  default from: 'antal.bako@gmail.com',
          bcc: 'antal.bako@gmail.com',
          subject: 'Thanks for Your message!',
          content_type: 'text/html'
end
