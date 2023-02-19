from os import environ
import openai

OPENAI_API_KEY = environ.get('OPENAI_API_KEY')
openai.api_key = OPENAI_API_KEY
model = 'text-davinci-003'

def insert_model_data(prompts):
    responses = []
    for prompt in prompts:
        response = openai.Completion.create(
            prompt = "what is" + str(prompt) + "in Indian law?", 
            model = model,
            max_tokens=100
        )
        responses.append(response)
    return responses