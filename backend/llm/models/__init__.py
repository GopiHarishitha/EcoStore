from pydantic import BaseModel

class RatingQuery(BaseModel):
    product: str

class NarrativeQuery(BaseModel):
    product: str
    sustainability: float
