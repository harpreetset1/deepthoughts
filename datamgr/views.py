from django.http import HttpResponse
import json, numpy, requests
from bson.objectid import ObjectId
# Create your views here.
def get_keywords(request, sentence):
    import nltk
    from nltk.stem.porter import PorterStemmer
    stemmer = PorterStemmer()
    filterWords = ['done','pleas','was','were','get','lot','able','more','much','most', 'go','other','too', 'have', 'have','had','did','do','thing','let','put','try','not','just']
    #from textblob import TextBlob
    #text = nltk.word_tokenize(sentence)
    '''from nltk.stem import WordNetLemmatizer
    wnl = WordNetLemmatizer()
    sentence1 = ''
    for word in sentence.split(' '):
        print(wnl.lemmatize(word,pos='v'))
        if(word.lower()!='to'):
            sentence1 +=wnl.lemmatize(word,pos='v')+' '
    print(sentence1)
    blob = TextBlob(sentence)
    print(blob.tags)
    print(blob.noun_phrases)'''
    text = nltk.word_tokenize(sentence)
    print(nltk.pos_tag(text))
    data = nltk.pos_tag(text)
    previousPOS = ''
    previoustoken = ''
    nounchain = []
    nouns = ''
    chainBreak = True
    print(data)
    idx = 0
    for pS in nltk.pos_tag(text):
        if(pS[1] =='NN' or pS[1] == 'NNP' or pS[1] == 'NNS' or pS[1] == 'NNPS'):
            print('previoustoken =%s and previousPOS=%s' % (previoustoken,previousPOS))
            print('newtoken=%s and newpos=%s' % (pS[0],pS[1]))
            print(len(nouns))
            if(len(previousPOS) > 0 and (stemmer.stem(previoustoken) not in filterWords) and (stemmer.stem(pS[0].lower()) not in filterWords)):
                if(previoustoken != pS[0] and (previousPOS[0]=='N' and pS[1][0] =='N' )):
                    if(len(nouns)==0 ):
                        nouns = previoustoken+' '+ pS[0]
                        print(idx)
                        #data = [t for t in data if (t[0]!=previoustoken and (cnt-1)==0)]
                        del data[idx-1]
                        idx-=1
                        
                    else:
                        nouns = nouns+' '+ pS[0]
                    #print(data)
                    #print(nouns)
                    #data = [t for t in data if (t[0]!=pS[0] and (cnt-1)==0)]
                    #print(idx)
                    del data[idx]
                    idx-=1
                    #print(data)
                    chainBreak=False
        else:
            chainBreak = True
                    
        if(chainBreak==True and nouns !=''):
            nounchain.append(nouns)
            nouns=''
        idx+=1    
        previoustoken = pS[0]
        previousPOS = pS[1]
    #nounlist = [noun for noun in nounchain if noun !='']
    print(nouns)
    if(chainBreak==False and nouns !=''):
        nounchain.append(nouns)
        nouns=''
    print('nounchain %s' % nounchain) 
    print(data)               
    allkeys = nounchain
    previousPOS = ''
    previoustoken = ''
    for pS in data:
        if(len(pS[0])>1):
            print(stemmer.stem(pS[0].lower()))
            if(pS[1] =='NN' or pS[1] == 'NNP' or pS[1] == 'NNS' or pS[1] == 'JJ' or pS[1] == 'NNPS' or pS[1] in ('VBG','VBN','VB')):
                
                if(len(previousPOS)>0 and (previousPOS[0]=='N' and pS[1][0] =='N' )):
                    if((len(allkeys[-1].split(' '))==1) ):
                        allkeys.pop()
                    if(previoustoken != pS[0].lower() and (stemmer.stem(previoustoken) not in filterWords) and (stemmer.stem(pS[0].lower()) not in filterWords)):
                        allkeys.append(previoustoken+' '+pS[0].lower())
                elif(len(previousPOS)>0 and (previousPOS[0]=='J' and pS[1][0] =='N' )):
                    if(len(allkeys)>0 and len(allkeys[-1].split(' '))==1):
                        allkeys.pop()
                    if(len(previoustoken)>2 and (stemmer.stem(previoustoken) not in filterWords) and (stemmer.stem(pS[0].lower()) not in filterWords)):
                        allkeys.append(previoustoken+' '+pS[0].lower())
                elif(stemmer.stem(pS[0].lower()) not in filterWords):
                    allkeys.append(pS[0].lower())
            
            if((previousPOS[0:2] == 'RB' and pS[1][0] in ('N','V','J'))):
                if(len(allkeys)>0 ):
                    allkeys.pop()
                if(len(previoustoken)>2 and (stemmer.stem(previoustoken) not in filterWords) and (stemmer.stem(pS[0].lower()) not in filterWords)):
                    allkeys.append(previoustoken+' '+pS[0].lower())
            elif((previousPOS == 'TO' and pS[1][0] in ('V')) and len(pS[0])>2):
                allkeys.append(pS[0].lower())
            elif((previousPOS[0:2] == 'VB' and pS[1][0] in ('N'))):
                if(len(allkeys)>0 and ((previoustoken in allkeys))):
                    allkeys.remove(previoustoken)
                if(len(stemmer.stem(previoustoken))>2 and (stemmer.stem(previoustoken) not in filterWords) and (stemmer.stem(pS[0].lower()) not in filterWords)):
                    allkeys.append(previoustoken+' '+pS[0].lower())
                
            
        previoustoken = pS[0].lower()
        previousPOS = pS[1]
    #
    
    uk = [keys for keys in allkeys if stemmer.stem(keys) not in filterWords]
    print(sorted(set(uk)))
    uniqueKeys = sorted(set(uk))
    #[x for x in allkeys if x not in uniqueKeys and (uniqueKeys.append(x) or True)]
    return HttpResponse(', '.join(uniqueKeys))
#get_keywords("request", "I use the Nike app it helps me track my workout and distance run as well as heart rate")
def get_intent(request,sentence):
    import nltk
    url = 'http://conceptnet5.media.mit.edu/data/5.4/search?limit=10&rel=/r/Synonym&end=/c/en/'
    headers = {'content-type': 'application/json'}
    intents = ['ask for','aspire','attempt','buy','cherish','contemplate','covet','crave','desire','dream','endeavor','enjoy','get','hanker','hold dear','inquire','intend','like','long','love','need','purpose','pursue','request','require','seek','try','want','wish','yearn']
    text = nltk.word_tokenize(sentence)
    tokens = nltk.pos_tag(text)
    from nltk.stem import PorterStemmer
    stemmer = PorterStemmer()
    for pS in tokens:
        token = stemmer.stem(pS[0])
        if(token in intents):
            print('looking for something')
        
        
