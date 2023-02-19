import openai
import Test

OPENAI_API_KEY = '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'
openai.api_key = OPENAI_API_KEY

model = 'text-davinci-003'
prompts = Test.response()

responses = []
for prompt in prompts:
    response = openai.Completion.create(
        prompt = prompt, 
        model = model
    )
    responses.append(response)

print(responses)
