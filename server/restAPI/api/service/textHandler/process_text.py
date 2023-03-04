import spacy
import scispacy
from scispacy.linking import EntityLinker

nlp = spacy.load("en_core_sci_sm")
nlp.add_pipe("scispacy_linker", config={"resolve_abbreviations": True, "linker_name": "umls", "max_entities_per_mention": 3})
doc = nlp("Patient vomitting has back pain.")
linker = nlp.get_pipe("scispacy_linker")
fmt_str = "{:<20}| {:<10}| {:<32}| {:<20}"
print(fmt_str.format("Entity", "1st CUI", "Canonical Name", "Definition"))
for entity in doc.ents:
    first_cuid = entity._.kb_ents[0][0]
    kb_entry = linker.kb.cui_to_entity[first_cuid]
    print(kb_entry.types[0])
    print(fmt_str.format(entity.text, first_cuid, kb_entry.canonical_name, kb_entry.definition))