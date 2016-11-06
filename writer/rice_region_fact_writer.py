import csv

f = open('../data/KEM02.csv','r')
output = open('../src/rice_region_fact.pl','w')
reader = csv.DictReader(f)

# :- module(rice_fact, []).
output.write(':- module(rice_region_fact, []).\n')
all_reg =["ภาคตะวันออกเฉียงเหนือ","ภาคกลาง","ภาคใต้","ภาคตะวันตก","ภาคเหนือ","ภาคตะวันออก"]
result_list = []
for row in reader:
    rice = row['Rice name']
    rice = rice.replace(' ','')
    rice = rice.replace('-','')
    # rice = rice.replace('.','')

    regions = row['region']
    regions = regions.split(" ")

    for reg in regions:
        if(reg != ''):
            reg = reg.replace("ตอนบน",'')
            reg = reg.replace("ล่าง",'')
            reg = reg.replace("บน",'')
            reg = reg.replace("ตอนล่าง",'')
            if(reg=='ทุกภาค'):
                for r in all_reg:
                    fact = "grow_in(%s,%s)."%(rice,r)
                    print(fact)
                    result_list.append(fact)
                    output.write(fact+"\n")
            elif(reg=='N/A'):
                fact = "grow_in(%s,%s)."%(rice,'ไม่มีข้อมูล')
                print(fact)
                result_list.append(fact)
                output.write(fact+"\n")
            else:
                fact = "grow_in(%s,%s)."%(rice,reg)
                print(fact)
                result_list.append(fact)
                output.write(fact+"\n")
    # output.write(rice_fact+"\n")
