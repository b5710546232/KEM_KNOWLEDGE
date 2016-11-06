import csv

f = open('../data/list_distinct.csv','r')
output = open('../src/province_region_fact.pl','w')
reader = csv.DictReader(f)

# :- module(rice_fact, []).
output.write(':- module(province_region_fact, []).\n')

result_list = []
for row in reader:
    temp2 = row['Sr.No']
    try:
        if(int(temp2)>0):
            province = row['Province (Changwat).']
            province = province.replace(' ','_')
            province = province.replace('-','_')
            province = province.replace('.','')
            region = row['Region']
            region = region.replace(' ','_')
            region = region.replace('-','_')
            region = region.replace('.','')

            fact = "has_region(%s,%s)."%(province.lower(),region.lower())
            print(fact)
            if (fact not in result_list):
                result_list.append(fact)
                output.write(fact+"\n")
            print(fact)
    except:
        pass
print('total '+str(len(result_list)))
