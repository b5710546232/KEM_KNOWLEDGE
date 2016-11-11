import csv

f = open('../data/province.csv','r')
output = open('../src/province.json','w')
reader = csv.DictReader(f)
output.write('[\n')

for row in reader:
    if row['Sr.No']!='' :
        output.write('\n{\n')
        output.write('\"name\" : '+'\"'+row['Province']+'\"')
        output.write(',\"lowername\" : '+'\"'+''.join(row['Province'].lower().split(' '))+'\"\n')
        output.write('},')
output.write(']')
