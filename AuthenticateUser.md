### Add Validation to User
> user.rb

```ruby
before_save { self.email = email.downcase }
    validates :name, presence: true, length: { maximum: 50 }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
    has_secure_password
```
## User Authnentication 

```ruby
gem 'jwt'
gem 'knock'
```
>bundle install

```sh
$ rails generate knock:install 
```
now head to application controller and do the following 

```ruby
class ApplicationController < ActionController::API
  include Knock::Authenticable
end
```

now you are able to secure resources like following 

```ruby
class SecuredController < ApplicationController
  before_action :authenticate_user
  def index
    # etc...
  end
end
```
