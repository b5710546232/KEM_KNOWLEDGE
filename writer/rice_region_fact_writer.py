import csv

f = open('../data/KEM03.csv','r')
output = open('../src/rice_region_fact.pl','w')
reader = csv.DictReader(f)

# :- module(rice_fact, []).
output.write(':- module(rice_region_fact, []).\n')
all_reg =["ภาคตะวันออกเฉียงเหนือ","ภาคกลาง","ภาคใต้","ภาคตะวันตก","ภาคเหนือ","ภาคตะวันออก"]
reg_t = {"ภาคตะวันออกเฉียงเหนือ":"northeast","ภาคกลาง":"central","ภาคใต้":"south","ภาคตะวันตก":"west","ภาคเหนือ":"north","ภาคตะวันออก":"east"}
all_reg_e =["northeast","central","south","west","north","east"]
result_list = []
for row in reader:
    # rice = row['Rice name']
    rice = row['Other name']
    rice = rice.replace(' ','')
    rice = rice.replace('-','')
    rice = rice.replace('’','')
    rice = rice.lower()
    # rice = rice.replace('.','')

    regions = row['region']
    regions = regions.split(" ")

    for reg in regions:
        if(reg != ''):
            reg = reg.replace("ตอนบน",'')
            reg = reg.replace("ล่าง",'')
            reg = reg.replace("บน",'')
            reg = reg.replace("ตอนล่าง",'')
            reg = reg.replace("ตอน",'')
            if(reg=='ทุกภาค'):
                for r in all_reg_e:
                    fact = "grow_in(%s,%s)."%(rice,r)
                    print(fact)
                    result_list.append(fact)
                    output.write(fact+"\n")
            elif(reg=='N/A'):
                # fact = "grow_in(%s,%s)."%(rice,'ไม่มีข้อมูล')
                fact = "grow_in(%s,%s)."%(rice,'none')
                print(fact)
                result_list.append(fact)
                output.write(fact+"\n")
            else:
                print(reg)
                fact = "grow_in(%s,%s)."%(rice,reg_t[reg])
                # fact = "grow_in(%s,%s)."%(rice,reg)
                print(fact)
                result_list.append(fact)
                output.write(fact+"\n")
    # output.write(rice_fact+"\n")
