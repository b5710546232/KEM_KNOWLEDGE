import csv

f = open('../data/province.csv','r')
f2 = open('../data/TAMBON.csv','r')
output = open('../src/province_fact.pl','w')
reader = csv.DictReader(f)
reader2 = csv.DictReader(f2)

# :- module(rice_fact, []).
output.write(':- module(province_fact, []).\n')

result_list = []
result_provinces = {}
for row in reader2:
    # CHANGWAT_T,CHANGWAT_E
    eng = row['CHANGWAT_E'].replace(' ','')
    eng = eng.replace('province','')
    eng = eng.replace('-','')
    eng = eng.replace('.','')
    eng = eng.lower()
    thai = row['CHANGWAT_T'].replace(' ','')
    thai = thai.replace('-','')
    thai = thai.replace('.','')
    thai = thai.replace('จ','')
    # print(eng,thai)
    # p = {"eng":eng,"thai":thai}
    if eng not in result_provinces.keys():
        result_provinces[eng] = thai
        # print(result_provinces[eng])
print(len(result_provinces))
error = []
for row in reader:
    temp2 = row['Sr.No']
    try:
        if(int(temp2)>0):
            temp = row['Province']
            temp = temp.replace(' ','')
            temp = temp.replace('-','')
            temp = temp.replace('.','')
            temp = temp.lower()
            temp = temp.replace('province','')
            # print(temp)
            if(temp not in result_provinces.keys()):
                print("not in")
                print(temp)
                input("not in")
            fact = "province(%s)."%(result_provinces[temp])
            if fact not in result_list:
                result_list.append(fact)
                output.write(fact+"\n")
                print(fact)
    except:
        error.append(temp)
        # input()

for r in error:
    pass
    # print(r)
print('total '+str(len(result_list)))
