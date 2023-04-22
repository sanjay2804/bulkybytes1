# Create a new user
import psycopg2
class User:
    def __init__(self):
        self.is_authenticated = False
        self.is_active = False
        self.is_anonymous = False

    def create_user(username, password, ):
        pass

    # return user from credentials (password-hash / email)
    def get_user(username, password):
        # hash password (salt + password)
        # check if this is equal to the value of the username
        pass

    def get_id(self):
        id = 1
        return string(id)

    # change a users username
    def update_username(old_username, new_username):
        pass
        # Create a new user

    def delete_user(username: str):
        pass
