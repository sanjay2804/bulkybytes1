from flask import Flask
from flask_login import LoginManager
from dotenv import load_dotenv
from controllers import users


load_dotenv()
app = Flask(__name__)
app.config.from_envvar()

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    # return User.get()
    return None




if __name__ == "__main__":
    app.run()