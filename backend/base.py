from flask import Flask, request
from convex import ConvexClient
from os import environ 
from flask_cors import CORS, cross_origin
import OpenAITranslations as OI
import preTrainedModel as NLPmodel

api = Flask(__name__)
cors = CORS(api, support_credentials=True, origin="*", resources={r'/api/*':{'origins':'http://localhost:3000'}})
CONVEX_URL = environ.get('REACT_APP_CONVEX_URL')

@api.route('/response', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True, origin="*")
def my_profile():
    if request.method == "POST":
        messages = request.json.get('input')
        inquiry_results = NLPmodel.sendEntities(messages)
        response = OI.insert_model_data(inquiry_results)
        response_body = {
            "messages": response
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