from flask import Flask, request
# from convex import ConvexClient
from convex import ConvexClient
from os import environ 
from flask_cors import CORS, cross_origin

api = Flask(__name__)
cors = CORS(api, support_credentials=True, origin="*", resources={r'/api/*':{'origins':'http://localhost:3000'}})
CONVEX_URL = environ.get('REACT_APP_CONVEX_URL')

@api.route('/response', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True, origin="*")
def my_profile():
    if request.method == "POST":
        response_body = {
            "messages": request.json.get('input')
        }
        return response_body

    # client = ConvexClient(CONVEX_URL)
    # messages = client.query("listMessages")
    # response_body = {
    #     "messages": messages[0]
    # }
    # client.mutation("sendMessage")

    return response_body

if __name__ == '__main__':
    api.run(debug=True)