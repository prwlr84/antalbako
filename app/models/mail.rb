class Mail < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: /\A[^@\s]+@[^@\s]+\z/i
  attribute :subject

  attribute :message

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      subject: "Thanks for contacting me!",
      to: "#{email}",
      bcc: "antal.bako@gmail.com",
      from: "antal.bako@gmail.com"
    }
  end
end
