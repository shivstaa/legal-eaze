from flask import Flask
from convex import ConvexClient

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    client = ConvexClient("https://giant-cockroach-799.convex.cloud")
    messages = client.query("listMessages")
    from pprint import pprint
    pprint(messages)
    response_body = {
        "messages": messages
    }

    return response_body