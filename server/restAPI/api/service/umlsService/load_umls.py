import os
from owlready2.pymedtermino2.umls import *

pre = os.path.dirname(os.path.realpath(__file__))
umls_data = './umls-2022AB-metathesaurus-full.zip'
path = os.path.join(pre, umls_data)
default_world.set_backend(filename="pym.sqlite3")
import_umls(path, terminologies=["ICD10", "CUI"])
default_world.save()
