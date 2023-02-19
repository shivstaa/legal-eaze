import openai

OPENAI_API_KEY = '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'
openai.api_key = OPENAI_API_KEY
model = 'text-davinci-003'

def insert_model_data(prompts):
    responses = []
    for prompt in prompts:
        response = openai.Completion.create(
            prompt = "what is" + str(prompt) + "in Indian law?", 
            model = model
        )
        responses.append(response)
    return responses