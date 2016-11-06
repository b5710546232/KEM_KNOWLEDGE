import csv

f = open('../data/province.csv','r')
output = open('../src/province_fact.pl','w')
reader = csv.DictReader(f)

# :- module(rice_fact, []).
output.write(':- module(province_fact, []).\n')

result_list = []
for row in reader:
    temp2 = row['Sr.No']
    try:
        if(int(temp2)>0):
            temp = row['Province']
            temp = temp.replace(' ','_')
            temp = temp.replace('-','_')
            temp = temp.replace('.','')
            fact = "province(%s)"%(temp)
            result_list.append(fact)
            output.write(fact+"\n")
            print(fact)
    except:
        pass
print('total '+str(len(result_list)))
