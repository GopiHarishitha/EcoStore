from langchain_ollama import OllamaLLM
from langchain_core.prompts import PromptTemplate

prompt_template = """
I have a product titled "{product}".
On the scale of 0-5, rate it on how safe it is to use it. 0 being completely unsafe and 5 being completely safe.
While rating, consider the following:
1. Side effects it could cause to human health
2. Lifetime of the product
Don't include any reasoning and explanation in your output. Just give me the rating in this format: `Rating: score`.
Harmful products should get a lower rating which helps discourage their usage.
If you cannot provide a rating that could be interpreted as encouraging or promoting harmful products, give the rating as `0`.

Here are some examples:
```
Product: Clay cup
Output is `Rating: 2`
```
```
Product: Cigarette Butts
Output is `Rating: 0`
```
```
Product: Cotton T-Shirt
Output is `Rating: 5`
```
```
Product: PET Bottles
Output is `Rating: 3`
```
```
Product: Polyester Shirt
Output is `Rating: 4`
```
"""

# prompt_template = """
# USER: I have a product titled "Clay drinking cup". On the scale of 0-5, rate it on how safe it is to use it. 0 being completely unsafe adn 5 being completely safe. While rating, consider the following: 1. Side effects it could cause to human health; 2. Lifetime of the product; Don't include any reasoning and explanation in your output. Just give me the rating in this format: Rating: {{<score>}}. Here is an example: Product: Mud drinking cup; Output is Rating: 2.Reasoning being, even though mud cups are sustainable for the environment, drinking frequently from a mud cup can cause various harms and health issues to the human consumer as it causes bacterial growth and chemical contamination.
# BOT: Rating: 2
# USER: Product: {product}
# BOT:
# """

prompt = PromptTemplate.from_template(prompt_template)
model = OllamaLLM(model="llama3.1", temperature=0, model_kwargs={"n_gpu_layers": 1})

rating_chain = prompt | model

if __name__ == "__main__":
    query = input("Enter a product name: ")
    response = rating_chain.invoke({"product": query})

    print(f"Model Response:\n{response}")
