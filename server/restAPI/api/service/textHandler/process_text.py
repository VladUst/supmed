import spacy
import scispacy
from scispacy.linking import EntityLinker
from scispacy.abbreviation import AbbreviationDetector
from .tui_labels import tui_labels


def process_text(text):
    nlp = spacy.load("en_core_sci_sm")
    nlp.add_pipe("abbreviation_detector")
    nlp.add_pipe("scispacy_linker",
                 config={"resolve_abbreviations": True, "linker_name": "umls", "max_entities_per_mention": 3})
    doc = nlp(text)
    linker = nlp.get_pipe("scispacy_linker")
    entities_list = []
    for entity in doc.ents:
        first_cuid = entity._.kb_ents[0][0]
        kb_entry = linker.kb.cui_to_entity[first_cuid]
        first_tuid = kb_entry.types[0]
        entity_obj = {
            "name": entity.text,
            "TUI": first_tuid + ' - ' + tui_labels[first_tuid],
            "info": {
                "CUI": first_cuid,
                "originalName": kb_entry.canonical_name,
                "definition": kb_entry.definition
            }
        }
        entities_list.append(entity_obj)
    return entities_list
