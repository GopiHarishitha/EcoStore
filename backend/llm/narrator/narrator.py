from langchain_ollama import OllamaLLM
from langchain_core.prompts import PromptTemplate

prompt_template = """
I have a product titled "{product}". I want you to write a narrative about the product.
It should tell about what the product is, about it's environmental sustainability. It's sustainability score is {sustainability}
Then talk about how the product affects the health of the consumer based on the health rating. {rating}.
Restrict the content to only 3 to 4 lines. Keep it simple and clean.
Your output should only contain the narrative content. Don't include any leading text.
"""

# prompt_template = """
# USER: I have a product titled "Clay drinking cup". On the scale of 0-5, rate it on how safe it is to use it. 0 being completely unsafe adn 5 being completely safe. While rating, consider the following: 1. Side effects it could cause to human health; 2. Lifetime of the product; Don't include any reasoning and explanation in your output. Just give me the rating in this format: Rating: {{<score>}}. Here is an example: Product: Mud drinking cup; Output is Rating: 2.Reasoning being, even though mud cups are sustainable for the environment, drinking frequently from a mud cup can cause various harms and health issues to the human consumer as it causes bacterial growth and chemical contamination.
# BOT: Rating: 2
# USER: Product: {product}
# BOT:
# """

prompt = PromptTemplate.from_template(prompt_template)
model = OllamaLLM(model="llama3.1", temperature=0.7, model_kwargs={"n_gpu_layers": 1})

narrative_chain = prompt | model
