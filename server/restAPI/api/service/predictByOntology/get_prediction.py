from owlready2 import *
import os


def read_data():
    pre = os.path.dirname(os.path.realpath(__file__))
    fname = './diseases.owl'
    path = os.path.join(pre, fname)
    onto = get_ontology(path).load()


def get_prediction(sympotms):
    read_data()
    sympotms_str = ""
    for symptom in sympotms:
        sympotms_str += f"?d dis:has_symptom/dis:full_name \"{symptom}\" .\n"
    dis_prefix = "PREFIX dis: <http://www.semanticweb.org/dorsa/ontologies/diseases.owl#>\n"
    rdf_prefix = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"
    query_type = "SELECT DISTINCT ?d_name\n"
    where_type = "WHERE {?d rdf:type dis:disease .\n?d dis:full_name ?d_name .\n%s}" % sympotms_str
    sparql_query = dis_prefix + rdf_prefix + query_type + where_type
    predictions = list(default_world.sparql(sparql_query))[0]
    return predictions
