import numpy as np
import pickle
import os
from read_data import read_data


def get_prediction(symptoms):
    df_diseases_symptoms = read_data()
    pre = os.path.dirname(os.path.realpath(__file__))
    saved_model = 'prediction_model.sav'
    path = os.path.join(pre, saved_model)
    model = pickle.load(open(path, 'rb'))
    all_symptoms = df_diseases_symptoms.columns[1:].values
    test_input = [0]*404
    user_symptoms = list(symptoms.split(','))
    for symptom in user_symptoms:
        test_input[np.where(all_symptoms == symptom)[0][0]] = 1
    prediction = model.predict([test_input])
    return prediction


print(get_prediction('feeling suicidal,feeling hopeless,weepiness,sleeplessness'))
