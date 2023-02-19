from os import environ
import openai

openai.api_key = environ.get('OPENAI_API_KEY')
model = 'text-davinci-003'

def insert_model_data(prompts):
    responses = []
    response = None
    for prompt in prompts:
        print(prompt)
        match prompt[1]:
            case "COURT":
                response = openai.Completion.create(
                    prompt = "where is" + str(prompt) + "in Indian and do they have any ####", 
                    model = model,
                    max_tokens=500
                )
            case "JUDGE" | "PETITIONER" | "RESPONDENT":
                response = openai.Completion.create(
                    prompt = "who is" + str(prompt) + "and what are they known for in Indian law?", 
                    model = model,
                    max_tokens=500
                )
            case "ORG":
                response = openai.Completion.create(
                    prompt = "what is" + str(prompt) + "known for in India?", 
                    model = model,
                    max_tokens=500
                )       
            case "CASE_NUMBER":
                response = openai.Completion.create(
                    prompt = "what does the case number" + str(prompt) + "represent in Indian law?", 
                    model = model,
                    max_tokens=500
                )
            case "STATUTE" | "PROVISION" | "PRECEDENT":
                response = openai.Completion.create(
                    prompt = "what is" + str(prompt) + "in Indian law?", 
                    model = model,
                    max_tokens=500
                )
        if response:
            responses.append(response)
    return responses