import csv

f = open('../data/list_distinct.csv','r')
f2 = open('../data/TAMBON.csv','r')
output = open('../src/province_region_fact.pl','w')
reader = csv.DictReader(f)
reader2 = csv.DictReader(f2)
# :- module(rice_fact, []).
output.write(':- module(province_region_fact, []).\n')

result_list = []
result_list2 = []
result1 = []
result2 = []
result_provinces = {}
for row in reader2:
    # CHANGWAT_T,CHANGWAT_E
    eng = row['CHANGWAT_E'].replace(' ','')
    eng = eng.replace('province','')
    eng = eng.replace('-','')
    eng = eng.replace('.','')
    eng = eng.lower()
    thai = row['CHANGWAT_T'].replace(' ','')
    thai = thai.replace('จ.','')
    thai = thai.replace('-','')
    thai = thai.replace('.','')
    # print(eng,thai)
    # p = {"eng":eng,"thai":thai}
    if eng not in result_provinces.keys():
        result_provinces[eng] = thai
        # print(result_provinces[eng])
print(len(result_provinces))

for row in reader:
    temp2 = row['Sr.No']
    try:
        if(int(temp2)>0):
            province = row['Province (Changwat).']
            province = province.replace(' ','')
            province = province.replace('-','')
            province = province.replace('.','')
            province = province.lower()
            province = province.replace('province','')
            region = row['Region']
            region = region.replace(' ','')
            region = region.replace('-','')
            region = region.replace('.','')
            region = region.lower()
            region_t ={"northeast":"ภาคตะวันออกเฉียงเหนือ","central":"ภาคกลาง","south":"ภาคใต้","west":"ภาคตะวันตก","north":"ภาคเหนือ","northern":"ภาคเหนือ","east":"ภาคตะวันออก"}
            # if region not in region_t.keys():
                # print(region)
                # input('hi')
            # region = region_t[region]
            province = result_provinces[province]
            fact = "has_region(%s,%s)."%(province,region_t[region])
            fact2 = "has_region(%s,%s)."%(province,region_t[region])
            if (province not in result1):
                result_list.append(fact)
                result1.append(province)
                output.write(fact+"\n")
                print(fact)
            if (fact2 not in result_list2):
                result_list2.append(fact2)
                result2.append(province)
    except:
        pass



for r in result_provinces.values():
    if r not in result1:
        print('not',r)
# print('total '+str(len(result1)))
# print('total '+str(len(result2)))
print('total '+str(len(result_list)))
