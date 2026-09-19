from fastapi import FastAPI
from PortfolioChat import final_ans
from pydantic import BaseModel
app=FastAPI()

@app.get("/")
def home():
    return{"message":"AI Chatbot is running"}

class ChatRequest(BaseModel):
    question: str | None = None
    questions: str | None = None


@app.post("/chat")
def chat(request: ChatRequest):
    user_query = request.question or request.questions or ""
    result = final_ans(user_query)
    return result



    

    


