from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from llm.models import RatingQuery, NarrativeQuery
from llm.health_rating.healthbot import rating_chain
from llm.narrator.narrator import narrative_chain

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])

@app.post("/")
async def health_rating(productQuery: RatingQuery):
    response = {"response": rating_chain.invoke(productQuery), "product": productQuery.product}
    return JSONResponse(content=response)

@app.post("/narrative")
async def narrative(narrativeQuery: NarrativeQuery):
    health = rating_chain.invoke({"product": narrativeQuery.product})
    response = narrative_chain.invoke({"product": narrativeQuery.product, "sustainability": narrativeQuery.sustainability, "rating": health})
    return JSONResponse(content=response)
