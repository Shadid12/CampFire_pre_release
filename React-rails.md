# Rails React Application 
Lets get the show on the road. Creating the rails backend 

```sh
$ rails new koolStuff --api --no sprockets -d postgresql
```
Creating the User model

```sh
$ rails g model User name:string email:string
$ rails db:migrate
```
Now lets Generate the controller for this api
```sh
rails g controller v1/users
```
inside our user controller we will do the following
> controllers/v1/users_controller.rb
```ruby
def index
	@users = User.all
	render json: @users, status: :ok
end
```
now let's change the routes
> config/routes.rb
```ruby
namespace :v1 do 
	resources :contacts
end 
```
Doing the crud in the controller

```ruby
def create 
	@user = User.new(user_params)
	@user.save
	render json: @user, status: :created
end

def destroy
	@user = User.where(id: params[:id]).first
	if @user.destroy
		head(:ok)
	else
		head(:unprocessable_entity)
	end
end

private

def user_params
	params.require(:user).permit(:name, :email)
end
```
### Setting up the CORS
install the CORS gem

```ruby
gem 'rack-cors', :require => 'rack/cors'
```
```sh 
$ bundle install 
```
Now let's set up the config file
> config/application.rb

```ruby
module YourApp
  class Application < Rails::Application
    # .... 
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource ('*', 
            headers: :any, 
            :methods: [:get, :post, :put, :destroy :options]
            )
      end
    end
end
```

The database.yml file should look like this 
> database.yml 
```yml
development:
  adapter: postgresql
  encoding: unicode
  database: wpgdfdne
  username: wpgdfdne
  password: Ra9E4-41dR581erkWTVEu47MtfSIdHER
  host: stampy.db.elephantsql.com
  port: 5432
```

Let's test the progreess with some front end JS Code
### POST with Ajax

```javascript
$(document).ready(function() {
  
  var url = "https://rails-api-shadid121.c9users.io/v1/users"
  var d = {
    'user':{
      'name':'shadid',
      'email': 'shadid@gmail.com'
    }
  }
  
  $.ajax({
    type: "POST",
    url: url,
    data: d,
    success: function(res){
      console.log(res);
    }
    
  });
  
});
```