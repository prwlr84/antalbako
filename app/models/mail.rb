class Mail < MailForm::Base

  def headers
    { to: "#{email}" }
  end
end
