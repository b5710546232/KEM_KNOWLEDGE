import csv

f = open('../data/KEM.csv','r')
output = open('../src/rice_region_fact.pl','w')
reader = csv.DictReader(f)

# :- module(rice_fact, []).
output.write(':- module(rice_region_fact, []).\n')

fact_list = []
for row in reader:
    temp = row['region']
    temp = temp.replace(' ','_')
    temp = temp.replace('-','_')
    temp = temp.replace('.','')
    fact = temp
    fact_list.append(fact)
    print(fact)
    output.write(fact+"\n")
