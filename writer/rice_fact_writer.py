import csv

f = open('../data/KEM.csv','r')
output = open('../src/rice_fact.pl','w')
reader = csv.DictReader(f)

# :- module(rice_fact, []).
output.write(':- module(rice_fact, []).\n')

rice_list = []
for row in reader:
    temp = row['Rice name']
    temp = temp.replace(' ','')
    temp = temp.replace('-','')
    # temp = temp.replace('.','')
    rice_fact = "rice(%s)."%(temp)
    rice_list.append(rice_fact)
    print(rice_fact)
    output.write(rice_fact+"\n")
