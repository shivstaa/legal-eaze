from flask import Flask
# from convex import ConvexClient
from convex import ConvexClient
from os import environ 

api = Flask(__name__)
CONVEX_URL = environ.get('REACT_APP_CONVEX_URL')
print(CONVEX_URL)

@api.route('/')
def my_profile():
    client = ConvexClient(CONVEX_URL)
    messages = client.query("listMessages")
    response_body = {
        "messages": messages[0]
    }
    # client.mutation("sendMessage")

    return response_body