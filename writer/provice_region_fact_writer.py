import csv

f = open('../data/list_distinct.csv','r')
output = open('../src/provice_region_fact.pl','w')
reader = csv.DictReader(f)

# :- module(rice_fact, []).
output.write(':- module(provice_region_fact, []).\n')

result_list = []
for row in reader:
    temp2 = row['Sr.No']
    try:
        if(int(temp2)>0):
            provice = row['Province (Changwat).']
            provice = provice.replace(' ','_')
            provice = provice.replace('-','_')
            provice = provice.replace('.','')
            region = row['Region']
            region = region.replace(' ','_')
            region = region.replace('-','_')
            region = region.replace('.','')

            fact = "has(%s,%s)"%(provice,region)
            print(fact)
            if (fact not in result_list):
                result_list.append(fact)
                output.write(fact+"\n")
            print(fact)
    except:
        pass
print('total '+str(len(result_list)))
