from owlready2 import *
import simple_icd_10 as icd


class UMLSService:
    PYM = None

    def init(self):
        pre = os.path.dirname(os.path.realpath(__file__))
        pym_data = './pym.sqlite3'
        path = os.path.join(pre, pym_data)
        default_world.set_backend(filename=path)
        self.PYM = get_ontology("http://PYM/").load()

    @staticmethod
    def get_icd_info(self, concept):
        if self.PYM is None:
            self.init(self)
        CUI = self.PYM["CUI"]
        ICD10 = self.PYM["ICD10"]
        concept = concept.lower().strip()
        cui = CUI.search(concept)[0]
        translate = cui >> ICD10
        icd_code = list(translate)[0].name
        ancestors = icd.get_ancestors(icd_code)
        chapter = ancestors[len(ancestors) - 1]
        block = ancestors[len(ancestors) - 2]
        chapter_descr = icd.get_description(chapter)
        block_descr = icd.get_description(block)
        return list([icd_code, chapter, block, chapter_descr, block_descr])
