import os
import openai


def get_gpt_recommendations(anamnesis):
    openai.api_key = "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"
    prompt = "Answer like a surgeon. Here is the patient's condition: " + anamnesis + \
             "\nList possible diseases for this condition. What additional information is worth knowing for an accurate diagnosis?" \
             "Write the answer in Russian."
    messages = [{"role": "system", "content": "You are kind medical expert"}, {"role": "user", "content": prompt}]
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    choices = ""
    for item in completion.choices:
        choices += item.message.content
    #return completion.choices[0].message.content
    return choices
