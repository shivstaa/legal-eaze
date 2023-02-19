import spacy

def sendEntities(jsonFile):
    text = jsonFile
    nlp = spacy.load('en_legal_ner_trf')
    doc = nlp(text)
    entities = []
    for ent in doc.ents:
        entities.append(ent)
    return entities