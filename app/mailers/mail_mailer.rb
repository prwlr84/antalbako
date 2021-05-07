class MailMailer < ApplicationMailer
  default from: 'antal.bako@gmail.com',
          bcc: 'antal.bako@gmail.com',
          subject: 'Thanks for Your message!',
          content_type: 'text/html',
          template_path: 'pages',
          template_name: 'mail'

  def make(par)
    params = par
    @body = params[:message]
    mail(
      to: params[:email]
    )
  end
end
