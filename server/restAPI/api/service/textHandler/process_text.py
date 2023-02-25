from spacy.lang.en import English
import scispacy
nlp = English()
doc = nlp("Two years from now, spam will be solved.")
nlp.add_pipe("scispacy_linker", config={"linker_name": "umls"})
fmt_str = "{:<8}| {:<10}| {:<10}| {:<10}"
print(fmt_str.format("token", "is_alpha", "is_punct", "like_num"))
for token in doc:
    print(fmt_str.format(token.text, token.is_alpha, token.is_punct, token.like_num))
