import csv

file = open('../data/TAMBON.csv','r',encoding="utf8")
out1 = open('../front/src/assets/json/district.json','w')
out2 = open('../front/src/assets/json/sub_district.json','w')
out3 = open('../front/src/assets/json/province.json','w')

reader = csv.DictReader(file)
e = enumerate(reader)
out1.write('[\n')
out2.write('[\n')
out3.write('[\n')

district_list = []
province_list = []
for i,r in list(e) :

    out2.write('\n{\n')


    sub_district = r['TAMBON_E']
    sub_district_lower = r['TAMBON_E'].replace(' ','_').lower()

    district = r['AMPHOE_E']
    district_lower = r['AMPHOE_E'].replace(' ','_').lower()

    province = r['CHANGWAT_E']
    province_lower = r['CHANGWAT_E'].replace('province','').replace('-','').replace('.','').lower().replace(' ','')

    if (province not in province_list) :
        out3.write('\n{\n')
        province_list.append(province)
        out3.write('\n"name" : "%s",'%(province))
        out3.write('\n"lowername" : "%s"'%(province_lower))
        out3.write('\n}\n')
        if i!=len(list(e)) :
            out3.write(',')

    if (district not in district_list) :
        out1.write('\n{\n')
        district_list.append(district)
        out1.write('\n"district" : "%s",'%(district))
        out1.write('\n"district_lower" : "%s",'%(district_lower))
        out1.write('\n"province_lower" : "%s"'%(province_lower))
        out1.write('\n}\n')
        if i!=len(list(e)) :
            out1.write(',')

    out2.write('\n"sub_district" : "%s",'%(sub_district))
    out2.write('\n"sub_district_lower" : "%s",'%(sub_district_lower))
    out2.write('\n"district_lower" : "%s",'%(district_lower))
    out2.write('\n"province_lower" : "%s"'%(province_lower))

    out2.write('\n}\n')
    if i!=0 :
        out2.write(',')


out1.write('\n]')
out2.write('\n]')
out3.write('\n]')
