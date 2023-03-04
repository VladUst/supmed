import numpy as np
import pickle
import os
import pandas as pd
def read_data():
    pre = os.path.dirname(os.path.realpath(__file__))
    fname = './disease_symptoms.xlsx'
    path = os.path.join(pre, fname)
    data = pd.read_excel(path)
    symptoms_to_indicators = pd.get_dummies(data.Symptom)
    diseases_list = data['Disease']
    df_diseases_symptoms = pd.concat(
        [diseases_list, symptoms_to_indicators], axis=1)
    df_diseases_symptoms.drop_duplicates(keep='first', inplace=True)
    df_diseases_symptoms = df_diseases_symptoms.groupby(
        'Disease', sort=False).sum()
    df_diseases_symptoms = df_diseases_symptoms.reset_index()
    return df_diseases_symptoms
def get_prediction(symptoms):
    df_diseases_symptoms = read_data()
    pre = os.path.dirname(os.path.realpath(__file__))
    saved_model = 'prediction_model.sav'
    path = os.path.join(pre, saved_model)
    model = pickle.load(open(path, 'rb'))
    all_symptoms = df_diseases_symptoms.columns[1:].values
    test_input = [0]*404
    user_symptoms = symptoms
    for symptom in user_symptoms:
        test_input[np.where(all_symptoms == symptom)[0][0]] = 1
    prediction = model.predict([test_input])
    return list(prediction)
