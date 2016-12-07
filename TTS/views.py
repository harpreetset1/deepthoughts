
# Create your views here.
'''
Created on Oct 4, 2016

@author: hsethi
'''
#from django.shortcuts import render
#import pyttsx
import requests, json
#import speech_recognition as sr
#from numpy import random
from django.http import HttpResponse
#app.config['SERVER_NAME'] = 'testingtts.local:5000'

def get_questions(request):
    import os
    fullPath = os.path.abspath("TTS/static/speech") 
    questions = '[';
    for fl in [doc for doc in os.listdir(fullPath) ]:
        questions+='{"id":"'+fl+'"},'
    return HttpResponse(questions[:-1]+"]")


def find_keywords(request, sentence):
    import nltk
    from pymongo import MongoClient
    text = nltk.word_tokenize(sentence)
    print(nltk.pos_tag(text))
    noise = []
    keyWd =[]
    keys = []
    db = MongoClient("10.0.2.101",27017)['bb_beyond']
    for pS in nltk.pos_tag(text):
        if(pS[1] =='NN' or pS[1] == 'NNP' or pS[1] == 'NNS' or pS[1] == 'JJ'):
            cursor = db['styles'].find({"$text":{"$search":pS[0]}})
            index = 0
            count = cursor.count()
            prodList = []
            if(count >0):
                noise.append({"keyword":pS[0],"style":count})
            while index != count:
                doc = cursor[index]
                #print(doc['name'])
                prodList.append(doc['style'])
                keyWd.append({"keyword":pS[0],"style":doc['style']})
                index+=1
            cursor.close()
            keys.append(pS[0])
    print(json.dumps(noise))
    kw = ','.join(keys)
    cursor = db['styles'].find({"$text":{"$search":kw}})
    #cursor = db['product'].find()
    index = 0
    count = cursor.count()
    prodList = []
    while index != count:
        doc = cursor[index]
        #print(doc['name'])
        prodList.append(doc['style']+":"+doc['description'])
        index+=1
    cursor.close()
    return HttpResponse(json.dumps(noise)+"</br>"+json.dumps(keyWd)+"</br>"+"</br>".join(prodList))
 
'''def get_question(request):
    url = "https://rwxft5kz58.execute-api.us-east-1.amazonaws.com/prod/data-mgr/question"
    headers = {'content-type': 'application/json'}
    payload = {}
    myResponse = requests.request("GET", url, data=payload, headers=headers)
    print(myResponse)
    return HttpResponse(json.dumps(myResponse.json()))

def tts(request):
    #import pythoncom
    #pythoncom.CoInitialize()
    questions = json.loads(get_question())
    
    engine = pyttsx.init()
    rate = engine.getProperty('rate')
    engine.setProperty('rate', rate-50)
    #engine.connect('started-utterance', onStart)
    #engine.connect('started-word', onWord)
    #engine.connect('finished-utterance', onEnd)
     #[{"text":"what is your name"}] 
    engine.say('Hi Harpreet')
    WIT_AI_KEY = "DTZFJRUQW6SP3ULTMCOU63ECZHI7BIE2" # Wit.ai keys are 32-character uppercase alphanumeric strings
    try:
        while True:
            onStart('Harpreet')
            i = questions[random.randint(0,len(questions))]['text']
            print(i)
            engine.say(i)
            engine.runAndWait()
            r = sr.Recognizer()
            with sr.Microphone() as source:
                print("Say something!")
                audio = r.listen(source)
            try:
                print("You said " + r.recognize_wit(audio, key=WIT_AI_KEY))
                
            except sr.UnknownValueError:
                print("Could not understand audio")
            except sr.RequestError as e:
                print("Could not request results ; {0}".format(e))
    except KeyboardInterrupt:
        print('interrupted!')
        
def onStart(name):
    print('starting', name)
def onWord(name, location, length):
    print('word', name, location, length)
def onEnd(name, completed):
    print('finishing', name, completed)
'''
