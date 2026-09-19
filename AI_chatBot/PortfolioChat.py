import os
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq
from pydantic import BaseModel,Field
from pypdf import PdfReader
import json
load_dotenv()

my_api_key=os.getenv("GROQ_API_KEY")
if not my_api_key:
    raise ValueError("API Key is not set in environment")
client=Groq(api_key=my_api_key)
model="openai/gpt-oss-120b"

class ChatBotAssistantSchema(BaseModel):
    answer:str
 

chatBot_assist_schema=ChatBotAssistantSchema.model_json_schema()

def resume_reader(file_path):
    reader=PdfReader(file_path)
    resume_text=""
    for page in  reader.pages:
        text=page.extract_text()
        resume_text+=text
    return resume_text


def chatbot_assistant(resume_text,question):
    system_prompt=f"""
You are an expert AI chatbot Assistant for Tushar Manoor's Portfolio.
Your role is to answer questions asked by recruiters about Tushar Manoor.
Use only the information provided in the Resume.

RULES:-
1.Answer only from the information availablein the resume.
2.Do not invent,guess,assume or hallucinate any information.
3.If any information is not available in the resume, do not make up an answer.
4.keep the answer concise and accurate.
5.Give answer only according to the question asked by recruiter.
6.Answer only the Recruiter's question
7. Do not add unnecessary information.
8. Return the response strictly in valid JSON format.
9. The response must follow the given JSON schema.

JSON SCHEMA:-
{chatBot_assist_schema}
"""
    user_prompt= f"""
Analyse the following Resume.
Use this Resume as your only source to answer the questions about Tushar Manoor
Resume:-
{resume_text}

Question:
{question}

"""
    messages=[
        {
        "role":"system",
        "content":system_prompt
    },
    {
        "role":"user",
        "content":user_prompt
    }
    ]
    response=client.chat.completions.create(
         model=model,
         messages=messages,
         response_format={
             "type":"json_object"
         }
     )
    result = json.loads(response.choices[0].message.content)
    return result


def final_ans(question):
    text = resume_reader("Tusharmanoor_Resume.pdf")
    result = chatbot_assistant(text,question)
    return result

    
    